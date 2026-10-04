/* THE GYM FACTORY — interactions */
gsap.registerPlugin(ScrollTrigger);

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ===== I18N ===== */
const I18N = {
  fr: {
    'nav.space':'The Gym Factory','nav.programs':'Programmes','nav.pricing':'Abonnements et accès',
    'nav.marrakech':'Marrakech','nav.run':'Run Club','nav.find':'Nous Trouver',
    'nav.contact':'Contact','nav.cta':'Nous rejoindre',
    'hero.tag':'The reference for Fitness & Performance · <span class="neon-text">Casablanca & Marrakech</span>',
    'hero.cta':'Nous rejoindre',
    'ticker.1':"PAS QU'UNE SALLE ✦",'ticker.2':"L'USINE DES ATHLÈTES ✦",
    'pillars.head':'Ce qui nous <em>distingue</em>.',
    'pillars.1.t':'UN SEUL ABONNEMENT. TOUT TON POTENTIEL.',
    'pillars.1.b':'Accède à un univers complet pensé pour progresser sans choisir entre tes objectifs. Cross training, Hyrox, sports de combat, musculation, mobilité, recovery… tout est réuni au même endroit. <span class="neon-text">Un seul membership.</span> Zéro compromis.',
    'pillars.2.t':"PLUS QU'UNE SALLE. UN VRAI CADRE POUR PROGRESSER.",
    'pillars.2.b':"Ici, tu ne viens pas juste « faire du sport ». Tu t'entraînes avec une structure, des coachs exigeants et un environnement conçu pour te faire évoluer. <span class=\"neon-text\">Du résultat.</span> Pas de séances au hasard.",
    'pillars.3.t':'REJOINS UNE COMMUNAUTÉ QUI TE TIRE VERS LE HAUT.',
    'pillars.3.b':"THE GYM FACTORY, c'est une énergie. Une mentalité. Une communauté. Débutant ou athlète confirmé, tu entres dans un lieu où chacun vient pour progresser, se dépasser et évoluer ensemble. Tu ne prends pas un abonnement. <span class=\"neon-text\">Tu rejoins un mouvement.</span>",
    'big.1':'BÂTI','big.2':'EN','big.3':'FER',
    'programs.head':'CHOISI <em>TA DISCIPLINE</em>.',
    'programs.tab.boxing':'Espace Boxe','programs.tab.cross':'Cross Factory','programs.tab.mat':'Espace Tatami','programs.tab.core':'Core & Flow',
    'programs.city.casa':'Casablanca','programs.city.marrakech':'Marrakech',
    'programs.soon.title':'Bientôt Disponible',
    'programs.soon.desc':'Notre salle de Marrakech ouvre bientôt. Restez connectés.',
    'programs.pill':'The Gym Factory · Planning',
    'programs.closed':'Horaires d\'ouverture · Lu–Je 07:00–22:00 · Ven 07:00–13:00 / 15:00–22:00 · Sam 08:30–21:30',
    'programs.closed.mrk':'Horaires d\'ouverture · Lu–Ve 07:00–23:00 · Sam 09:00–18:00 · Dim 10:00–14:00',
    'programs.book':'Nous rejoindre',
    'programs.cat.lb':'Catégorie','programs.cat.adult':'Adultes','programs.cat.kids':'Enfants',
    'programs.age.a57':'Kids (5 - 7 ans)','programs.age.a811':'Juniors (8 - 11 ans)','programs.age.a1215':'Ados (12 - 15 ans)',
    'sched.boxing.title':'ESPACE BOXE',
    'sched.boxing.desc':'Boxe, Fit Box, Kick boxing.',
    'sched.boxing.desc.mrk':'Boxe, Fit Box, Muay Thaï.',
    'sched.cross.title':'CROSS FACTORY',
    'sched.cross.desc':'Crossfactory, Functional body, Weightlifting, Hyrox.',
    'sched.cross.desc.mrk':'Crossfactory, Hyrox, Weightlifting, Mobility, Kettlebell, Gymnastics CF.',
    'sched.mat.title':'ESPACE TATAMI',
    'sched.mat.desc':'BJJ (GI et No GI), MMA, Lutte.',
    'sched.mat.desc.mrk':'BJJ (GI et No GI), MMA, Lutte, Animal Move.',
    'sched.core.title':'CORE & FLOW',
    'sched.core.desc':'Booty Core femme, Power pilates, Booty core femmes, Stretching, Hips mobility, Back and shoulders mobility, Full body mobility.',
    'sched.kids.casa.a57.desc':'Crossfactory, Kickboxing, BJJ.',
    'sched.kids.casa.a811.desc':'Boxing, MMA, Crossfactory, Kickboxing, BJJ.',
    'sched.kids.casa.a1215.desc':'MMA, Boxing, BJJ, Kickboxing, Crossfactory.',
    'sched.kids.mrk.a57.desc':'Parkour, BJJ, Muay Thaï.',
    'sched.kids.mrk.a811.desc':'MMA/Muay Thai, Wrestling/Boxing, BJJ.',
    'sched.kids.mrk.a1215.desc':'MMA/Muay Thai, Wrestling/Boxing, BJJ.',
    'pricing.head':'ABONNEMENT <em>& ACCÈS</em>.',
    'pricing.sub':'Un pass. <span class="neon-text">Tous les espaces.</span> Sans limites.',
    'pricing.tag1':'TOUT EN UN','pricing.title1':'ACCÈS COMPLET',
    'pricing.row.annual':'Annuel Adultes <em>(3 000 MAD le 1er mois, puis 600 MAD/mois × 11)</em>',
    'pricing.row.kids':'Annuel Enfants <em>(5–15 ans)</em>','pricing.row.qrt':'Trimestriel <em>(2× sans frais)</em>',
    'pricing.row.month':'Mensuel sans engagement',
    'pricing.row.pack10':'Pack de 10 séances','pricing.row.w2':'2 semaines','pricing.row.w1':'1 semaine','pricing.row.day':'Daypass / drop-in',
    'pricing.cta1':'Nous rejoindre',
    'pricing.tag2':'À LA CARTE','pricing.title2':'COACHING PRIVÉ',
    'pricing.sub2':'<span class="neon-text">Coaching individuel.</span> 1 séance ou pack de 10 séances. Sans engagement.',
    'pricing.row.pc1':'1 Séance','pricing.row.pc10':'Pack de 10 séances',
    'pricing.cta2':'Nous rejoindre',
    'pricing.note':'Tous les prix en MAD. Taxes incluses. Abonnements nominatifs et non cessibles.',
    'soon.pill':'★ Bientôt ★','soon.d':'Jours','soon.h':'Hrs','soon.m':'Min','soon.s':'Sec',
    'soon.cta':'Nous rejoindre',
    'run.head':'RUN <em>CLUB</em>.',
    'run.body':'<span class="neon-text">Ne cours pas seul.</span> Sorties hebdomadaires en groupe à Marrakech — ouvertes aux membres et à la ville.',
    "run.cta":"Rejoindre l'équipe",
    'loc.head':'NOUS <em>TROUVER</em>.',
    'loc.sub':"<span class=\"neon-text\">Viens, entraîne-toi, recommence.</span>",
    'loc.open':'OUVERT','loc.hours':'Horaires','loc.closed':'Fermé',
    'loc.casa.hoursVal':'Lu–Je · 07:00–22:00 · Ven · 07:00–13:00 / 15:00–22:00 · Sam · 08:30–21:30',
    'loc.casa.closedVal':'Dimanche',
    'loc.mrk.hoursVal':'Lu–Ve · 07:00–23:00 · Sam · 09:00–18:00 · Dim · 10:00–14:00',
    'loc.phone':'Téléphone','loc.email':'Email','loc.ig':'Instagram','loc.maps':'Ouvrir dans Google Maps',
    'loc.mrk':'The Gym Factory Marrakech est maintenant <span class="neon-text">ouvert</span>.',
    'loc.reserve':'Nous rejoindre',
    'join.1':'NOUS','join.2':'CONTACTER<span class="dot-w">.</span>',
    'join.sub':'Laisse tes coordonnées. On te recontacte.',
    'form.first':'Prénom','form.last':'Nom','form.email':'Email','form.submit':'Envoyer',
    'form.ok':'✓ Reçu ! À très vite sur place.',
    'form.copy':'Copier le message','form.copied':'✓ Copié',
    'foot.copy':'© <span id="yr">2026</span> The Gym Factory — Casablanca & Marrakech.',
    'book.title':"Trouver un cours",'book.type':"Type de cours",'book.full':"Calendrier complet",
    'book.tz':"Toutes les dates et heures sont affichées dans le fuseau horaire de l'emplacement.",
    'book.powered':"propulsé par",'book.today':"aujourd'hui",
    'book.reserve':"Nous rejoindre",'book.details':"Afficher les détails",'book.hide':"Masquer les détails",
    'book.closed':"Fermé ce jour. Choisis une autre date.",'book.noClasses':"Aucun cours pour ce filtre.",
    'book.noClassesDay':"Aucun cours programmé ce jour.",
    'book.area.all':"Tous les espaces",'book.area.boxing':"Espace Boxe",
    'book.area.cross':"Cross Factory",'book.area.mat':"Espace Tatami",'book.area.core':"Core & Flow",
    'book.duration':"min",
    'book.city.head':"Choisis ta ville",'book.city.casa':"Casablanca",'book.city.mrk':"Marrakech",
    'book.city.pick':"Choisis une ville pour voir les cours.",
    'book.city.soon':"Marrakech — ouvert.",
  },
  en: {
    'nav.space':'The Gym Factory','nav.programs':'Programs','nav.pricing':'Subscriptions & Access',
    'nav.marrakech':'Marrakech','nav.run':'Run Club','nav.find':'Find Us',
    'nav.contact':'Contact','nav.cta':'Join Us',
    'hero.tag':'The reference for Fitness & Performance · <span class="neon-text">Casablanca & Marrakech</span>',
    'hero.cta':'Join Us',
    'ticker.1':'NOT JUST A GYM ✦','ticker.2':'A FACTORY OF ATHLETES ✦',
    'pillars.head':'What sets us <em>apart</em>.',
    'pillars.1.t':'ONE MEMBERSHIP. ALL YOUR POTENTIAL.',
    'pillars.1.b':'Access a complete universe built to make you progress without choosing between your goals. Cross training, Hyrox, combat sports, strength, mobility, recovery… all in one place. <span class="neon-text">One membership.</span> Zero compromise.',
    'pillars.2.t':'MORE THAN A GYM. A REAL FRAMEWORK TO PROGRESS.',
    'pillars.2.b':'Here, you don\'t just "work out". You train with structure, demanding coaches and an environment built to make you evolve. <span class="neon-text">Real results.</span> No random sessions.',
    'pillars.3.t':'JOIN A COMMUNITY THAT PULLS YOU UP.',
    'pillars.3.b':"THE GYM FACTORY is an energy. A mindset. A community. Beginner or seasoned athlete, you step into a place where everyone comes to progress, push limits and evolve together. You're not buying a membership. <span class=\"neon-text\">You're joining a movement.</span>",
    'big.1':'BUILT','big.2':'FROM','big.3':'IRON',
    'programs.head':'TRAIN <em>YOUR WAY</em>.',
    'programs.tab.boxing':'Boxing Area','programs.tab.cross':'Cross Factory','programs.tab.mat':'Mat Area','programs.tab.core':'Core & Flow',
    'programs.city.casa':'Casablanca','programs.city.marrakech':'Marrakech',
    'programs.soon.title':'Opening Soon',
    'programs.soon.desc':'Our Marrakech location is opening soon. Stay tuned.',
    'programs.pill':'The Gym Factory · Planning',
    'programs.closed':'Opening Hours · Mon–Thu 07:00–22:00 · Fri 07:00–13:00 / 15:00–22:00 · Sat 08:30–21:30',
    'programs.closed.mrk':'Opening Hours · Mon–Fri 07:00–23:00 · Sat 09:00–18:00 · Sun 10:00–14:00',
    'programs.book':'Join Us',
    'programs.cat.lb':'Category','programs.cat.adult':'Adults','programs.cat.kids':'Kids',
    'programs.age.a57':'Kids (5 - 7 years old)','programs.age.a811':'Juniors (8 - 11 years old)','programs.age.a1215':'Teens (12 - 15 years old)',
    'sched.boxing.title':'BOXING AREA',
    'sched.boxing.desc':'Boxing, Fit Box, Kick boxing.',
    'sched.boxing.desc.mrk':'Boxing, Fit Box, Muay Thai.',
    'sched.cross.title':'CROSSFACTORY AREA',
    'sched.cross.desc':'Crossfactory, Functional body, Weightlifting, Hyrox.',
    'sched.cross.desc.mrk':'Crossfactory, Hyrox, Weightlifting, Mobility, Kettlebell, Gymnastics CF.',
    'sched.mat.title':'MAT AREA',
    'sched.mat.desc':'BJJ (GI & No GI), MMA, Wrestling.',
    'sched.mat.desc.mrk':'BJJ (GI & No GI), MMA, Wrestling, Animal Move.',
    'sched.core.title':'CORE & FLOW AREA',
    'sched.core.desc':'Booty Core women, Power pilates, Booty core women, Stretching, Hips mobility, Back and shoulders mobility, Full body mobility.',
    'sched.kids.casa.a57.desc':'Crossfactory, Kickboxing, BJJ.',
    'sched.kids.casa.a811.desc':'Boxing, MMA, Crossfactory, Kickboxing, BJJ.',
    'sched.kids.casa.a1215.desc':'MMA, Boxing, BJJ, Kickboxing, Crossfactory.',
    'sched.kids.mrk.a57.desc':'Parkour, BJJ, Muay Thai.',
    'sched.kids.mrk.a811.desc':'MMA/Muay Thai, Wrestling/Boxing, BJJ.',
    'sched.kids.mrk.a1215.desc':'MMA/Muay Thai, Wrestling/Boxing, BJJ.',
    'pricing.head':'MEMBERSHIP <em>& ACCESS</em>.',
    'pricing.sub':'One pass. <span class="neon-text">Every floor.</span> No limits.',
    'pricing.tag1':'ALL IN ONE','pricing.title1':'FULL ACCESS',
    'pricing.row.annual':'Annual Adults <em>(3,000 MAD 1st month, then 600 MAD/mo × 11)</em>',
    'pricing.row.kids':'Annual Kids <em>(5–15 yrs)</em>','pricing.row.qrt':'Quarterly <em>(2× sans frais)</em>',
    'pricing.row.month':'Monthly — no commitment',
    'pricing.row.pack10':'10-session pack','pricing.row.w2':'2 weeks','pricing.row.w1':'1 week','pricing.row.day':'Daypass / drop-in',
    'pricing.cta1':'Join Us',
    'pricing.tag2':'DROP-IN','pricing.title2':'PRIVATE COACHING',
    'pricing.sub2':'<span class="neon-text">One-to-one coaching.</span> Single session or 10-session pack. No commitment.',
    'pricing.row.pc1':'1 Session','pricing.row.pc10':'10-Session Pack',
    'pricing.cta2':'Join Us',
    'pricing.note':'All prices in MAD. Tax included. Memberships are nominative and non-transferable.',
    'soon.pill':'★ Coming Soon ★','soon.d':'Days','soon.h':'Hrs','soon.m':'Min','soon.s':'Sec',
    'soon.cta':'Join Us',
    'run.head':'RUN <em>CLUB</em>.',
    'run.body':"<span class=\"neon-text\">Don't run alone.</span> Weekly group runs across Marrakech — open to members and the city.",
    'run.cta':'Join the crew',
    'loc.head':'FIND <em>US</em>.',
    'loc.sub':"<span class=\"neon-text\">Drop in, train, repeat.</span>",
    'loc.open':'OPEN NOW','loc.hours':'Hours','loc.closed':'Closed',
    'loc.casa.hoursVal':'Mon–Thu · 07:00–22:00 · Fri · 07:00–13:00 / 15:00–22:00 · Sat · 08:30–21:30',
    'loc.casa.closedVal':'Sunday',
    'loc.mrk.hoursVal':'Mon–Fri · 07:00–23:00 · Sat · 09:00–18:00 · Sun · 10:00–14:00',
    'loc.phone':'Phone','loc.email':'Email','loc.ig':'Instagram','loc.maps':'Open in Google Maps',
    'loc.mrk':'The Gym Factory Marrakech is now <span class="neon-text">open</span>.',
    'loc.reserve':'Join Us',
    'join.1':'CONTACT','join.2':'US<span class="dot-w">.</span>',
    'join.sub':"Drop your details. We'll be in touch.",
    'form.first':'First name','form.last':'Last name','form.email':'Email','form.submit':'Enquire Now',
    'form.ok':'✓ Received! See you soon on site.',
    'form.copy':'Copy message','form.copied':'✓ Copied',
    'foot.copy':'© <span id="yr">2026</span> The Gym Factory — Casablanca & Marrakech.',
    'book.title':"Find a class",'book.type':"Class type",'book.full':"Full calendar",
    'book.tz':"All dates and times are shown in the location's time zone.",
    'book.powered':"powered by",'book.today':"today",
    'book.reserve':"Join Us",'book.details':"Show details",'book.hide':"Hide details",
    'book.closed':"Closed today. Pick another date.",'book.noClasses':"No classes for this filter.",
    'book.noClassesDay':"No classes scheduled this day.",
    'book.area.all':"All spaces",'book.area.boxing':"Boxing Space",
    'book.area.cross':"Cross Factory",'book.area.mat':"Tatami Space",'book.area.core':"Core & Flow",
    'book.duration':"min",
    'book.city.head':"Choose your city",'book.city.casa':"Casablanca",'book.city.mrk':"Marrakech",
    'book.city.pick':"Select a city to view classes.",
    'book.city.soon':"Marrakech — open.",
  }
};
let LANG = (() => {
  try { return localStorage.getItem('gf_lang') || 'fr'; } catch(e) { return 'fr'; }
})();
function t(key){ return (I18N[LANG] && I18N[LANG][key]) || (I18N.fr[key] ?? key); }
function applyLang(lang){
  LANG = (lang === 'en') ? 'en' : 'fr';
  try { localStorage.setItem('gf_lang', LANG); } catch(e){}
  document.documentElement.lang = LANG;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.getAttribute('data-i18n');
    el.textContent = t(k);
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const k = el.getAttribute('data-i18n-html');
    el.innerHTML = t(k);
  });
  document.querySelectorAll('[data-i18n-attr]').forEach(el => {
    el.getAttribute('data-i18n-attr').split(';').forEach(pair => {
      const [attr, k] = pair.split(':').map(s => s.trim());
      if (attr && k) el.setAttribute(attr, t(k));
    });
  });
  // Re-bind year span (foot.copy uses innerHTML with year placeholder)
  const yr = document.getElementById('yr');
  if (yr) yr.textContent = new Date().getFullYear();
  // Update lang toggle UI
  document.querySelectorAll('.lang-toggle .lang-opt').forEach(o => {
    o.classList.toggle('is-active', o.dataset.lang === LANG);
  });
  // Re-render schedule with current area (default to boxing if not yet set)
  if (document.getElementById('sched-grid') && typeof renderSchedule === 'function') {
    renderSchedule(typeof currentArea !== 'undefined' ? currentArea : 'cross');
  }
  // Re-render booking modal if mounted
  if (typeof renderBooking === 'function' && document.getElementById('bkDays')) {
    renderBooking();
  }
}
function initLangToggle(){
  document.querySelectorAll('.lang-toggle').forEach(tog => {
    tog.querySelectorAll('.lang-opt').forEach(opt => {
      opt.addEventListener('click', e => {
        e.preventDefault();
        applyLang(opt.dataset.lang);
      });
    });
  });
}
// Apply before paint
document.addEventListener('DOMContentLoaded', () => {
  applyLang(LANG);
  initLangToggle();
  const form = document.querySelector('.join-form');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      form.classList.add('ok');
      const fb = form.querySelector('.fb');
      const inputs = form.querySelectorAll('input');
      const first = inputs[0]?.value.trim() || '';
      const last  = inputs[1]?.value.trim() || '';
      const email = inputs[2]?.value.trim() || '';
      const { number, text } = waFormData(first, last, email);
      const desktop = !isNativeWA();
      window.open(desktop ? waWebURL(number, text) : waMeURL(number, text), '_blank');
      if (fb) {
        fb.textContent = t('form.ok');
        if (desktop) {
          const copyBtn = document.createElement('button');
          copyBtn.type = 'button';
          copyBtn.className = 'fb-copy';
          copyBtn.setAttribute('data-i18n', 'form.copy');
          copyBtn.textContent = t('form.copy');
          copyBtn.addEventListener('click', async () => {
            try {
              await navigator.clipboard.writeText(text);
              copyBtn.setAttribute('data-i18n', 'form.copied');
              copyBtn.textContent = t('form.copied');
            } catch (_) {
              let ta = fb.querySelector('.fb-fallback');
              if (!ta) {
                ta = document.createElement('textarea');
                ta.className = 'fb-fallback';
                ta.readOnly = true;
                fb.appendChild(ta);
              }
              ta.value = text;
              ta.hidden = false;
              ta.select();
            }
          });
          fb.appendChild(copyBtn);
        }
      }
    });
  }
});

/* ===== LOADER ===== */
const loader = document.getElementById('loader');
const pct = loader.querySelector('.loader-pct');
const bar = loader.querySelector('.loader-bar span');
let p = 0;
const tick = setInterval(() => {
  p += Math.random() * 12 + 4;
  if (p >= 100) { p = 100; clearInterval(tick); finishLoad(); }
  pct.textContent = String(Math.floor(p)).padStart(3, '0');
  bar.style.width = p + '%';
}, 90);

function finishLoad() {
  document.body.classList.remove('loading');
  gsap.to(loader, {
    opacity: 0, duration: 0.6, ease: 'power2.inOut',
    onComplete: () => {
      loader.style.display = 'none';
      heroIntro();
      mountLenis();
      mountScrollAnimations();
    }
  });
}

/* ===== LENIS ===== */
let lenis;
function mountLenis() {
  if (reduceMotion) return;
  lenis = new Lenis({ duration: 1.15, easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)), smoothWheel: true });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add(t => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
}

/* ===== HERO INTRO ===== */
function heroIntro() {
  const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });
  tl.from('.nav', { y: -40, opacity: 0, duration: 0.8 }, 0)
    .from('.hero-foot > *', { opacity: 0, y: 30, duration: 0.9, stagger: 0.08 }, 0.3)
    .from('.hero-bg img, .hero-bg video', { scale: 1.3, duration: 2, ease: 'power3.out' }, 0);
}

/* ===== SCROLL ANIMATIONS ===== */
function mountScrollAnimations() {

  // Hero parallax bg
  gsap.to('.hero-bg', {
    yPercent: 25, ease: 'none',
    scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true }
  });
  // Pillars — 3D card stagger
  gsap.from('.pillars-head h2', {
    y: 60, opacity: 0, duration: 1, ease: 'expo.out',
    scrollTrigger: { trigger: '.pillars', start: 'top 75%' }
  });
  gsap.from('.pill', {
    y: 80, opacity: 0, rotateX: 20, duration: 1, ease: 'expo.out', stagger: 0.12,
    scrollTrigger: { trigger: '.pillars-grid', start: 'top 80%' }
  });

  // Big image — image scale + text reveal
  gsap.fromTo('.bigimage-media img', { scale: 1.2 }, {
    scale: 1, ease: 'none',
    scrollTrigger: { trigger: '.bigimage', start: 'top bottom', end: 'bottom top', scrub: true }
  });
  gsap.from('.bigimage-title .line', {
    yPercent: 110, duration: 1.2, ease: 'expo.out', stagger: 0.12,
    scrollTrigger: { trigger: '.bigimage', start: 'top 70%' }
  });

  // Ticker — scroll-driven X
  document.querySelectorAll('.ticker-track').forEach(el => {
    gsap.fromTo(el, { x: 0 }, {
      x: -300, ease: 'none',
      scrollTrigger: { trigger: el.closest('.ticker, section') || el, start: 'top bottom', end: 'bottom top', scrub: 0.8 }
    });
  });

  // Soon — bg parallax + zoom
  gsap.to('.soon-bg img', {
    yPercent: 15, scale: 1.0, ease: 'none',
    scrollTrigger: { trigger: '.soon', start: 'top bottom', end: 'bottom top', scrub: true }
  });
  gsap.from('.soon-title .line', {
    yPercent: 110, duration: 1.2, ease: 'expo.out', stagger: 0.12,
    scrollTrigger: { trigger: '.soon', start: 'top 70%' }
  });
  gsap.from('.soon-pill, .soon-sub, .soon-content .btn-primary, .soon-countdown', {
    y: 30, opacity: 0, duration: 0.8, ease: 'expo.out', stagger: 0.08,
    scrollTrigger: { trigger: '.soon', start: 'top 60%' }
  });

  // Run
  gsap.from('.run-copy h2', {
    y: 60, opacity: 0, duration: 1, ease: 'expo.out',
    scrollTrigger: { trigger: '.run', start: 'top 70%' }
  });
  gsap.from('.run-copy > *:not(h2)', {
    y: 30, opacity: 0, duration: 0.8, ease: 'expo.out', stagger: 0.08,
    scrollTrigger: { trigger: '.run-copy', start: 'top 70%' }
  });
  gsap.fromTo('.run-media', { y: 80 }, {
    y: -80, ease: 'none',
    scrollTrigger: { trigger: '.run', start: 'top bottom', end: 'bottom top', scrub: true }
  });

  // Join title
  gsap.from('.join-title .line', {
    yPercent: 110, duration: 1.2, ease: 'expo.out', stagger: 0.12,
    scrollTrigger: { trigger: '.join', start: 'top 70%' }
  });
  gsap.from('.join-num, .join-sub, .join-form', {
    y: 30, opacity: 0, duration: 0.8, ease: 'expo.out', stagger: 0.08,
    scrollTrigger: { trigger: '.join', start: 'top 65%' }
  });

  // Schedule — section reveal (kept visible, only soft slide)
  gsap.from('.sched', {
    y: 30, duration: 0.9, ease: 'expo.out',
    scrollTrigger: { trigger: '.sched', start: 'top 85%' }
  });

  // Background videos — autoplay, loop, muted. Ensure playback if browser blocks.
  document.querySelectorAll('video.bg-video').forEach(v => {
    const tryPlay = () => { const p = v.play(); if (p && p.catch) p.catch(() => {}); };
    tryPlay();
    v.addEventListener('canplay', tryPlay, { once: true });
  });
  // iOS sometimes needs a user gesture
  const kick = () => {
    document.querySelectorAll('video.bg-video').forEach(v => { const p = v.play(); if (p && p.catch) p.catch(() => {}); });
  };
  ['touchstart','click','wheel','keydown'].forEach(evt =>
    window.addEventListener(evt, kick, { once: true, passive: true })
  );

  // Hairline rules — soft fade-in
  gsap.utils.toArray('.rule').forEach(d => {
    gsap.fromTo(d,
      { scaleX: 0.3, opacity: 0 },
      { scaleX: 1, opacity: 1, duration: 1, ease: 'expo.out',
        scrollTrigger: { trigger: d, start: 'top 92%' } }
    );
  });

  // Location section — head reveal, cards stagger, map clip-reveal
  gsap.from('.location-head h2', {
    y: 60, opacity: 0, duration: 1, ease: 'expo.out',
    scrollTrigger: { trigger: '.location', start: 'top 75%' }
  });
  gsap.from('.location-head .num, .location-sub', {
    y: 20, opacity: 0, duration: 0.8, ease: 'expo.out', stagger: 0.08,
    scrollTrigger: { trigger: '.location', start: 'top 75%' }
  });
  gsap.from('.loc-card', {
    y: 60, opacity: 0, duration: 1, ease: 'expo.out', stagger: 0.14,
    scrollTrigger: { trigger: '.location-info', start: 'top 80%' }
  });
  gsap.fromTo('.map-frame',
    { clipPath: 'inset(0 100% 0 0)' },
    {
      clipPath: 'inset(0 0% 0 0)', duration: 1.4, ease: 'expo.out',
      scrollTrigger: { trigger: '.location-map', start: 'top 80%' }
    }
  );
  // Pricing — head + cards
  gsap.from('.pricing-head h2', {
    y: 60, opacity: 0, duration: 1, ease: 'expo.out',
    scrollTrigger: { trigger: '.pricing', start: 'top 75%' }
  });
  gsap.from('.pricing-head .num, .pricing-sub', {
    y: 20, opacity: 0, duration: 0.8, ease: 'expo.out', stagger: 0.08,
    scrollTrigger: { trigger: '.pricing', start: 'top 75%' }
  });
  gsap.from('.price-card', {
    y: 80, opacity: 0, rotateX: 14, duration: 1.1, ease: 'expo.out', stagger: 0.14,
    scrollTrigger: { trigger: '.pricing-grid', start: 'top 80%' }
  });
  gsap.from('.price-list li', {
    y: 18, opacity: 0, duration: 0.6, ease: 'expo.out', stagger: 0.05,
    scrollTrigger: { trigger: '.pricing-grid', start: 'top 70%' }
  });
  gsap.from('.pricing-note', {
    y: 20, opacity: 0, duration: 0.8, ease: 'expo.out',
    scrollTrigger: { trigger: '.pricing-note', start: 'top 90%' }
  });

  // Generic data-speed parallax
  document.querySelectorAll('[data-speed]').forEach(el => {
    const speed = parseFloat(el.dataset.speed);
    gsap.to(el, {
      yPercent: 100 * speed, ease: 'none',
      scrollTrigger: { trigger: el.closest('section'), start: 'top bottom', end: 'bottom top', scrub: true }
    });
  });

  ScrollTrigger.refresh();
}


/* ===== COUNTDOWN ===== */
const target = new Date('2026-09-01T09:00:00').getTime();
function updateCountdown() {
  const diff = target - Date.now();
  if (diff <= 0) return;
  const d = Math.floor(diff / 86400000);
  const h = Math.floor(diff % 86400000 / 3600000);
  const m = Math.floor(diff % 3600000 / 60000);
  const s = Math.floor(diff % 60000 / 1000);
  const set = (id, v) => { const el = document.getElementById(id); if (el) el.textContent = String(v).padStart(2, '0'); };
  set('cd-d', d); set('cd-h', h); set('cd-m', m); set('cd-s', s);
}
updateCountdown();
setInterval(updateCountdown, 1000);

/* ===== YEAR ===== */
const yr = document.getElementById('yr'); if (yr) yr.textContent = new Date().getFullYear();

/* ===== SCHEDULE / CALENDAR ===== */
const DAYS = ['LUN','MAR','MER','JEU','VEN','SAM','DIM'];

// shorthand cell helpers
const cc = (...items)               => ({ stack: items });               // stacked
const E  = null;                                                         // empty

// Categorization helpers
const cat = {
  // striking
  BOXFIT:'strike', BOXING:'strike', 'KICK BOXING':'strike', 'BOXING JR':'kids',
  'BOXING ADO':'kids', 'KICK BOXING ADO':'kids', 'KICK BOXING KIDS':'kids',
  'KICK BOXING JUNIOR':'kids', 'SPARRING DAY':'strike',
  // striking — Marrakech (FR labels)
  BOXE:'strike', 'BOXE FIT':'strike', 'BOXE FIT (F)':'strike', KICKBOXING:'strike',
  'BOXE ADO (13-15 ANS)':'kids', 'KICKBOXING (13-15 ANS)':'kids',
  'BOXE JUNIOR (9-12 ANS)':'kids', 'BOXE (9-12 ANS)':'kids',
  'KICKBOXING (6-8 ANS)':'kids', 'KICKBOXING (9-12 ANS)':'kids',
  // cross
  'CROSS FACTORY':'cond', 'CROSS FACTORY KIDS':'kids', 'CROSS FACTORY JR':'kids',
  'CROSS FACTORY ADO':'kids', 'FUNCTIONAL BODY':'cond', WEIGHTLIFTING:'cond',
  HYROX:'cond', OPEN:'cond',
  // cross — Marrakech
  CROSSFIT:'cond', KETTLEBELL:'cond', 'TEAM WOD':'cond', MOBILITE:'cond',
  'PARKOUR (6-8 ANS)':'kids', 'PARKOUR (9-12 ANS)':'kids',
  // mat
  'ANIMAL MOVE':'cond', BJJ:'grap', 'BJJ KIDS':'kids', 'BJJ JR':'kids',
  'BJJ ADO':'kids', 'BJJ NO-GI':'grap', MMA:'grap', 'MMA ADO':'kids',
  'MMA JR':'kids', 'MMA FIT':'grap', 'OPEN MAT':'grap', LUTTE:'grap',
  // mat — Marrakech (FR JJB labels)
  JJB:'grap', 'JJB GI':'grap', 'JJB NO-GI':'grap', 'MMA FIT (F)':'grap',
  'JJB KIDS (6-8 ANS)':'kids', 'JJB JUNIOR (9-12 ANS)':'kids',
  'JJB ADO (13-15 ANS)':'kids', 'MMA JUNIOR (9-12 ANS)':'kids',
  'MMA ADO (13-15 ANS)':'kids', 'OPEN MAT MMA':'grap', 'OPEN MAT JJB':'grap',
  // core & flow
  'POWER PILATE':'cond', STRETCHING:'cond', 'HIPS MOBILITY':'cond',
  'BACK/SHOULDERS MOBILITY':'cond', 'BOOTY CORE 100% FEMME':'cond',
  'BOOTY & CORE LAB':'cond', SALSA:'cond', 'HEELS DANSE':'cond', AFRO:'cond',
  'DANSE ADO':'kids', 'DANSE KIDS':'kids',
  'AFRO 5-12':'kids', 'AFRO 13-15':'kids', 'AFRO 5-15':'kids',
  // Phase 1 spec labels — striking
  'FIT BOX':'strike', 'MUAY THAÏ':'strike', SPARRINGS:'strike',
  // Phase 1 spec labels — conditioning
  CROSSFACTORY:'cond', 'GYMNASTICS CF':'cond', MOBILITY:'cond',
  'FULL BODY WOMEN':'cond', 'BOOTY CORE WOMEN':'cond',
  'CORE PILATES':'cond', 'POWER PILATES':'cond',
  'UPPER BODY WOMEN':'cond', 'STEP RENFO WOMEN':'cond',
  // Phase 1 spec labels — grappling
  'BJJ GI':'grap', 'BJJ NO GI':'grap', 'BJJ FONDAMENTAUX':'grap', 'MMA SPARRINGS':'grap',
  // Phase 1.2 — kids schedules
  PARKOUR:'kids', WRESTLING:'grap',
};
function withCat(label, override){
  return { label, cat: override || cat[label] || 'cond' };
}
function s(label, pre){ const o = withCat(label); if (pre) o.pre = pre; return o; }
function s2h(label, pre){ const o = s(label, pre); o.long = true; return o; }

const SCHEDULE = {
  casa: {
    boxing: {
      titleKey: 'sched.boxing.title',
      descKey:  'sched.boxing.desc',
      times: ['08H30','11H30','12H00','12H30','19H30','20H30'],
      rows: [
        [ s('FIT BOX'),     E,               s('FIT BOX'),     E,               s('FIT BOX'),     E,             E ],
        [ E,                E,               E,                E,               E,                s('BOXING'),    E ],
        [ E,                E,               E,                E,               s('BOXING'),      E,             E ],
        [ s('BOXING'),      s('KICKBOXING'), s('BOXING'),      s('KICKBOXING'), E,                s('KICKBOXING'), E ],
        [ s('KICKBOXING'),  s('BOXING'),     s('KICKBOXING'),  s('BOXING'),     s('SPARRINGS'),   E,             E ],
        [ s('BOXING'),      s('KICKBOXING'), s('BOXING'),      s('KICKBOXING'), s('SPARRINGS'),   E,             E ],
      ]
    },
    cross: {
      titleKey: 'sched.cross.title',
      descKey:  'sched.cross.desc',
      times: ['07H30','11H30','12H00','12H30','18H30','19H30','20H30'],
      rows: [
        [ s('CROSSFACTORY'), E,               s('CROSSFACTORY'), E,               s('CROSSFACTORY'), E,                E ],
        [ E,                 E,               E,                E,               E,               s('CROSSFACTORY'), E ],
        [ E,                 E,               E,                E,               s('FUNCTIONAL BODY'), E,           E ],
        [ s('FUNCTIONAL BODY'), s('CROSSFACTORY'), s('FUNCTIONAL BODY'), s('CROSSFACTORY'), E,    s('FUNCTIONAL BODY'), E ],
        [ s('WEIGHTLIFTING'), s('FUNCTIONAL BODY'), s('WEIGHTLIFTING'), s('FUNCTIONAL BODY'), s('WEIGHTLIFTING'), E, E ],
        [ s('CROSSFACTORY'), s('HYROX'),      s('CROSSFACTORY'), s('HYROX'),     s('CROSSFACTORY'), E,              E ],
        [ E,                 s('CROSSFACTORY'), E,              s('CROSSFACTORY'), E,              E,                E ],
      ]
    },
    mat: {
      titleKey: 'sched.mat.title',
      descKey:  'sched.mat.desc',
      times: ['12H00','12H30','18H30','19H30','20H30'],
      rows: [
        [ E,               E,               E,                E,               s('BJJ'),        E, E ],
        [ s('BJJ'),        s('MMA'),        s('BJJ'),         s('MMA'),        E,               E, E ],
        [ s('LUTTE'),      s('BJJ FONDAMENTAUX'), s('BJJ'),   s('BJJ FONDAMENTAUX'), s('MMA SPARRINGS'), E, E ],
        [ s('MMA'),        s('BJJ NO GI'),  s('LUTTE'),       s('BJJ NO GI'),  s2h('OPEN MAT'), E, E ],
        [ s('BJJ'),        s('MMA'),        s('MMA'),         s('MMA'),        E,               E, E ],
      ]
    },
    core: {
      titleKey: 'sched.core.title',
      descKey:  'sched.core.desc',
      times: ['07H30','09H30','10H30','11H30','12H00','12H30','14H30','15H30','18H30','19H30'],
      rows: [
        [ E,                       s('BOOTY CORE WOMEN'), E,                    s('BOOTY CORE WOMEN'), E,                          E,                         E ],
        [ E,                       E,                     E,                    E,                     E,                          s('BOOTY CORE WOMEN'),     E ],
        [ E,                       E,                     E,                    E,                     E,                          s('STRETCHING'),           E ],
        [ E,                       E,                     E,                    s('POWER PILATES'),    E,                          E,                         E ],
        [ E,                       E,                     E,                    E,                     s('FULL BODY WOMEN'),       E,                         E ],
        [ s('BOOTY CORE WOMEN'),   s('HIPS MOBILITY'),    s('FULL BODY WOMEN'), s('BOOTY CORE WOMEN'), E,                          E,                         E ],
        [ s('CORE PILATES'),       E,                     E,                    E,                     E,                          E,                         E ],
        [ E,                       s('POWER PILATES'),    E,                    E,                     E,                          E,                         E ],
        [ s2h('CORE PILATES'),     s('FULL BODY WOMEN'),  s2h('UPPER BODY WOMEN'), s('UPPER BODY WOMEN'), s2h('UPPER BODY WOMEN'),  E,                         E ],
        [ s('STRETCHING'),         s('STRETCHING'),       s('STEP RENFO WOMEN'), s('STEP RENFO WOMEN'), s('STEP RENFO WOMEN'),      E,                         E ],
      ]
    }
  },
  marrakech: {
    boxing: {
      titleKey: 'sched.boxing.title',
      descKey:  'sched.boxing.desc',
      descKeyMrk: 'sched.boxing.desc.mrk',
      times: ['12H30','18H00','19H00','20H00','21H00'],
      rows: [
        [ s('BOXE'),       s('MUAY THAÏ'),  s('BOXE'),       s('MUAY THAÏ'),  s('BOXE'),       E, E ],
        [ E,               E,               s('MUAY THAÏ'),  E,               E,               E, E ],
        [ s('MUAY THAÏ'),  s('BOXE'),       s('BOXE'),       s('BOXE'),       s('MUAY THAÏ'),  E, E ],
        [ s('BOXE'),       s('MUAY THAÏ'),  s('BOXE FIT'),   s('MUAY THAÏ'),  s('BOXE'),       E, E ],
        [ s('BOXE FIT'),   s('ANIMAL MOVE'), E,              s('ANIMAL MOVE'), s('BOXE FIT'),  E, E ],
      ]
    },
    cross: {
      titleKey: 'sched.cross.title',
      descKey:  'sched.cross.desc',
      descKeyMrk: 'sched.cross.desc.mrk',
      times: ['07H30','08H30','09H30','10H30','11H30','16H00','17H00','18H00','19H00','20H00'],
      rows: [
        [ s('CROSSFACTORY'), s('CROSSFACTORY'), s('CROSSFACTORY'), s('CROSSFACTORY'), s('CROSSFACTORY'), E,               E ],
        [ s('CROSSFACTORY'), s('CROSSFACTORY'), s('CROSSFACTORY'), s('CROSSFACTORY'), s('CROSSFACTORY'), E,               E ],
        [ E,                 E,                 E,                 E,                 E,                 s('TEAM WOD'),    E ],
        [ E,                 E,                 E,                 E,                 E,                 s('TEAM WOD'),    E ],
        [ s('KETTLEBELL'),   s('KETTLEBELL'),   s('KETTLEBELL'),   s('KETTLEBELL'),   s('KETTLEBELL'),   s('KETTLEBELL'),  E ],
        [ E,                 s('KETTLEBELL'),   E,                 s('KETTLEBELL'),   E,                 E,                E ],
        [ s('CROSSFACTORY'), s('CROSSFACTORY'), s('CROSSFACTORY'), s('CROSSFACTORY'), s('CROSSFACTORY'), E,                E ],
        [ s('CROSSFACTORY'), s('HYROX'),        s('CROSSFACTORY'), s('HYROX'),        s('CROSSFACTORY'), E,                E ],
        [ s('WEIGHTLIFTING'), s('CROSSFIT'),    s('GYMNASTICS CF'), s('CROSSFIT'),    s('MOBILITY'),     E,                E ],
        [ s('KETTLEBELL'),   E,                 s('KETTLEBELL'),   E,                 s('KETTLEBELL'),   E,                E ],
      ]
    },
    mat: {
      titleKey: 'sched.mat.title',
      descKey:  'sched.mat.desc',
      descKeyMrk: 'sched.mat.desc.mrk',
      times: ['09H30','10H30','12H30','19H00','20H00','21H00'],
      rows: [
        [ s('ANIMAL MOVE'), s('BOXE FIT'),  s('ANIMAL MOVE'), s('BOXE FIT'),  s('ANIMAL MOVE'), E, E ],
        [ s('MMA'),         E,              s('MMA'),         E,              s('MMA'),         E, E ],
        [ E,                s('BJJ NO GI'), E,                s('BJJ NO GI'), E,               E, E ],
      [ s('MMA'),         s('LUTTE'),     s('BJJ GI'),      s('MMA'),       s('BJJ GI'),      E, E ],
      [ s('BJJ GI'),      s('MMA'),       s('LUTTE'),       s('BJJ NO GI'), cc(s('MMA'), s('LUTTE')), E, E ],
      [ s('LUTTE'),       s('BJJ NO GI'), s('MMA'),         s('LUTTE'),     cc(s('MMA'), s('LUTTE')), E, E ],
      ]
    }
  }
};

/* ===== KIDS SCHEDULES (SPECS V1.2 — Error 16) ===== */
const KIDS_SCHEDULE = {
  casa: {
    a57: {
      titleKey: 'programs.age.a57',
      descKey:  'sched.kids.casa.a57.desc',
      times: ['09H30','15H30','17H30'],
      rows: [
        [ E,               E,               E,               E,               E,               s('BJJ'),        E ],
        [ E,               E,               s('BJJ'),        E,               E,               E,               E ],
        [ s('CROSSFACTORY'), s('KICKBOXING'), E,              s('CROSSFACTORY'), E,              E,               E ],
      ]
    },
    a811: {
      titleKey: 'programs.age.a811',
      descKey:  'sched.kids.casa.a811.desc',
      times: ['10H30','13H30','16H30','17H30'],
      rows: [
        [ E,               E,               E,               E,               E,               s('BJJ'),        E ],
        [ E,               E,               E,               E,               E,               s('MMA'),        E ],
        [ E,               E,               s('BJJ'),        s('KICKBOXING'), E,               E,               E ],
        [ s('BOXING'),     s('CROSSFACTORY'), cc(s('MMA'), s('KICKBOXING')), E, cc(s('CROSSFACTORY'), s('KICKBOXING')), E, E ],
      ]
    },
    a1215: {
      titleKey: 'programs.age.a1215',
      descKey:  'sched.kids.casa.a1215.desc',
      times: ['11H30','12H30','13H00','17H30','18H30'],
      rows: [
        [ E,               E,               E,               E,               E,               s('BJJ'),        E ],
        [ E,               E,               E,               E,               E,               s('MMA'),        E ],
        [ E,               E,               E,               E,               E,               s('CROSSFACTORY'), E ],
        [ s('MMA'),        s('BJJ'),        s('CROSSFACTORY'), s('MMA'),      s('BJJ'),        E,               E ],
        [ s('BOXING'),     s('KICKBOXING'), s('BOXING'),     s('BOXING'),     s('KICKBOXING'), E,               E ],
      ]
    }
  },
  marrakech: {
    a57: {
      titleKey: 'programs.age.a57',
      descKey:  'sched.kids.mrk.a57.desc',
      times: ['10H30','11H30','12H30','15H00','16H00','17H00'],
      rows: [
        [ E,               E,               E,               E,               E,               s('BJJ'),        E ],
        [ E,               E,               E,               E,               E,               s('MUAY THAÏ'),  E ],
        [ E,               E,               E,               E,               E,               s('PARKOUR'),    E ],
        [ E,               E,               s('PARKOUR'),    E,               E,               E,               E ],
        [ E,               E,               s('BJJ'),        E,               E,               E,               E ],
        [ E,               E,               s('MUAY THAÏ'),  E,               E,               E,               E ],
      ]
    },
    a811: {
      titleKey: 'programs.age.a811',
      descKey:  'sched.kids.mrk.a811.desc',
      times: ['11H30','17H00'],
      rows: [
        [ E,               E,               E,               E,               E,               s('BJJ'),        E ],
        [ cc(s('MMA'), s('MUAY THAÏ')), cc(s('WRESTLING'), s('BOXING')), s('BJJ'), cc(s('MMA'), s('BOXING')), cc(s('WRESTLING'), s('MUAY THAÏ')), E, E ],
      ]
    },
    a1215: {
      titleKey: 'programs.age.a1215',
      descKey:  'sched.kids.mrk.a1215.desc',
      times: ['12H30','18H00'],
      rows: [
        [ E,               E,               E,               E,               E,               s('BJJ'),        E ],
        [ cc(s('MMA'), s('MUAY THAÏ')), cc(s('WRESTLING'), s('BOXING')), s('BJJ'), cc(s('MMA'), s('BOXING')), cc(s('WRESTLING'), s('MUAY THAÏ')), E, E ],
      ]
    }
  }
};

function cellHTML(item){
  if (!item) return '<div class="c empty" role="cell"></div>';
  const render = (it) => {
    const classes = ['cls', `cat-${it.cat || 'cond'}`];
    if (it.closed) classes.push('closed');
    if (it.cat === 'cond' && it.label === 'OPEN') classes.push('open');
    const pre = it.pre ? `<span class="pre">${it.pre}</span>` : '';
    return `<div class="${classes.join(' ')}">${pre}<span class="lb">${it.label}</span></div>`;
  };
  if (item.stack) {
    return `<div class="c" role="cell">${item.stack.map(render).join('')}</div>`;
  }
  return `<div class="c" role="cell">${render(item)}</div>`;
}

let currentArea = 'cross';
let currentCity = 'casa';
let currentCategory = 'adult';
let currentAge = 'a57';
function renderSchedule(sel){
  let data;
  if (currentCategory === 'kids') {
    if (sel && KIDS_SCHEDULE.casa[sel]) currentAge = sel;
    data = (KIDS_SCHEDULE[currentCity] || KIDS_SCHEDULE.casa)[currentAge];
  } else {
    const cityData = SCHEDULE[currentCity] || SCHEDULE.casa;
    const area = sel || currentArea;
    data = cityData[area];
    if (data) currentArea = area;
  }
  if (!data) return;
  const grid = document.getElementById('sched-grid');
  const title = document.getElementById('sched-title');
  const desc = document.getElementById('sched-desc');
  if (!grid) return;

  title.textContent = t(data.titleKey);
  desc.textContent = t(currentCity === 'marrakech' && data.descKeyMrk ? data.descKeyMrk : data.descKey);
  const note = document.getElementById('schedNote');
  if (note) {
    const noteKey = currentCity === 'marrakech' ? 'programs.closed.mrk' : 'programs.closed';
    note.setAttribute('data-i18n', noteKey);
    note.textContent = t(noteKey);
  }

  let html = '<div class="h h-time" role="columnheader"></div>';
  DAYS.forEach(d => { html += `<div class="h" role="columnheader">${d}</div>`; });

  data.rows.forEach((row, i) => {
    html += `<div class="t" role="rowheader">${data.times[i]}</div>`;
    for (let k = 0; k < 7; k++) html += cellHTML(row[k]);
  });

  grid.innerHTML = html;

  // entry stagger
  if (window.gsap) {
    gsap.fromTo(grid.querySelectorAll('.cls'),
      { y: 14, opacity: 0, scale: 0.96 },
      { y: 0, opacity: 1, scale: 1, duration: 0.45, ease: 'expo.out', stagger: { each: 0.012, from: 'random' } }
    );
  }
}

function initSchedule(){
  const adultTabs = document.querySelectorAll('#sched-tabs-adult .sched-tab');
  const kidsTabs  = document.querySelectorAll('#sched-tabs-kids .sched-tab');
  if (!adultTabs.length) return;
  const activate = (list, target) => {
    list.forEach(t => { t.classList.remove('is-active'); t.setAttribute('aria-selected','false'); });
    target.classList.add('is-active');
    target.setAttribute('aria-selected','true');
  };

  adultTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      activate(adultTabs, tab);
      renderSchedule(tab.dataset.area);
      updateWAContactLink();
    });
  });

  kidsTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      activate(kidsTabs, tab);
      renderSchedule(tab.dataset.age);
      updateWAContactLink();
    });
  });

  const catBtns = document.querySelectorAll('.sched-cat');
  const tabsAdult = document.getElementById('sched-tabs-adult');
  const tabsKids = document.getElementById('sched-tabs-kids');
  catBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      catBtns.forEach(b => { b.classList.remove('is-active'); b.setAttribute('aria-pressed','false'); });
      btn.classList.add('is-active');
      btn.setAttribute('aria-pressed','true');
      currentCategory = btn.dataset.cat === 'kids' ? 'kids' : 'adult';
      if (tabsAdult) tabsAdult.hidden = currentCategory !== 'adult';
      if (tabsKids) tabsKids.hidden = currentCategory !== 'kids';
      if (currentCategory === 'adult' && currentCity === 'marrakech' && currentArea === 'core') {
        const crossTab = document.querySelector('#sched-tabs-adult .sched-tab[data-area="cross"]');
        if (crossTab) activate(adultTabs, crossTab);
        currentArea = 'cross';
      }
      renderSchedule(currentCategory === 'kids' ? currentAge : currentArea);
      updateWAContactLink();
    });
  });

  renderSchedule('cross');
  updateWAContactLink();

  const cityBtns = document.querySelectorAll('.sched-city');
  const soon = document.getElementById('sched-soon');
  if (soon) soon.hidden = true;
  cityBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      cityBtns.forEach(b => { b.classList.remove('is-active'); b.setAttribute('aria-pressed','false'); });
      btn.classList.add('is-active');
      btn.setAttribute('aria-pressed','true');
      currentCity = btn.dataset.city === 'marrakech' ? 'marrakech' : 'casa';
      if (currentCategory === 'adult') {
        // Core & Flow is Casablanca-only — hide tab for Marrakech
        const coreTab = document.querySelector('#sched-tabs-adult .sched-tab[data-area="core"]');
        if (coreTab) coreTab.hidden = currentCity === 'marrakech';
        if (currentCity === 'marrakech' && currentArea === 'core') {
          const crossTab = document.querySelector('#sched-tabs-adult .sched-tab[data-area="cross"]');
          if (crossTab) activate(adultTabs, crossTab);
          currentArea = 'cross';
        }
      }
      renderSchedule(currentCategory === 'kids' ? currentAge : currentArea);
      updateWAContactLink();
    });
  });
}

/* ===== NAV SCROLL STATE ===== */
const navEl = document.querySelector('.nav');
function updateNavState(){
  if (!navEl) return;
  const y = window.scrollY || document.documentElement.scrollTop;
  navEl.classList.toggle('scrolled', y > 60);
}
updateNavState();
window.addEventListener('scroll', updateNavState, { passive:true });
if (typeof lenis !== 'undefined') { /* lenis hook already updates ScrollTrigger; native scroll fires too */ }

/* ===== MOBILE MENU ===== */
const burger = document.getElementById('navBurger');
const mobileMenu = document.getElementById('mobileMenu');
function setMenu(open){
  if (!burger || !mobileMenu) return;
  burger.classList.toggle('is-open', open);
  burger.setAttribute('aria-expanded', open ? 'true' : 'false');
  mobileMenu.classList.toggle('is-open', open);
  mobileMenu.setAttribute('aria-hidden', open ? 'false' : 'true');
  document.body.style.overflow = open ? 'hidden' : '';
  if (lenis) open ? lenis.stop() : lenis.start();
}
if (burger) burger.addEventListener('click', () => setMenu(!burger.classList.contains('is-open')));
if (mobileMenu) mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));

/* ===== SMOOTH ANCHOR ===== */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    if (a.hasAttribute('data-book')) return; // booking buttons open modal instead
    const id = a.getAttribute('href');
    if (id.length < 2) return;
    const t = document.querySelector(id);
    if (!t) return;
    e.preventDefault();
    if (lenis) lenis.scrollTo(t, { duration: 1.4 });
    else t.scrollIntoView({ behavior: 'smooth' });
  });
});

/* ===== WHATSAPP HELPERS ===== */
const WA_NUMBERS = { casa: '212660354954', marrakech: '212717029156' };
function waNumber(city){ return city === 'marrakech' ? WA_NUMBERS.marrakech : WA_NUMBERS.casa; }
function locationName(city){ return city === 'marrakech' ? 'The Gym Factory Marrakech' : 'The Gym Factory'; }

function greeting(){
  const h = new Date().getHours();
  const day = h >= 5 && h < 18;
  return LANG === 'en' ? (day ? 'Good day' : 'Good evening') : (day ? 'Bonjour' : 'Bonsoir');
}

function waContactURL(area, city){
  city = city || (typeof currentCity !== 'undefined' ? currentCity : 'casa');
  const gr = greeting();
  const subjects = {
    boxing: { fr: 'le programme Espace Boxe', en: 'the Boxing Area program' },
    cross:  { fr: 'le programme Cross Factory', en: 'the Cross Factory program' },
    mat:    { fr: "le programme Espace Tatami", en: 'the Mat Area program' },
    core:   { fr: 'le programme Core & Flow', en: 'the Core & Flow program' },
  };
  const sub = subjects[area];
  const loc = locationName(city);
  const msg = LANG === 'en'
    ? `${gr}, I'm interested in${sub ? ' ' + sub.en + ' at' : ''} ${loc}. Could you give me more information?`
    : `${gr}, je suis intéressé(e) par${sub ? ' ' + sub.fr + ' à' : ''} ${loc}. Pourriez-vous me donner plus d'informations ?`;
  return `https://wa.me/${waNumber(city)}?text=${encodeURIComponent(msg)}`;
}

function waFormData(first, last, email){
  const city = typeof currentCity !== 'undefined' ? currentCity : 'casa';
  const gr = greeting();
  const loc = locationName(city);
  const area = typeof currentArea !== 'undefined' ? currentArea : null;
  const areaLabels = {
    boxing: { fr: 'Espace Boxe', en: 'Boxing Area' },
    cross:  { fr: 'Cross Factory', en: 'Cross Factory' },
    mat:    { fr: 'Espace Tatami', en: 'Mat Area' },
    core:   { fr: 'Core & Flow', en: 'Core & Flow' },
  };
  const areaLine = area && areaLabels[area]
    ? LANG === 'en'
      ? `\n• Interest: ${areaLabels[area].en}`
      : `\n• Intérêt : ${areaLabels[area].fr}`
    : '';
  const msg = LANG === 'en'
    ? `${gr}, I'd like to join ${loc}.\n\n• Name: ${first} ${last}\n• Email: ${email}${areaLine}\n\nPlease get back to me. Thank you!`
    : `${gr}, je souhaite rejoindre ${loc}.\n\n• Prénom : ${first}\n• Nom : ${last}\n• Email : ${email}${areaLine}\n\nMerci de me recontacter !`;
  return { number: waNumber(city), text: msg };
}

function waMeURL(number, text){
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}

function waWebURL(number, text){
  return `https://web.whatsapp.com/send?phone=${number}&text=${encodeURIComponent(text)}`;
}

function isNativeWA(){
  return matchMedia('(pointer: coarse)').matches ||
    /Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent);
}

function waFormURL(first, last, email){
  const d = waFormData(first, last, email);
  return waMeURL(d.number, d.text);
}

function updateWAContactLink(){
  const link = document.getElementById('wa-contact-link');
  // Link lives in the Casablanca card — pin to Casablanca regardless of schedule city toggle
  if (link) link.href = waContactURL(typeof currentArea !== 'undefined' ? currentArea : null, 'casa');
}

/* ===== BOOKING MODAL ===== */
const BK = {
  startOffset: 0,         // strip starts at today + startOffset days
  selected: 0,            // index within strip (0..6)
  area: 'all',            // 'all' | 'boxing' | 'cross' | 'mat'
  city: null,             // null | 'casa' | 'marrakech'
};
function cityLabel(){
  if (BK.city === 'casa') return t('book.city.casa');
  if (BK.city === 'marrakech') return t('book.city.mrk');
  return '';
}
const AREA_OPTS = [
  { id:'all',    key:'book.area.all' },
  { id:'boxing', key:'book.area.boxing' },
  { id:'cross',  key:'book.area.cross' },
  { id:'mat',    key:'book.area.mat' },
  { id:'core',   key:'book.area.core' },
];

// "13H30" -> "13:30"
function fmtTime(s){ return s.replace('H', ':'); }
// Build WhatsApp deep-link for a class booking
function waBookingURL(c, date){
  const cityKey = BK.city === 'marrakech' ? 'marrakech' : 'casa';
  const dateStr = longDate(date);
  const time = fmtTime(c.time);
  const area = areaLabel(c.area);
  const city = cityLabel();
  const loc = locationName(cityKey);
  const msg = LANG === 'en'
    ? `${greeting()}, I'd like to join a class at ${loc}.\n\n• City: ${city}\n• Class: ${c.name}\n• Program: ${area}\n• Date: ${dateStr}\n• Time: ${time} (${durLabel(c)})\n\nIs a spot available? Thank you.`
    : `${greeting()}, je souhaite rejoindre un cours à ${loc}.\n\n• Ville : ${city}\n• Cours : ${c.name}\n• Programme : ${area}\n• Date : ${dateStr}\n• Heure : ${time} (${durLabel(c)})\n\nUne place est-elle disponible ? Merci.`;
  return `https://wa.me/${waNumber(cityKey)}?text=${encodeURIComponent(msg)}`;
}
// Duration estimate by area
function dur(area){ return 60; }
function durLabel(c){
  if (c && c.long) return LANG === 'en' ? '2 hours' : '2 heures';
  return LANG === 'en' ? '1 hour' : '1 heure';
}
// Area human label for class row meta
function areaLabel(area){
  if (area === 'boxing') return t('book.area.boxing');
  if (area === 'cross')  return t('book.area.cross');
  if (area === 'core')   return t('book.area.core');
  return t('book.area.mat');
}

// Build a date offset N days from today (local)
function dateOffset(n){
  const d = new Date();
  d.setHours(0,0,0,0);
  d.setDate(d.getDate() + n);
  return d;
}
// JS day -> SCHEDULE row index (Mon=0..Sat=5; Sun=-1)
function schedDayIdx(date){
  const j = date.getDay(); // Sun=0..Sat=6
  if (j === 0) return -1;
  return j - 1;
}
// Locale label for short weekday "sam."
function shortDay(date){
  const loc = LANG === 'en' ? 'en-US' : 'fr-FR';
  const s = new Intl.DateTimeFormat(loc, { weekday:'short' }).format(date);
  // FR Intl returns "sam." already; EN returns "Sat". Lowercase, append dot if missing.
  let v = s.toLowerCase().replace(/\.$/, '');
  return v + '.';
}
function longDate(date){
  const loc = LANG === 'en' ? 'en-US' : 'fr-FR';
  const wd = new Intl.DateTimeFormat(loc, { weekday:'long' }).format(date);
  const mo = new Intl.DateTimeFormat(loc, { month:'long' }).format(date);
  const dy = date.getDate();
  return LANG === 'en' ? `${wd}, ${mo} ${dy}` : `${wd}, ${mo} ${dy}`;
}
function monthLabel(date){
  const loc = LANG === 'en' ? 'en-US' : 'fr-FR';
  return new Intl.DateTimeFormat(loc, { month:'long' }).format(date).toLowerCase();
}

// Collect classes for a given Date across enabled areas
function classesForDate(date){
  const idx = schedDayIdx(date);
  if (idx < 0) return [];
  let areas = BK.area === 'all' ? ['boxing','cross','mat','core'] : [BK.area];
  if (BK.city === 'marrakech') areas = areas.filter(a => a !== 'core');
  const list = [];
  const cityKey = BK.city === 'marrakech' ? 'marrakech' : 'casa';
  const citySched = SCHEDULE[cityKey];
  areas.forEach(a => {
    const sched = citySched && citySched[a];
    if (!sched) return;
    sched.rows.forEach((row, rIdx) => {
      const cell = row[idx];
      if (!cell) return;
      const baseTime = sched.times[rIdx];
      const items = cell.stack ? cell.stack : [cell];
      items.forEach(it => {
        if (it.closed) return;
        const time = it.pre || baseTime;
        list.push({
          time,
          name: it.label,
          area: a,
          duration: it.long ? 120 : dur(a),
          long: !!it.long,
        });
      });
    });
  });
  // Sort by time string (HH'H'MM)
  list.sort((x, y) => x.time.localeCompare(y.time));
  return list;
}

function renderBookingStrip(){
  const wrap = document.getElementById('bkDays');
  if (!wrap) return;
  const monthEl = document.getElementById('bkMonth');
  let html = '';
  // First displayed date for month label
  if (monthEl) monthEl.textContent = monthLabel(dateOffset(BK.startOffset));
  for (let i = 0; i < 7; i++){
    const d = dateOffset(BK.startOffset + i);
    const isToday = (BK.startOffset + i) === 0;
    const isActive = i === BK.selected;
    const isClosed = schedDayIdx(d) < 0 && BK.city !== 'marrakech';
    const label = isToday ? t('book.today') : shortDay(d);
    const cls = ['bk-day'];
    if (isActive) cls.push('is-active');
    if (isToday) cls.push('is-today');
    if (isClosed) cls.push('is-closed');
    html += `<button class="${cls.join(' ')}" data-i="${i}" type="button" role="tab" aria-selected="${isActive}">
      <span class="bk-day-lb">${label}</span>
      <span class="bk-day-num">${d.getDate()}</span>
    </button>`;
  }
  wrap.innerHTML = html;
  wrap.querySelectorAll('.bk-day').forEach(btn => {
    btn.addEventListener('click', () => {
      BK.selected = parseInt(btn.dataset.i, 10);
      renderBooking();
    });
  });
}

function renderBookingClasses(){
  const list = document.getElementById('bkClasses');
  const selEl = document.getElementById('bkSelected');
  if (!list || !selEl) return;
  const d = dateOffset(BK.startOffset + BK.selected);
  selEl.textContent = longDate(d);
  if (!BK.city){
    list.innerHTML = `<li class="bk-empty">${t('book.city.pick')}</li>`;
    return;
  }
  if (schedDayIdx(d) < 0){
    // Sunday: Casablanca is closed; Marrakech is open but has no classes on the schedule
    const key = BK.city === 'marrakech' ? 'book.noClassesDay' : 'book.closed';
    list.innerHTML = `<li class="bk-empty">${t(key)}</li>`;
    return;
  }
  const classes = classesForDate(d);
  if (!classes.length){
    list.innerHTML = `<li class="bk-empty">${t('book.noClasses')}</li>`;
    return;
  }
  list.innerHTML = classes.map((c, idx) => `
    <li class="bk-row">
      <div class="bk-time">${fmtTime(c.time)}<span class="bk-dur">${durLabel(c)}</span></div>
      <div class="bk-class">
        <div class="bk-class-name">${c.name}</div>
        <div class="bk-class-meta">${areaLabel(c.area)}</div>
        <button type="button" class="bk-class-details" data-idx="${idx}">
          <span>${t('book.details')}</span>
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
        </button>
        <div class="bk-class-extra" data-extra="${idx}">${c.name} · ${areaLabel(c.area)} · ${durLabel(c)}.</div>
      </div>
      <div class="bk-location">${cityLabel()}</div>
      <a href="${waBookingURL(c, d)}" target="_blank" rel="noopener" class="bk-cta" data-close>${t('book.reserve')}</a>
    </li>
  `).join('');
  list.querySelectorAll('.bk-class-details').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = btn.dataset.idx;
      const ex = list.querySelector(`[data-extra="${idx}"]`);
      const open = btn.classList.toggle('is-open');
      if (ex) ex.classList.toggle('is-open', open);
      btn.querySelector('span').textContent = open ? t('book.hide') : t('book.details');
    });
  });
  list.querySelectorAll('.bk-cta').forEach(a => {
    a.addEventListener('click', () => closeBooking());
  });
}

function areaOpts(){
  // Core & Flow is Casablanca-only — hide from Marrakech dropdown
  return BK.city === 'marrakech' ? AREA_OPTS.filter(o => o.id !== 'core') : AREA_OPTS;
}
function renderAreaMenu(){
  const menu = document.getElementById('bkAreaMenu');
  const lb = document.querySelector('#bkFilterArea .bk-filter-lb');
  if (!menu) return;
  const opts = areaOpts();
  menu.innerHTML = opts.map(o =>
    `<li role="option" data-id="${o.id}" class="${BK.area === o.id ? 'is-active' : ''}">${t(o.key)}</li>`
  ).join('');
  // Update visible label
  const current = opts.find(o => o.id === BK.area) || opts[0];
  if (lb) lb.textContent = BK.area === 'all' ? t('book.type') : t(current.key);
  menu.querySelectorAll('li').forEach(li => {
    li.addEventListener('click', e => {
      e.stopPropagation();
      BK.area = li.dataset.id;
      document.getElementById('bkFilterArea').classList.remove('is-open');
      renderBooking();
    });
  });
}

function renderCityPicker(){
  const wrap = document.getElementById('bkCity');
  if (!wrap) return;
  wrap.querySelectorAll('.bk-city-btn').forEach(btn => {
    const active = btn.dataset.city === BK.city;
    btn.classList.toggle('is-active', active);
    btn.setAttribute('aria-selected', String(active));
  });
}
function renderBooking(){
  renderCityPicker();
  renderBookingStrip();
  renderAreaMenu();
  renderBookingClasses();
}

function openBooking(){
  const m = document.getElementById('bookingModal');
  if (!m) return;
  // Reset to today on open
  BK.startOffset = 0; BK.selected = 0; BK.city = null;
  renderBooking();
  m.setAttribute('aria-hidden','false');
  m.classList.add('is-open');
  document.body.classList.add('is-booking');
  if (lenis) lenis.stop();
}
function closeBooking(){
  const m = document.getElementById('bookingModal');
  if (!m) return;
  m.classList.remove('is-open');
  m.setAttribute('aria-hidden','true');
  document.body.classList.remove('is-booking');
  if (lenis) lenis.start();
}

// Wire up booking CTAs + modal controls
(function initBooking(){
  // Bind every element marked [data-book] to open the booking modal
  document.querySelectorAll('[data-book]').forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault();
      // Mobile menu may be open — close it before showing modal
      if (typeof setMenu === 'function' && burger && burger.classList.contains('is-open')) {
        setMenu(false);
      }
      openBooking();
    });
  });
  // Legacy CTA selectors (kept for any button missing data-book)
  document.querySelectorAll('[data-i18n="hero.cta"], [data-i18n="pricing.cta2"], [data-i18n="programs.book"]').forEach(el => {
    const trigger = el.closest('a,button') || el;
    if (trigger.hasAttribute('data-book')) return; // already wired above
    trigger.addEventListener('click', e => {
      e.preventDefault();
      openBooking();
    });
  });

  const modal = document.getElementById('bookingModal');
  if (modal){
    modal.addEventListener('click', e => {
      if (e.target.matches('[data-close]')) closeBooking();
    });
  }
  const closeBtn = document.getElementById('bkClose');
  if (closeBtn) closeBtn.addEventListener('click', closeBooking);

  const prev = document.getElementById('bkPrev');
  const next = document.getElementById('bkNext');
  if (prev) prev.addEventListener('click', () => {
    BK.startOffset = Math.max(0, BK.startOffset - 7);
    BK.selected = 0;
    renderBooking();
  });
  if (next) next.addEventListener('click', () => {
    BK.startOffset += 7;
    BK.selected = 0;
    renderBooking();
  });

  const filter = document.getElementById('bkFilterArea');
  if (filter){
    const filterBtn = filter.querySelector('.bk-filter-btn');
    filter.addEventListener('click', e => {
      if (e.target.closest('.bk-filter-menu')) return;
      const open = filter.classList.toggle('is-open');
      if (filterBtn) filterBtn.setAttribute('aria-expanded', String(open));
    });
    document.addEventListener('click', e => {
      if (!filter.contains(e.target)) filter.classList.remove('is-open');
    });
  }

  const cityWrap = document.getElementById('bkCity');
  if (cityWrap){
    cityWrap.querySelectorAll('.bk-city-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        BK.city = btn.dataset.city;
        if (BK.city === 'marrakech' && BK.area === 'core') BK.area = 'all';
        renderBooking();
      });
    });
  }

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal && modal.classList.contains('is-open')) closeBooking();
  });
})();

initSchedule();
