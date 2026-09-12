window.TP_DB_SNAPSHOT={
  settings:{siteName:'Teshow × Ping PH',tagline:'Two artists. One evolving story.',description:'A fan-focused space for artist stories, series moments, news, events and collectible merch.',disclaimer:'Not an official GMMTV website.',messageUrl:'https://www.messenger.com/',instagram:'https://www.instagram.com/',facebook:'https://www.facebook.com/',x:'https://x.com/',adsEnabled:false,adsenseClient:'',defaultTimezone:'Asia/Bangkok'},
  links:[
    {id:'message',label:'Message Us',url:'https://www.messenger.com/',location:'footer',enabled:true,newTab:true},
    {id:'instagram',label:'Instagram',url:'https://www.instagram.com/',location:'footer',enabled:true,newTab:true},
    {id:'facebook',label:'Facebook',url:'https://www.facebook.com/',location:'footer',enabled:true,newTab:true},
    {id:'x',label:'X (Twitter)',url:'https://x.com/',location:'footer',enabled:true,newTab:true}
  ],
  adSlots:[
    {id:'home-mid',page:'home',placement:'between-sections',enabled:false},{id:'news-feed',page:'news',placement:'after-3-cards',enabled:false},{id:'series-mid',page:'series',placement:'between-sections',enabled:false},{id:'events-mid',page:'events',placement:'below-calendar',enabled:false},{id:'merch-feed',page:'merch',placement:'after-products',enabled:false}
  ],
  media:[
    {id:'media-logo',category:'Site',fileName:'logo.png',driveFileId:'1gmjQ4pThtX34PRlzZIKyIGrBfXC2i-Hg',alt:'Teshow × Ping PH logo',replaceable:false,localFallback:'logo.png'},
    {id:'media-teshow-profile',category:'Artists',fileName:'teshow-profile-current.jpg',driveFileId:'1rFRGdTEw4shNqnK-ec5CKHyk3KmQca_9',alt:'Teshow profile image',replaceable:true},
    {id:'media-ping-profile',category:'Artists',fileName:'ping-profile-current.jpg',driveFileId:'1Cvyaxkitbcu0wzzB4hjd9BSV23fzHD4a',alt:'Ping profile image',replaceable:true},
    {id:'media-dark-dice',category:'Series',fileName:'dark-dice.jpg',driveFileId:'1pUFn0uegGzD7y8CGYI23ZIga0-0iK5B_',alt:'The Dark Dice series image',replaceable:true},
    {id:'media-rebound',category:'Series',fileName:'the-rebound.jpg',driveFileId:'1-vKVWmgf2TzpTuzMPuKalKGoitta1jo8',alt:'The Rebound series image',replaceable:true},
    {id:'media-charity-football',category:'Events',fileName:'event-charity-football-current.jpg',driveFileId:'1YtuWLqtxXHP3eqSYERUJhHA1bWn7Y4Kd',alt:'Charity football event image',replaceable:true}
  ],
  pageCopy:[
    {page:'artists',eyebrow:'Artists',heading:'Teshow. Ping.',description:'Two dedicated profiles connected to their series, news, events and merch.'},
    {page:'series',eyebrow:'Series',heading:'Every role. Connected.',description:'Browse ongoing and completed series, with episode release dates for active titles.'},
    {page:'news',eyebrow:'News',heading:'Stories around Teshow & Ping.',description:'Latest stories, announcements and updates connected across the site.'},
    {page:'events',eyebrow:'Events',heading:'Artist programs & appearances.',description:'Browse appearances, fan events and episode release dates in one calendar.'},
    {page:'merch',eyebrow:'Merch',heading:'Carry the fandom with you.',description:'Fan collection concepts, products and variations connected to artists and series.'}
  ],
  homeSections:[
    {id:'home-hero',sort:1,type:'hero',eyebrow:'Teshow × Ping PH',title:'Two artists. One evolving story.',description:'Profiles, series, news, events and merch — connected so there is always somewhere to explore next.',primaryLabel:'Meet the Artists',primaryLink:'/artists',secondaryLabel:'Explore Series',secondaryLink:'/series'},
    {id:'home-featured-series',sort:2,type:'featured-series',eyebrow:'Featured · Ongoing',relatedId:'match-point',primaryLabel:'View Series',primaryLink:'/match-point',secondaryLabel:'Read Story',secondaryLink:'/news-match-point'},
    {id:'home-artists',sort:3,type:'artists',eyebrow:'Artists',title:'Meet the artists.'},
    {id:'home-news',sort:4,type:'news',eyebrow:'News',title:'What’s happening.'},
    {id:'home-merch',sort:5,type:'merch',eyebrow:'Merch',title:'Carry the fandom with you.',description:'A first look at the future artist collection — apparel, collectibles and accessories.',primaryLabel:'Explore Merch',primaryLink:'/merch'}
  ],
  artists:[
    {id:'artist-teshow',slug:'teshow',name:'Teshow',fullName:'Teshow Promsakha na Sakonnakhon',role:'Actor · Bay in Match Point',image:'media-teshow-profile',bio:'Actor featured as Mark in The Dark Dice and Bay in Match Point.',status:'published'},
    {id:'artist-ping',slug:'ping',name:'Ping',fullName:'Krittanun Aunchananun',role:'Actor · Sun in Match Point',image:'media-ping-profile',bio:'Actor known for Ai Long Nhai, My Dear Gangster Oppa, The Rebound and Match Point.',status:'published'}
  ],
  series:[
    {id:'series-match-point',slug:'match-point',title:'Match Point',year:'2026',status:'Ongoing',genres:'Romance · Drama · Sport',image:'media-teshow-profile',summary:'Sun is his school’s star tennis player; Bay is a free-spirited art student. Their rivalry is forced into a doubles partnership.',timezone:'Asia/Bangkok',relatedArtists:['teshow','ping']},
    {id:'series-the-rebound',slug:'the-rebound',title:'The Rebound',year:'2024',status:'Completed',genres:'Romance · Sport · Drama',image:'media-rebound',summary:'Zen’s basketball team is threatened with collapse, pushing him to recruit new players and rebuild the group.',timezone:'Asia/Bangkok',relatedArtists:['ping']},
    {id:'series-the-dark-dice',slug:'the-dark-dice',title:'The Dark Dice',year:'2025',status:'Completed',genres:'Thriller · Survival · Fantasy',image:'media-dark-dice',summary:'A survival contest built around fighting, betrayal and life-or-death choices.',timezone:'Asia/Bangkok',relatedArtists:['teshow']},
    {id:'series-ai-long-nhai',slug:'ai-long-nhai',title:'Ai Long Nhai',year:'2022',status:'Completed',genres:'Romance',image:'media-ping-profile',summary:'After returning to Thailand, Ai meets Nhai at university and quickly becomes drawn to him.',timezone:'Asia/Bangkok',relatedArtists:['ping']},
    {id:'series-my-dear-gangster-oppa',slug:'my-dear-gangster-oppa',title:'My Dear Gangster Oppa',year:'2023',status:'Completed',genres:'Romance · Crime',image:'media-ping-profile',summary:'An online friendship develops into something more complicated when hidden identities come into focus.',timezone:'Asia/Bangkok',relatedArtists:['ping']}
  ],
  episodes:[
    {seriesId:'series-match-point',episode:10,title:'Episode 10',releaseDate:'2026-08-27',releaseTime:'07:00',timezone:'Asia/Bangkok',status:'Aired',summary:'Episode details can be expanded after release.'},
    {seriesId:'series-match-point',episode:11,title:'Episode 11',releaseDate:'2026-09-03',releaseTime:'07:00',timezone:'Asia/Bangkok',status:'Aired',summary:'Next scheduled episode.'}
  ],
  news:[
    {id:'news-match-point',slug:'match-point',title:'Match Point serves a brand-new Teshow × Ping pairing',showcaseTitle:'Match Point takes center court',showcaseDescription:'GMMTV pairs Teshow and Ping as Bay and Sun in a new tennis romance built around rivalry, family tension and doubles competition.',showcaseImage:'media-teshow-profile',category:'Series',publishedDate:'2026-08-20',relatedSeries:['match-point'],relatedArtists:['teshow','ping'],blocks:[{type:'paragraph',value:'GMMTV introduced Teshow Promsakha na Sakonnakhon and Ping Krittanun Aunchananun as the leads of Match Point, with Ping playing Sun and Teshow playing Bay.'},{type:'image',value:'media-teshow-profile',alt:'Match Point promotional art'},{type:'paragraph',value:'The story centers on two longtime rivals whose families run competing dim sum businesses. Their conflict reaches the tennis court, where circumstances force Sun and Bay to represent their school as a doubles team.'},{type:'paragraph',value:'The ongoing-series layout keeps release information visible while episode details can expand over time.'}]},
    {id:'news-allstar',slug:'allstar',title:'Teshow and Ping join Team GMMTV for Star Magic All-Star Games 2026',showcaseTitle:'Star Magic × GMMTV brings both artists to the court',showcaseDescription:'Teshow and Ping were named on Team GMMTV for the 2026 All-Star Games.',showcaseImage:'media-ping-profile',category:'Event',publishedDate:'2026-08-18',relatedSeries:[],relatedArtists:['teshow','ping'],blocks:[{type:'paragraph',value:'ABS-CBN announced a Philippines–Thailand crossover for the 2026 Star Magic All-Star Games, with Team GMMTV including both Ping and Teshow.'},{type:'paragraph',value:'The event places the two artists in a sports setting outside their scripted work and connects naturally back to each artist profile.'}]},
    {id:'news-ost',slug:'ost',title:'“Love Match” expands the Match Point story through music',showcaseTitle:'“Love Match” brings Teshow and Ping together on the Match Point OST',showcaseDescription:'A music update tied directly to the series.',showcaseImage:'media-teshow-profile',category:'Music',publishedDate:'2026-08-16',relatedSeries:['match-point'],relatedArtists:['teshow','ping'],blocks:[{type:'paragraph',value:'GMMTV’s official site lists “Love Match Ost.Match Point” performed by Teshow and Ping alongside current Match Point content.'},{type:'paragraph',value:'Music-related updates can sit beside series news while artist and series relationships remain connected throughout the site.'}]}
  ],
  events:[
    {id:'event-charity-football',slug:'charity-football',title:'Special Olympics Thailand Charity Football Match 2026',venue:'The Chaengwattana Derby',date:'2026-08-29',time:'18:30',timezone:'Asia/Bangkok',image:'media-charity-football',relatedArtists:['teshow','ping'],relatedSeries:[],blocks:[{type:'paragraph',value:'The Special Olympics Thailand Charity Football Match 2026 brings artists and supporters together around a live football program with a charitable purpose.'}]},
    {id:'event-meet-greet-bangkok',slug:'meet-greet-bangkok',title:'Teshow × Ping Meet & Greet Bangkok',venue:'Demo Venue',date:'2026-08-26',time:'14:00',timezone:'Asia/Bangkok',image:'media-teshow-profile',relatedArtists:['teshow','ping'],relatedSeries:['match-point'],blocks:[{type:'paragraph',value:'Sample event content ready for CMS replacement.'}]},
    {id:'event-fan-con-manila',slug:'fan-con-manila',title:'Teshow × Ping Fan Con Manila',venue:'Venue TBA',date:'2026-10-18',time:'19:00',timezone:'Asia/Manila',image:'media-ping-profile',relatedArtists:['teshow','ping'],relatedSeries:['match-point'],blocks:[{type:'paragraph',value:'Sample fan-con event content ready for CMS replacement.'}]},
    {id:'event-match-point-launch',slug:'match-point-launch',title:'Match Point Launch Event',venue:'Bangkok',date:'2026-07-15',time:'18:00',timezone:'Asia/Bangkok',image:'media-teshow-profile',relatedArtists:['teshow','ping'],relatedSeries:['match-point'],blocks:[{type:'paragraph',value:'Sample launch event content ready for CMS replacement.'}]},
    {id:'event-match-point-screening',slug:'match-point-screening',title:'Match Point Fan Screening & Cast Talk',venue:'Venue TBA',date:'2026-09-20',time:'18:00',timezone:'Asia/Bangkok',image:'media-teshow-profile',relatedArtists:['teshow','ping'],relatedSeries:['match-point'],blocks:[{type:'paragraph',value:'Sample screening event content ready for CMS replacement.'}]}
  ],
  merch:[{id:'merch-tee',slug:'graphic-tee',title:'Artist Collection Graphic Tee',description:'A clean fan-collection tee concept for the demo storefront.',images:['media-teshow-profile'],status:'Available',relatedArtists:['teshow','ping'],relatedSeries:['match-point'],variants:[{name:'XS',price:590,currency:'THB',status:'Available'},{name:'S',price:590,currency:'THB',status:'Available'},{name:'M',price:620,currency:'THB',status:'Available'},{name:'XL',price:650,currency:'THB',status:'Available'},{name:'XXL',price:690,currency:'THB',status:'Available'}]}],
  sitePages:[
    {slug:'about',title:'About',heading:'A space built around the stories fans want to keep following.',body:'Teshow × Ping PH is a fan-focused editorial and archive experience for artist profiles, series updates, news, events and collectible merch concepts.'},
    {slug:'contact',title:'Contact',heading:'Questions, corrections or something worth sharing?',body:'Use the available social channels for general contact. Official management and business-contact details should only be added when verified.'},
    {slug:'privacy',title:'Privacy',heading:'A simple privacy notice for the site.',body:'This site is designed to collect only data needed for features that are actually enabled. Analytics, advertising, push notifications and contact features should be disclosed here before production use.'},
    {slug:'terms',title:'Terms',heading:'Guidelines for using this fan-focused site.',body:'This is an independent fan-focused website and is not an official GMMTV property. Content, trademarks and third-party media remain subject to their respective owners and applicable law.'}
  ],
  notifications:[]
};
