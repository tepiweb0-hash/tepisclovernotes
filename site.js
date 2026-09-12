
(function(){
 const root=document.documentElement; root.dataset.theme=localStorage.getItem('tp-theme')||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');
 function sync(){document.querySelectorAll('.theme-toggle').forEach(b=>b.textContent=root.dataset.theme==='dark'?'☀':'☾')} sync();
 const menu=document.querySelector('.mobile-menu');
 document.querySelectorAll('.mobile-toggle').forEach(b=>b.addEventListener('click',e=>{e.stopPropagation();menu?.classList.toggle('open')}));
 document.addEventListener('click',async e=>{
   if(e.target.closest('.theme-toggle')){root.dataset.theme=root.dataset.theme==='dark'?'light':'dark';localStorage.setItem('tp-theme',root.dataset.theme);sync();return}
   const panel=document.querySelector('.notification-panel');
   if(e.target.closest('.notify-bell')){e.stopPropagation();panel?.classList.toggle('open');return}
   if(e.target.closest('.panel-close')){panel?.classList.remove('open');return}
   if(e.target.closest('.enable-notifications')){if(!('Notification' in window)){toast('Notifications are not supported in this browser.');return}const p=await Notification.requestPermission();localStorage.setItem('tp-notification-permission',p);document.querySelectorAll('.notify-state').forEach(x=>x.textContent=p==='granted'?'Notifications On ✓':'Notifications Not Enabled');return}
   const acc=e.target.closest('.acc-head');if(acc){const body=acc.nextElementSibling;body?.classList.toggle('open');acc.classList.toggle('open');acc.querySelector('span').textContent=body?.classList.contains('open')?'Hide Episode List':'View Episode List';return}
   const demo=e.target.closest('[data-demo]');if(demo){e.preventDefault();toast(demo.dataset.demo||'Demo only.');return}
   if(panel?.classList.contains('open')&&!panel.contains(e.target))panel.classList.remove('open');
   if(menu?.classList.contains('open')&&!menu.contains(e.target)&&!e.target.closest('.mobile-toggle'))menu.classList.remove('open');
 });
 document.querySelectorAll('.mobile-menu a').forEach(a=>a.addEventListener('click',()=>menu?.classList.remove('open')));
 function toast(t){let x=document.createElement('div');x.textContent=t;x.style.cssText='position:fixed;left:50%;bottom:24px;z-index:2000;transform:translateX(-50%);background:#081d2f;color:#fff;padding:12px 18px;border-radius:999px;font-weight:700;max-width:90%';document.body.appendChild(x);setTimeout(()=>x.remove(),2200)}
 const p=localStorage.getItem('tp-notification-permission');if(p==='granted')document.querySelectorAll('.notify-state').forEach(x=>x.textContent='Notifications On ✓');
 document.querySelectorAll('form').forEach(f=>f.addEventListener('submit',e=>{e.preventDefault();toast('Demo only — nothing was submitted or charged.')}))
})();


(function(){
 const grid=document.getElementById('event-calendar'); if(!grid)return;
 const title=document.getElementById('calendar-title'), modal=document.getElementById('event-modal'), modalTitle=document.getElementById('event-modal-title'), content=document.getElementById('event-modal-content');
 const fallbackEvents={
  '2026-08-26':[{title:'Teshow × Ping Meet & Greet Bangkok',time:'Artist appearance',place:'Bangkok, Thailand',status:'Today',summary:'A fan-focused appearance featuring Teshow and Ping together.',url:'/event-meet-greet-bangkok'}],
  '2026-08-29':[{title:'Special Olympics Thailand Charity Football Match 2026',time:'Show 3:30 PM · Match 6:30 PM',place:'Thunderdome Stadium',status:'Upcoming',summary:'Teshow and Ping are among the participating artists for The Chaengwattana Derby.',url:'/event-charity-football'},{title:'Match Point Fan Screening & Cast Talk',time:'Evening program',place:'Event venue',status:'Upcoming',summary:'A second same-day sample showing how multiple events are presented cleanly in one date popup.',url:'/event-match-point-screening'}],
  '2026-10-18':[{title:'Teshow × Ping Fan Con Manila',time:'Fan event',place:'Manila, Philippines',status:'Upcoming',summary:'A sample fan-con entry connected to both artists.',url:'/event-fan-con-manila'}]
 };
 let events=window.TP_DYNAMIC_EVENTS||fallbackEvents;
 let view=new Date(Date.UTC(2026,7,1));
 const key=(y,m,d)=>`${y}-${String(m+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
 function render(){const y=view.getUTCFullYear(),m=view.getUTCMonth(),first=new Date(Date.UTC(y,m,1)).getUTCDay(),days=new Date(Date.UTC(y,m+1,0)).getUTCDate();title.textContent=new Intl.DateTimeFormat('en',{month:'long',year:'numeric',timeZone:'UTC'}).format(view);grid.innerHTML='';for(let i=0;i<first;i++){let x=document.createElement('span');x.className='calendar-blank';grid.appendChild(x)}for(let d=1;d<=days;d++){const k=key(y,m,d), ev=events[k]||[];let b=document.createElement('button');b.type='button';b.className='calendar-day'+(ev.length?' has-event':'');b.dataset.date=k;b.innerHTML=`<span class="day-number">${d}</span>${ev.length?`<span class="event-count">${ev.length===1?'Event':ev.length+' events'}</span>`:'<span class="event-count empty">&nbsp;</span>'}`;b.addEventListener('click',()=>openDay(k));grid.appendChild(b)}}
 function openDay(k){const [y,m,d]=k.split('-').map(Number), ev=events[k]||[];modalTitle.textContent=new Intl.DateTimeFormat('en',{month:'long',day:'numeric',year:'numeric',timeZone:'UTC'}).format(new Date(Date.UTC(y,m-1,d)));content.innerHTML=ev.length?ev.map(e=>`<article class="event-summary"><div class="event-summary-top"><span class="status upcoming">${e.status}</span><span>${e.time}</span></div><h3>${e.title}</h3><p class="event-place">${e.place}</p><p>${e.summary}</p><a class="btn" href="${e.url}">View Event Details</a></article>`).join(''):'<div class="no-events"><strong>No events scheduled for this date.</strong><p>Choose another date to continue exploring the calendar.</p></div>';modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.classList.add('modal-open')}
 function close(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.classList.remove('modal-open')}
 document.querySelectorAll('[data-close-event]').forEach(x=>x.addEventListener('click',close));document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});
 document.getElementById('cal-prev').addEventListener('click',()=>{view=new Date(Date.UTC(view.getUTCFullYear(),view.getUTCMonth()-1,1));render()});document.getElementById('cal-next').addEventListener('click',()=>{view=new Date(Date.UTC(view.getUTCFullYear(),view.getUTCMonth()+1,1));render()});document.getElementById('cal-today').addEventListener('click',()=>{const n=new Date();view=new Date(Date.UTC(n.getUTCFullYear(),n.getUTCMonth(),1));render()});document.addEventListener('tp:events-ready',()=>{events=window.TP_DYNAMIC_EVENTS||fallbackEvents;render()});render();
})();
