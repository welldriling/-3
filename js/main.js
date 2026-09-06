(function(){
  const $= (s,r=document)=>r.querySelector(s);
  const $$=(s,r=document)=>[...r.querySelectorAll(s)];

  window.addEventListener("load",()=>$("#loader")?.classList.add("gone"));

  const dict={
    ar:{},
    fr:{
      "brand.sub":"Forage de puits","nav.about":"À propos","nav.services":"Services","nav.equipment":"Équipement",
      "nav.areas":"Zones","nav.gallery":"Galerie","nav.testimonials":"Avis","nav.contact":"Contact","nav.quote":"Devis gratuit",
      "hero.badge":"Entreprise familiale marocaine, expertise syrienne du forage",
      "hero.title":"Nous forons profondément… pour atteindre l’eau partout au Maroc",
      "hero.sub":"Solutions hydriques de l’étude géologique jusqu’au pompage — équipes familiales dans tout le Royaume.",
      "hero.call":"Appelez maintenant","hero.quote":"Demander un devis",
      "stats.wells":"puits forés","stats.meters":"mètres forés","stats.regions":"régions","stats.years":"ans d’expérience",
      "about.kicker":"Notre histoire","about.title":"Un métier transmis… des racines au Maroc",
      "about.p1":"De la Syrie au Maroc, nos familles ont transmis l’art du forage de puits.",
      "about.p2":"MOROCCO WELL DRILLING dirige des équipes familiales avec tout le matériel de forage.",
      "about.p3":"Siège Fès–Meknès, antennes à Agadir et Marrakech.",
      "about.feat1":"Expertise syrienne du forage profond","about.feat2":"Flotte et matériel 100% propriétaires",
      "about.feat3":"Équipes familiales dans 4 villes","about.badgeYears":"+25 ans","about.badgeSub":"de forage",
      "city.fes":"Fès","city.meknes":"Meknès","city.agadir":"Agadir","city.marrakech":"Marrakech",
      "services.kicker":"Services","services.title":"Tout ce dont votre puits a besoin",
      "svc1.t":"Forage de puits artésiens et superficiels","svc1.d":"Forage Rotary et DTH selon le terrain.",
      "svc2.t":"Études géologiques","svc2.d":"Localisation de l’eau avant forage.",
      "svc3.t":"Pompes immergées","svc3.d":"Fourniture, pose et maintenance.",
      "svc4.t":"Équipement, désinfection, dessalement","svc4.d":"Mise en service complète du puits.",
      "svc5.t":"Réhabilitation","svc5.d":"Nettoyage et approfondissement des anciens puits.",
      "services.cta.t":"Un autre besoin ?","services.cta.d":"Écrivez-nous sur WhatsApp.","services.cta.btn":"WhatsApp",
      "geo.kicker":"Le voyage de l’eau","geo.title":"De la surface à l’aquifère","geo.d":"Suivez le forage couche par couche.",
      "geo.layer1":"Sol de surface","geo.layer2":"Roche","geo.layer3":"Nappe — l’eau",
      "equip.kicker":"Matériel","equip.title":"Tout le matériel, prêt à intervenir","equip.note":"Nous possédons nos machines — pas de location.",
      "eq1.t":"Taillants DTH","eq1.d":"Plusieurs diamètres pour roche dure.",
      "eq2.t":"Marteaux DHD380","eq2.d":"Haute pression, stockés chez nous.",
      "eq3.t":"Camions de forage","eq3.d":"Flotte Mercedes pour sites difficiles.",
      "eq4.t":"Pièces et consommables","eq4.d":"Stock pour éviter l’arrêt chantier.",
      "areas.kicker":"Zones","areas.title":"Là où il y a de l’eau, nous arrivons",
      "areas.hq":"Siège","areas.branch":"Antenne familiale","areas.more":"Nous intervenons dans tout le Royaume.",
      "areas.fes.d":"Plaine du Saïs — cœur de notre activité.","areas.meknes.d":"Agriculteurs autour de Meknès.",
      "areas.agadir.d":"Souss et sud — formations profondes.","areas.marrakech.d":"Haouz — fermes et riads.",
      "gallery.kicker":"Galerie","gallery.title":"Le terrain parle pour nous",
      "gallery.c1":"Puits artésien — Saïs","gallery.c2":"Mât de forage prêt","gallery.c3":"Taillants DTH",
      "gallery.c4":"Camion Mercedes","gallery.c5":"Forage parmi les oliviers","gallery.c6":"Marteaux en caisse",
      "gallery.ph":"Place réservée à vos prochaines photos",
      "ba.kicker":"Avant / Après","ba.title":"Terre assoiffée… devenue verte","ba.before":"Avant","ba.after":"Après",
      "ba.caption":"De la terre sèche à l’eau qui coule.",
      "why.kicker":"Pourquoi nous","why.title":"Trois garanties dans notre slogan",
      "why1.t":"Solutions eau","why1.d":"De l’étude au premier litre.","why2.t":"Professionnalisme","why2.d":"Matériel moderne, délais tenus.",
      "why3.t":"Fiable et durable","why3.d":"Puits pour des décennies, prix clairs.",
      "test.kicker":"Avis","test.title":"Paroles de ceux qui ont de l’eau",
      "t1.q":"Eau trouvée à 165 m comme prévu.","t1.n":"Haj Mohamed","t1.r":"Agriculteur — Fès",
      "t2.q":"Troisième puits avec eux, débit respecté.","t2.n":"Coopérative Amal","t2.r":"Meknès",
      "t3.q":"De Fès à Agadir en 48h, service complet.","t3.n":"Youssef Bannani","t3.r":"Agadir",
      "t4.q":"Forage soigné dans le jardin du riad.","t4.n":"Riad Dar Qamar","t4.r":"Marrakech",
      "quote.kicker":"Devis gratuit","quote.title":"Parlez-nous de votre projet",
      "form.name":"Nom complet","form.name.ph":"Ex. Ahmed Alaoui","form.phone":"Téléphone",
      "form.city":"Ville / région","form.city.ph":"Fès, Meknès…","form.service":"Service","form.service.ph":"Choisir…",
      "form.depth":"Profondeur estimée (optionnel)","form.depth.ph":"Ex. 120 m","form.send":"Envoyer via WhatsApp",
      "form.note":"WhatsApp s’ouvre avec votre message — aucune donnée n’est stockée.",
      "quote.step1.t":"Envoyez","quote.step1.d":"Le formulaire arrive sur WhatsApp.",
      "quote.step2.t":"Visite","quote.step2.d":"Étude de site sous quelques jours.",
      "quote.step3.t":"Forage","quote.step3.d":"Nous livrons l’eau.",
      "contact.kicker":"Contact","contact.title":"Appelez-nous aujourd’hui",
      "contact.call.t":"Téléphone","contact.wa.t":"WhatsApp","contact.wa.d":"Réponse rapide",
      "contact.hours.t":"Horaires","contact.hours.d":"7j/7 — 8h à 19h","contact.loc.t":"Siège","contact.loc.d":"Fès–Meknès • Agadir • Marrakech",
      "contact.follow":"Suivez-nous :","footer.about":"Entreprise familiale de forage artésien au Maroc.",
      "footer.links.t":"Liens","footer.contact.t":"Contact","footer.rights":"© 2026 MOROCCO WELL DRILLING — Tous droits réservés"
    },
    en:{
      "brand.sub":"Well drilling","nav.about":"About","nav.services":"Services","nav.equipment":"Equipment",
      "nav.areas":"Service areas","nav.gallery":"Gallery","nav.testimonials":"Reviews","nav.contact":"Contact","nav.quote":"Free quote",
      "hero.badge":"Moroccan family company with Syrian drilling heritage",
      "hero.title":"We drill deep… to reach water anywhere in Morocco",
      "hero.sub":"Full water solutions from geology to pumping — family crews across the Kingdom.",
      "hero.call":"Call now","hero.quote":"Request a quote",
      "stats.wells":"wells drilled","stats.meters":"meters drilled","stats.regions":"regions covered","stats.years":"years experience",
      "about.kicker":"Our story","about.title":"A craft we inherited… roots we planted in Morocco",
      "about.p1":"From the Levant to Morocco, our families carried the craft of well drilling.",
      "about.p2":"MOROCCO WELL DRILLING runs family crews that own every drill and truck.",
      "about.p3":"HQ in Fès–Meknès, family branches in Agadir and Marrakech.",
      "about.feat1":"Inherited Syrian deep-drilling skill","about.feat2":"Fully owned fleet and gear",
      "about.feat3":"Family crews in 4 cities","about.badgeYears":"+25 years","about.badgeSub":"of well drilling",
      "city.fes":"Fès","city.meknes":"Meknès","city.agadir":"Agadir","city.marrakech":"Marrakech",
      "services.kicker":"Services","services.title":"Everything your well needs",
      "svc1.t":"Artesian & shallow wells","svc1.d":"Rotary and DTH drilling to match the ground.",
      "svc2.t":"Geological studies","svc2.d":"Locate water before we drill.",
      "svc3.t":"Submersible pumps","svc3.d":"Supply, install and maintain pumps.",
      "svc4.t":"Completion, disinfection, desalination","svc4.d":"Full well commissioning.",
      "svc5.t":"Rehabilitation","svc5.d":"Clean, deepen and restore old wells.",
      "services.cta.t":"Need something else?","services.cta.d":"Message us on WhatsApp.","services.cta.btn":"WhatsApp us",
      "geo.kicker":"Water’s journey","geo.title":"From surface to aquifer","geo.d":"Watch the borehole cut through each layer.",
      "geo.layer1":"Topsoil","geo.layer2":"Rock layers","geo.layer3":"Aquifer — water",
      "equip.kicker":"Equipment","equip.title":"Owned gear, ready anytime","equip.note":"We own the machines — no waiting on rentals.",
      "eq1.t":"DTH bits","eq1.d":"Multiple diameters for hard rock.",
      "eq2.t":"DHD380 hammers","eq2.d":"High-pressure hammers in our stock.",
      "eq3.t":"Mobile drill trucks","eq3.d":"Mercedes fleet for tough sites.",
      "eq4.t":"Spares & consumables","eq4.d":"Stocked to keep the job moving.",
      "areas.kicker":"Coverage","areas.title":"Where there is water, we reach you",
      "areas.hq":"Headquarters","areas.branch":"Family branch","areas.more":"We cover every region of Morocco.",
      "areas.fes.d":"Saïs plain — our daily core.","areas.meknes.d":"Farmers around Meknès.",
      "areas.agadir.d":"Souss & south — deep rock.","areas.marrakech.d":"Haouz farms and riads.",
      "gallery.kicker":"Gallery","gallery.title":"From the field",
      "gallery.c1":"Artesian well — Saïs","gallery.c2":"Mast ready","gallery.c3":"New DTH bits",
      "gallery.c4":"Mercedes drill truck","gallery.c5":"Drilling among olive trees","gallery.c6":"Hammer crates",
      "gallery.ph":"Reserved for your next job photos",
      "ba.kicker":"Before / After","ba.title":"Thirsty land… turned green","ba.before":"Before","ba.after":"After",
      "ba.caption":"From dry ground to running water.",
      "why.kicker":"Why us","why.title":"Three promises in our slogan",
      "why1.t":"Water solutions","why1.d":"From study to first drop.","why2.t":"Professional","why2.d":"Modern gear, strict safety and dates.",
      "why3.t":"Trusted & lasting","why3.d":"Wells that last decades, clear prices.",
      "test.kicker":"Reviews","test.title":"From land that now has water",
      "t1.q":"Water at 165 m — honest geology, clean crew.","t1.n":"Haj Mohamed","t1.r":"Farmer — Fès",
      "t2.q":"Third well with them. Promised yield delivered.","t2.n":"Amal Cooperative","t2.r":"Meknès",
      "t3.q":"Fès to Agadir in 48 hours, full service.","t3.n":"Youssef Bannani","t3.r":"Agadir",
      "t4.q":"Careful drilling in the riad garden.","t4.n":"Riad Dar Qamar","t4.r":"Marrakech",
      "quote.kicker":"Free quote","quote.title":"Tell us about your project",
      "form.name":"Full name","form.name.ph":"e.g. Ahmed Alaoui","form.phone":"Phone",
      "form.city":"City / area","form.city.ph":"Fès, Meknès…","form.service":"Service","form.service.ph":"Choose…",
      "form.depth":"Approx. depth (optional)","form.depth.ph":"e.g. 120 m","form.send":"Send via WhatsApp",
      "form.note":"WhatsApp opens with your message — we don’t store data.",
      "quote.step1.t":"Send","quote.step1.d":"We receive it on WhatsApp.",
      "quote.step2.t":"Visit","quote.step2.d":"Site study within days.",
      "quote.step3.t":"Drill","quote.step3.d":"We deliver the water.",
      "contact.kicker":"Contact","contact.title":"Call us today",
      "contact.call.t":"Phone","contact.wa.t":"WhatsApp","contact.wa.d":"Fast replies",
      "contact.hours.t":"Hours","contact.hours.d":"7 days — 8am to 7pm","contact.loc.t":"Locations","contact.loc.d":"Fès–Meknès • Agadir • Marrakech",
      "contact.follow":"Follow us:","footer.about":"Moroccan family well-drilling company.",
      "footer.links.t":"Links","footer.contact.t":"Contact","footer.rights":"© 2026 MOROCCO WELL DRILLING — All rights reserved"
    }
  };

  function applyLang(lang){
    const html=document.documentElement;
    html.lang=lang; html.dir=lang==="ar"?"rtl":"ltr";
    $$("[data-lang]").forEach(b=>b.classList.toggle("active",b.dataset.lang===lang));
    if(lang==="ar"){
      $$("[data-i18n]").forEach(el=>{ if(el.dataset.orig) el.textContent=el.dataset.orig; });
      $$("[data-i18n-ph]").forEach(el=>{ if(el.dataset.origPh) el.placeholder=el.dataset.origPh; });
      return;
    }
    const t=dict[lang]||{};
    $$("[data-i18n]").forEach(el=>{
      if(!el.dataset.orig) el.dataset.orig=el.textContent;
      if(t[el.dataset.i18n]) el.textContent=t[el.dataset.i18n];
    });
    $$("[data-i18n-ph]").forEach(el=>{
      if(!el.dataset.origPh) el.dataset.origPh=el.placeholder||"";
      if(t[el.dataset.i18nPh]) el.placeholder=t[el.dataset.i18nPh];
    });
  }
  $$("[data-lang]").forEach(b=>b.addEventListener("click",()=>applyLang(b.dataset.lang)));

  $("#themeToggle")?.addEventListener("click",()=>{
    const html=document.documentElement;
    html.dataset.theme=html.dataset.theme==="dark"?"light":"dark";
  });
  $("#burger")?.addEventListener("click",()=>$("#nav").classList.toggle("open"));
  $$("#nav a").forEach(a=>a.addEventListener("click",()=>$("#nav").classList.remove("open")));

  const slogans={ar:["نحفر اليوم، لنؤمّن الغد"],fr:["Forer aujourd'hui, sécuriser demain"],en:["Drilling today, securing tomorrow"]};
  let ti=0, typedEl=$("#typed");
  function typeLoop(){
    const lang=document.documentElement.lang||"ar";
    const text=(slogans[lang]||slogans.ar)[0];
    typedEl.textContent=text.slice(0,ti);
    ti++;
    if(ti<=text.length) setTimeout(typeLoop,70);
    else setTimeout(()=>{ti=0;typedEl.textContent="";typeLoop();},2600);
  }
  if(typedEl) typeLoop();

  const io=new IntersectionObserver(entries=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add("in"); if(e.target.querySelector(".num")) countUp(e.target); }});
  },{threshold:.2});
  $$(".reveal,.stat").forEach(el=>io.observe(el));
  function countUp(scope){
    $$(".num",scope).forEach(n=>{
      if(n.dataset.done) return; n.dataset.done=1;
      const end=+n.dataset.count||0; const t0=performance.now();
      (function step(t){ const p=Math.min(1,(t-t0)/1400); n.textContent=Math.floor(end*p).toLocaleString(); if(p<1) requestAnimationFrame(step); })(t0);
    });
  }

  const geo=document.querySelector(".geo-section");
  const pipe=document.querySelector(".drill-pipe")||document.querySelector(".drill-rig");
  const depth=$("#depthVal");
  window.addEventListener("scroll",()=>{
    const bg=document.querySelector("[data-parallax]");
    if(bg) bg.style.transform=`scale(1.08) translateY(${window.scrollY*0.12}px)`;
    if(!geo||!pipe) return;
    const r=geo.getBoundingClientRect();
    const total=geo.offsetHeight-window.innerHeight;
    const p=Math.min(1,Math.max(0, -r.top/total));
    pipe.style.height=(p*90)+"%";
    if(depth) depth.textContent=Math.round(p*180);
  });

  function bindSlider(root,trackSel){
    const rootEl=$(root); if(!rootEl) return;
    const track=$(trackSel,rootEl);
    rootEl.querySelector(".prev")?.addEventListener("click",()=>track.scrollBy({left: track.clientWidth*-0.8,behavior:"smooth"}));
    rootEl.querySelector(".next")?.addEventListener("click",()=>track.scrollBy({left: track.clientWidth*0.8,behavior:"smooth"}));
  }
  bindSlider("#galSlider",".g-track");
  bindSlider("#tSlider",".t-track");

  const ba=$("#baSlider"), range=$("#baRange");
  range?.addEventListener("input",()=>ba.style.setProperty("--pos",range.value+"%"));

  $("#quoteForm")?.addEventListener("submit",e=>{
    e.preventDefault();
    const name=$("#qName").value.trim();
    const phone=$("#qPhone").value.trim();
    const city=$("#qCity").value.trim();
    const svc=$("#qService").value;
    const depthV=$("#qDepth").value.trim();
    const msg=encodeURIComponent(`طلب عرض سعر%0Aالاسم: ${name}%0Aالهاتف: ${phone}%0Aالمدينة: ${city}%0Aالخدمة: ${svc}%0Aالعمق: ${depthV||"-"}`);
    window.open("https://wa.me/212652879789?text="+msg,"_blank");
  });

  $$("img").forEach(img=>{
    img.addEventListener("error",()=>{
      img.style.background="#123552";
      img.style.minHeight="160px";
      img.removeAttribute("src");
    });
  });
})();
