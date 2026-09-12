(function(){
 const root=document.documentElement;try{root.dataset.theme=localStorage.getItem('tp-theme')||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light')}catch(e){root.dataset.theme='light'}
 function sync(){document.querySelectorAll('.theme-toggle').forEach(b=>b.textContent=root.dataset.theme==='dark'?'☀':'☾')} sync();
 document.addEventListener('click',async e=>{
   const menu=document.querySelector('.mobile-menu'),panel=document.querySelector('.notification-panel');
   if(e.target.closest('.mobile-toggle')){e.stopPropagation();menu?.classList.toggle('open');return}
   if(e.target.closest('.theme-toggle')){root.dataset.theme=root.dataset.theme==='dark'?'light':'dark';try{localStorage.setItem('tp-theme',root.dataset.theme)}catch(_){}sync();return}
   if(e.target.closest('.notify-bell')){e.stopPropagation();panel?.classList.toggle('open');return}
   if(e.target.closest('.panel-close')){panel?.classList.remove('open');return}
   if(e.target.closest('.enable-notifications')){if(!('Notification'in window))return;const p=await Notification.requestPermission();document.querySelectorAll('.notify-state').forEach(x=>x.textContent=p==='granted'?'Notifications On ✓':'Notifications Not Enabled');return}
   const acc=e.target.closest('.acc-head');if(acc){const b=acc.nextElementSibling;b?.classList.toggle('open');return}
   if(menu?.classList.contains('open')&&!menu.contains(e.target)&&!e.target.closest('.mobile-toggle'))menu.classList.remove('open');
   if(panel?.classList.contains('open')&&!panel.contains(e.target))panel.classList.remove('open');
 });
 document.addEventListener('tp:rendered',()=>{document.querySelectorAll('.mobile-menu a').forEach(a=>a.onclick=()=>document.querySelector('.mobile-menu')?.classList.remove('open'));});
})();
