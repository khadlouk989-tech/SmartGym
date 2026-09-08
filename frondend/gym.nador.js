// ===== DATA =====
const ACTIVITIES=[
  {name:"Musculation",desc:"Développez force et masse avec nos équipements haut de gamme et coachs experts.",color:"#E8FF00",img:"https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80",level:"Tous niveaux",duration:"45-90 min",capacity:30},
  {name:"Cardio",desc:"Brûlez des calories et améliorez votre endurance avec nos machines dernière génération.",color:"#FF3B30",img:"https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&q=80",level:"Tous niveaux",duration:"20-60 min",capacity:25},
  {name:"Yoga",desc:"Trouvez l'équilibre parfait entre corps et esprit avec nos instructeurs certifiés.",color:"#00C896",img:"https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80",level:"Débutant–Avancé",duration:"60 min",capacity:15},
  {name:"CrossFit",desc:"Poussez vos limites avec nos sessions intenses et variées adaptées à tous.",color:"#FF6B00",img:"https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80",level:"Intermédiaire",duration:"60 min",capacity:12},
  {name:"Boxe & Combat",desc:"Apprenez les techniques de boxe dans une ambiance dynamique et motivante.",color:"#9B59B6",img:"https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=600&q=80",level:"Tous niveaux",duration:"60 min",capacity:20},
  {name:"Pilates",desc:"Renforcez votre cœur musculaire et améliorez votre posture avec la méthode Pilates.",color:"#00B4D8",img:"https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80",level:"Débutant",duration:"55 min",capacity:12}
];

const COACHES=[
  {name:"Karim Benzali",role:"Coach Musculation & Force",specs:["Musculation","Powerlifting","Nutrition"],exp:"10 ans",rating:4.9,reviews:128,sessions:850,seed:"karim",bg:"E8FF00"},
  {name:"Sofia Mendez",role:"Coach Yoga & Bien-être",specs:["Yoga","Méditation","Pilates"],exp:"8 ans",rating:5.0,reviews:96,sessions:620,seed:"sofia",bg:"FF3B30"},
  {name:"Alexandre Dubois",role:"Coach CrossFit & HIIT",specs:["CrossFit","HIIT","Cardio"],exp:"7 ans",rating:4.8,reviews:112,sessions:700,seed:"alex",bg:"FF6B00"},
  {name:"Nadia Ouali",role:"Coach Boxe & Arts Martiaux",specs:["Boxe","Muay Thaï","Self-défense"],exp:"12 ans",rating:4.9,reviews:87,sessions:930,seed:"nadia",bg:"9B59B6"},
  {name:"Thomas Leroy",role:"Coach Cardio & Running",specs:["Cardio","Running","Triathlon"],exp:"6 ans",rating:4.7,reviews:74,sessions:510,seed:"thomas",bg:"00C896"},
  {name:"Emma Fontaine",role:"Coach Pilates & Rééducation",specs:["Pilates","Rééducation","Stretching"],exp:"9 ans",rating:4.9,reviews:103,sessions:780,seed:"emma",bg:"00B4D8"}
];

const SCHEDULE={
  "Lundi":[
    {time:"07:00",dur:60,activity:"Musculation",coach:"Karim Benzali",spots:30,booked:18,level:"Tous niveaux",color:"#E8FF00"},
    {time:"09:00",dur:55,activity:"Yoga",coach:"Sofia Mendez",spots:15,booked:12,level:"Débutant",color:"#00C896"},
    {time:"18:00",dur:60,activity:"Cardio",coach:"Thomas Leroy",spots:25,booked:20,level:"Tous niveaux",color:"#FF3B30"}
  ],
  "Mardi":[
    {time:"08:00",dur:60,activity:"CrossFit",coach:"Alexandre Dubois",spots:12,booked:10,level:"Intermédiaire",color:"#FF6B00"},
    {time:"10:00",dur:60,activity:"Pilates",coach:"Emma Fontaine",spots:12,booked:9,level:"Débutant",color:"#00B4D8"},
    {time:"19:00",dur:60,activity:"Musculation",coach:"Karim Benzali",spots:30,booked:24,level:"Tous niveaux",color:"#E8FF00"}
  ],
  "Mercredi":[
    {time:"08:00",dur:60,activity:"Yoga",coach:"Sofia Mendez",spots:15,booked:11,level:"Tous niveaux",color:"#00C896"},
    {time:"10:30",dur:60,activity:"CrossFit",coach:"Alexandre Dubois",spots:12,booked:12,level:"Intermédiaire",color:"#FF6B00"},
    {time:"12:00",dur:45,activity:"Cardio",coach:"Thomas Leroy",spots:25,booked:10,level:"Tous niveaux",color:"#FF3B30"},
    {time:"18:00",dur:60,activity:"Boxe",coach:"Nadia Ouali",spots:20,booked:16,level:"Tous niveaux",color:"#9B59B6"},
    {time:"19:30",dur:55,activity:"Pilates",coach:"Emma Fontaine",spots:12,booked:8,level:"Débutant",color:"#00B4D8"}
  ],
  "Jeudi":[
    {time:"07:00",dur:60,activity:"Musculation",coach:"Karim Benzali",spots:30,booked:22,level:"Tous niveaux",color:"#E8FF00"},
    {time:"09:30",dur:55,activity:"Yoga",coach:"Sofia Mendez",spots:15,booked:13,level:"Avancé",color:"#00C896"},
    {time:"18:30",dur:60,activity:"HIIT",coach:"Alexandre Dubois",spots:20,booked:20,level:"Intermédiaire",color:"#FF6B00"},
    {time:"20:00",dur:60,activity:"Cardio",coach:"Thomas Leroy",spots:25,booked:12,level:"Tous niveaux",color:"#FF3B30"}
  ],
  "Vendredi":[
    {time:"07:00",dur:60,activity:"CrossFit",coach:"Alexandre Dubois",spots:12,booked:11,level:"Avancé",color:"#FF6B00"},
    {time:"10:00",dur:60,activity:"Boxe",coach:"Nadia Ouali",spots:20,booked:7,level:"Débutant",color:"#9B59B6"},
    {time:"12:00",dur:55,activity:"Pilates",coach:"Emma Fontaine",spots:12,booked:10,level:"Tous niveaux",color:"#00B4D8"},
    {time:"18:00",dur:60,activity:"Musculation",coach:"Karim Benzali",spots:30,booked:28,level:"Tous niveaux",color:"#E8FF00"},
    {time:"19:30",dur:45,activity:"Yoga",coach:"Sofia Mendez",spots:15,booked:14,level:"Intermédiaire",color:"#00C896"}
  ],
  "Samedi":[
    {time:"09:00",dur:90,activity:"CrossFit",coach:"Alexandre Dubois",spots:15,booked:15,level:"Tous niveaux",color:"#FF6B00"},
    {time:"10:00",dur:60,activity:"Yoga",coach:"Sofia Mendez",spots:20,booked:17,level:"Débutant",color:"#00C896"},
    {time:"11:30",dur:60,activity:"Boxe",coach:"Nadia Ouali",spots:20,booked:13,level:"Intermédiaire",color:"#9B59B6"},
    {time:"14:00",dur:60,activity:"Musculation",coach:"Karim Benzali",spots:30,booked:19,level:"Tous niveaux",color:"#E8FF00"}
  ],
  "Dimanche":[
    {time:"09:00",dur:60,activity:"Yoga",coach:"Sofia Mendez",spots:20,booked:15,level:"Tous niveaux",color:"#00C896"},
    {time:"10:30",dur:60,activity:"Cardio",coach:"Thomas Leroy",spots:25,booked:8,level:"Tous niveaux",color:"#FF3B30"},
    {time:"15:00",dur:45,activity:"Pilates",coach:"Emma Fontaine",spots:12,booked:6,level:"Débutant",color:"#00B4D8"}
  ]
};

const PLANS=[
  {name:"Starter",color:"#888",popular:false,desc:"L'essentiel pour débuter",prices:{monthly:29,quarterly:25,annual:19},
   features:["Salle de musculation","Zone cardio","Vestiaires & douches","Cours collectifs (2/sem)"],noFeatures:["Bilan fitness","Coach personnel","Accès 24h/24","Nutrition coaching"]},
  {name:"Pro",color:"#E8FF00",popular:true,desc:"Le plus choisi — progressez vite",prices:{monthly:49,quarterly:42,annual:35},
   features:["Salle de musculation","Zone cardio","Vestiaires & douches","Cours illimités","Bilan fitness","2 séances coach/mois"],noFeatures:["Accès 24h/24","Nutrition coaching"]},
  {name:"Elite",color:"#FF3B30",popular:false,desc:"L'expérience ultime",prices:{monthly:89,quarterly:79,annual:65},
   features:["Salle de musculation","Zone premium","Cours illimités","Bilan mensuel","Coach personnel dédié","Accès 24h/24","Nutrition coaching complet"],noFeatures:[]}
];

// ===== STATE =====
let currentBilling='monthly';
let currentDay='Lundi';
let currentGalFilter='Tous';
let heroWordIdx=0;
const heroWords=["DESTIN","PERFORMANCE","PUISSANCE","RÉSULTATS","EXCELLENCE"];

// ===== RENDER FUNCTIONS =====
function activityCard(a){
  return `<div class="activity-card">
    <div class="activity-img">
      <img src="${a.img}" alt="${a.name}" loading="lazy">
      <div class="activity-dot" style="background:${a.color}"></div>
    </div>
    <div class="activity-body">
      <h3 class="activity-name" style="color:${a.color}">${a.name}</h3>
      <p class="activity-desc">${a.desc}</p>
      <div class="activity-meta">
        <span class="meta-tag">⭐ ${a.level}</span>
        <span class="meta-tag">⏱ ${a.duration}</span>
        <span class="meta-tag">👥 ${a.capacity} max</span>
      </div>
    </div>
    <div class="activity-bar" style="background:${a.color}"></div>
  </div>`;
}

function coachCard(c){
  const stars='★'.repeat(Math.floor(c.rating))+'☆'.repeat(5-Math.floor(c.rating));
  return `<div class="coach-card">
    <div class="coach-top">
      <div class="coach-avatar" style="position:relative">
        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=${c.seed}&backgroundColor=${c.bg}" alt="${c.name}">
        <span class="coach-exp">${c.exp}</span>
      </div>
      <div class="coach-rating"><div class="stars">${c.rating} ★</div><small>${c.reviews} avis</small></div>
    </div>
    <div class="coach-name">${c.name}</div>
    <div class="coach-role">${c.role}</div>
    <div class="coach-tags">${c.specs.map(s=>`<span class="coach-tag">${s}</span>`).join('')}</div>
    <div class="coach-footer">
      <span class="sessions"><b>${c.sessions}</b> séances</span>
      <button>Voir profil →</button>
    </div>
  </div>`;
}

function planCard(p,billing){
  const price=p.prices[billing];
  return `<div class="plan-card${p.popular?' popular':''}">
    ${p.popular?'<div class="plan-badge">⭐ Le plus populaire</div>':''}
    <div class="plan-name" style="color:${p.color}">${p.name}</div>
    <p class="plan-desc">${p.desc}</p>
    <div class="plan-price">
      <div><span class="price" style="color:${p.popular?'#E8FF00':'#fff'}">${price}€</span><span class="period">/mois</span></div>
      ${billing!=='monthly'?`<div class="billing">Facturé ${billing==='quarterly'?'trimestriellement':'annuellement'}</div>`:''}
    </div>
    <ul class="plan-features">
      ${p.features.map(f=>`<li class="yes"><span class="feat-icon yes">✓</span>${f}</li>`).join('')}
      ${p.noFeatures.map(f=>`<li class="no"><span class="feat-icon no">✗</span>${f}</li>`).join('')}
    </ul>
    <button class="plan-btn ${p.popular?'primary-btn':'outline-btn'}" onclick="showPage('contact')">${p.popular?'Rejoindre Pro':'S\'abonner'}</button>
  </div>`;
}

function scheduleItem(s){
  const pct=s.booked/s.spots*100;
  const full=s.booked>=s.spots;
  const left=s.spots-s.booked;
  return `<div class="schedule-item">
    <div class="schedule-time">${s.time}<small>${s.dur} min</small></div>
    <div class="schedule-info">
      <h4>${s.activity}</h4>
      <p>${s.coach}</p>
      <div class="tags">
        <span class="sched-tag" style="background:${s.color}20;color:${s.color}">${s.level}</span>
      </div>
    </div>
    <div class="schedule-action">
      <div class="spots-bar"><div class="spots-fill" style="width:${pct}%;background:${full?'#FF3B30':s.color}"></div></div>
      <div class="spots-text">${full?'Complet':left+' places'}</div>
      <button style="margin-top:8px" class="${full?'btn-full':'btn-book'}" ${full?'disabled':''}>${full?'Complet':'Réserver'}</button>
    </div>
  </div>`;
}

// ===== INIT RENDERS =====
function renderHomeActivities(){
  document.getElementById('homeActivities').innerHTML=ACTIVITIES.slice(0,3).map(activityCard).join('');
}
function renderAllActivities(){
  document.getElementById('allActivities').innerHTML=ACTIVITIES.map(activityCard).join('');
}
function renderHomeCoaches(){
  document.getElementById('homeCoaches').innerHTML=COACHES.slice(0,4).map(coachCard).join('');
}
function renderAllCoaches(){
  document.getElementById('allCoaches').innerHTML=COACHES.map(coachCard).join('');
}
function renderHomePlans(){
  document.getElementById('homePlans').innerHTML=`<div class="plans">${PLANS.map(p=>planCard(p,'monthly')).join('')}</div>`;
}
function renderPlans(){
  document.getElementById('plansContainer').innerHTML=PLANS.map(p=>planCard(p,currentBilling)).join('');
}
function renderDayTabs(){
  const days=Object.keys(SCHEDULE);
  document.getElementById('dayTabs').innerHTML=days.map(d=>`<button class="day-tab${d===currentDay?' active':''}" onclick="selectDay('${d}',this)">${d}</button>`).join('');
}
function renderSchedule(){
  const items=SCHEDULE[currentDay]||[];
  document.getElementById('scheduleList').innerHTML=items.map(scheduleItem).join('');
}
function renderGalleryFilter(){
  const cats=['Tous','Équipements','Cours','Coaching','Infrastructures'];
  document.getElementById('galleryFilter').innerHTML=cats.map(c=>`<button class="filter-btn${c===currentGalFilter?' active':''}" onclick="filterGallery('${c}',this)">${c}</button>`).join('');
}
function renderGallery(){
  const items=currentGalFilter==='Tous'?GALLERY:GALLERY.filter(g=>g.cat===currentGalFilter);
  document.getElementById('galleryGrid').innerHTML=items.map(g=>`
    <div class="gallery-item">
      <img src="${g.src}" alt="${g.alt}" loading="lazy">
      <div class="overlay"><small>${g.cat}</small><span>${g.alt}</span></div>
    </div>`).join('');
}

// ===== ACTIONS =====
function setBilling(type,el){
  currentBilling=type;
  document.querySelectorAll('.billing-opt').forEach(e=>e.classList.remove('active'));
  el.classList.add('active');
  renderPlans();
}
function selectDay(day,el){
  currentDay=day;
  document.querySelectorAll('.day-tab').forEach(t=>t.classList.remove('active'));
  el.classList.add('active');
  renderSchedule();
}
function filterGallery(cat,el){
  currentGalFilter=cat;
  document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
  el.classList.add('active');
  renderGallery();
}
function submitForm(){
  document.getElementById('formSuccess').style.display='block';
  setTimeout(()=>document.getElementById('formSuccess').style.display='none',4000);
}
function toggleMenu(){
  const links=document.getElementById('navLinks');
  if(links.style.display==='flex'){links.style.display='';} 
  else{links.style.cssText='display:flex;flex-direction:column;position:fixed;top:64px;left:0;right:0;background:#0A0A0A;border-bottom:1px solid #1E1E1E;padding:16px;gap:4px;z-index:99';}
}

// ===== PAGE ROUTING =====
function showPage(id){
  const map={accueil:'accueil',activites:'activites',coachs:'coachs',planning:'planning',abonnements:'abonnements',galerie:'galerie',contact:'contact'};
  const realId=map[id]||id;
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.nav-links a').forEach(a=>a.classList.remove('active'));
  const el=document.getElementById('page-'+realId);
  if(el){el.classList.add('active');el.scrollIntoView({behavior:'smooth',block:'start'});}
  const navEl=document.getElementById('nav-'+realId);
  if(navEl)navEl.classList.add('active');
  window.scrollTo(0,0);
  document.getElementById('navLinks').style.cssText='';
  if(realId==='activites')renderAllActivities();
  if(realId==='coachs')renderAllCoaches();
  if(realId==='planning'){renderDayTabs();renderSchedule();}
  if(realId==='abonnements')renderPlans();
  if(realId==='galerie'){renderGalleryFilter();renderGallery();}
}

// ===== HERO WORD ANIMATION =====
function animateHeroWord(){
  const el=document.getElementById('heroWord');
  if(!el)return;
  el.classList.add('fade');
  setTimeout(()=>{
    heroWordIdx=(heroWordIdx+1)%heroWords.length;
    el.textContent=heroWords[heroWordIdx];
    el.classList.remove('fade');
  },400);
}

// ===== INIT =====
renderHomeActivities();
renderHomeCoaches();
renderHomePlans();
setInterval(animateHeroWord,2500);
