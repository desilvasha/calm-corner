/* ═══════════════════════════════════════════════════════════════════════
   i18n — Finnish / English language switcher
   Persists preference via cookie. Default: English.
   ═══════════════════════════════════════════════════════════════════════ */

const translations = {
  // ── Navigation ──
  "nav.about":        { en: "About",        fi: "Tietoa" },
  "nav.services":     { en: "Services",     fi: "Palvelut" },
  "nav.benefits":     { en: "Benefits",     fi: "Hyödyt" },
  "nav.how":          { en: "How it works", fi: "Näin se toimii" },
  "nav.pricing":      { en: "Pricing",      fi: "Hinnat" },
  "nav.krishan":      { en: "Krishan",      fi: "Krishan" },
  "nav.cta":          { en: "Book now", fi: "Varaa nyt" },
  "nav.home":         { en: "Home",         fi: "Etusivu" },

  // ── Hero ──
  "hero.tag":         { en: "Office wellness in Tampere",   fi: "Työpaikkahyvinvointia Tampereella" },
  "hero.headline":    { en: "Relaxation for your team,<br> right at the office.", fi: "Rentoutusta tiimillesi,<br> suoraan toimistolla." },
  "hero.sub":         { en: "Short head, foot and chair massage sessions that help employees feel calmer, lighter and more focused — without leaving the workplace.", fi: "Lyhyet pää-, jalka- ja tuolihierontahetket, jotka auttavat työntekijöitä tuntemaan olonsa rauhallisemmaksi, kevyemmäksi ja keskittyneemmäksi — poistumatta työpaikalta." },
  "hero.book":        { en: "Book a free visit", fi: "Varaa maksuton käynti" },
  "hero.offer":       { en: "Get a free quote",  fi: "Pyydä ilmainen tarjous" },

  // ── About ──
  "about.tag":        { en: "About us",             fi: "Meistä" },
  "about.title":      { en: "Welcome to Hills Wellness", fi: "Tervetuloa Hills Wellnessiin" },
  "about.text":       { en: "Hills Wellness brings gentle, office-friendly relaxation sessions directly to your workplace in Tampere. We specialise in short, fully clothed, oil-free head, foot and chair massage — no special room needed, no disruption to your day.", fi: "Hills Wellness tuo lempeitä, toimistoystävällisiä rentoutushetkiä suoraan työpaikallesi Tampereella. Olemme erikoistuneet lyhyisiin, vaatteet päällä tehtäviin, öljyttömiin pää-, jalka- ja tuolihierontoihin — ei erityistä tilaa tarvita, ei häiriötä päiväänne." },

  // ── Services ──
  "services.tag":     { en: "Our services",        fi: "Palvelumme" },
  "services.title":   { en: "What we offer", fi: "Mitä tarjoamme" },
  "svc.head.title":   { en: "Head & Neck Relaxation",          fi: "Pään ja niskan rentoutus" },
  "svc.head.desc":    { en: "10–20 minutes per person. Ideal for screen-heavy work.", fi: "10–20 minuuttia per henkilö. Ihanteellinen näyttöpäätteellä työskenteleville." },
  "svc.foot.title":   { en: "Foot & Lower Leg Relaxation",     fi: "Jalkojen ja säärten rentoutus" },
  "svc.foot.desc":    { en: "For tired legs and feet — perfect for people who sit or stand a lot.", fi: "Väsyneille jaloille — täydellinen paljon istuville tai seisoville." },
  "svc.chair.title":  { en: "Chair-Based Upper Body Massage",  fi: "Tuolihieronta ylävartaloon" },
  "svc.chair.desc":   { en: "Back, shoulders and arms. No undressing, no oils.", fi: "Selkä, hartiat ja käsivarret. Ei riisuutumista, ei öljyjä." },
  "svc.office.title": { en: "Office Wellness Sessions",        fi: "Toimiston hyvinvointihetket" },
  "svc.office.desc":  { en: "Block of 2–4 hours with short sessions for employees.", fi: "2–4 tunnin kokonaisuus lyhyillä sessioilla työntekijöille." },
  "svc.day.title":    { en: "Wellness Day Packages",           fi: "Hyvinvointipäiväpaketit" },
  "svc.day.desc":     { en: "Half-day or full-day presence for staff wellbeing days and events.", fi: "Puolen päivän tai koko päivän läsnäolo henkilöstön hyvinvointipäiville ja tapahtumille." },

  // ── How it works ──
  "how.tag":          { en: "How it works",                    fi: "Näin se toimii" },
  "how.title":        { en: "Easy to book, calming to receive", fi: "Helppo varata, rentouttava kokea" },
  "how.step1":        { en: "You choose a date and duration",  fi: "Valitset päivän ja keston" },
  "how.step2":        { en: "We set up a quiet space in your office", fi: "Järjestämme rauhallisen tilan toimistoosi" },
  "how.step3":        { en: "Employees book 10–20 minute slots", fi: "Työntekijät varaavat 10–20 minuutin ajat" },
  "how.step4":        { en: "Everyone goes back to work more relaxed", fi: "Kaikki palaavat töihin rentoutuneempina" },

  // ── Pricing ──
  "pricing.tag":      { en: "Pricing",             fi: "Hinnat" },
  "pricing.title":    { en: "Clear, honest pricing", fi: "Selkeä ja reilu hinnoittelu" },
  "pricing.th.svc":   { en: "Service",             fi: "Palvelu" },
  "pricing.th.dur":   { en: "Duration",            fi: "Kesto" },
  "pricing.th.price": { en: "Price",               fi: "Hinta" },
  "pricing.intro":    { en: "All prices include VAT\u00a025.5\u00a0%.", fi: "Kaikki hinnat sisältävät ALV\u00a025,5\u00a0%." },
  "pricing.headneck": { en: "Head & Neck",         fi: "Pää- / niskahieronta" },
  "pricing.foot":     { en: "Foot Massage",        fi: "Jalkahieronta" },
  "pricing.headfoot": { en: "Head & Foot",         fi: "Pää- / jalkahieronta" },
  "pricing.popular":  { en: "Popular",             fi: "Suosittu" },
  "pricing.hourly":   { en: "Hourly",              fi: "Tuntivaraus" },
  "pricing.halfday":  { en: "Half-Day",            fi: "Puoli päivää" },
  "pricing.fullday":  { en: "Full Day",            fi: "Koko päivä" },
  "pricing.hourly.desc":   { en: "~6 sessions",   fi: "~6 sessiota" },
  "pricing.halfday.desc":  { en: "~24 sessions",  fi: "~24 sessiota" },
  "pricing.fullday.desc":  { en: "~42 sessions",  fi: "~42 sessiota" },
  "pricing.packages.label": { en: "Office Bookings", fi: "Toimistovaraukset" },
  "pricing.note":     { en: "Need something custom? Message us and we\u2019ll build a plan around your team.", fi: "Tarvitsetko räätälöidyn ratkaisun? Kirjoita meille ja suunnitellaan tiimillesi sopiva paketti." },

  // ── Krishan ──
  "krishan.tag":      { en: "Our team",                    fi: "Tiimimme" },
  "krishan.title":    { en: "The people behind Hills Wellness", fi: "Hills Wellnessin tekijät" },
  "krishan.text":     { en: "We are a small, wellness-focused team based in Tampere. We specialise in gentle, non-medical head, foot and chair massage designed specifically for office environments. Our goal is simple: to bring a moment of calm into busy workdays.", fi: "Olemme pieni, hyvinvointiin keskittyvä tiimi Tampereelta. Olemme erikoistuneet lempeään, ei-lääkinnälliseen pää-, jalka- ja tuolihierontaan, joka on suunniteltu erityisesti toimistoympäristöihin. Tavoitteemme on yksinkertainen: tuoda rauhoittava hetki kiireisiin työpäiviin." },

  // ── Contact ──
  "contact.tag":      { en: "Let's talk",                     fi: "Keskustellaan" },
  "contact.title":    { en: "Bring Hills Wellness to your office", fi: "Tuo Hills Wellness toimistollesi" },
  "contact.email":    { en: "Email",     fi: "Sähköposti" },
  "contact.phone":    { en: "Phone",     fi: "Puhelin" },
  "contact.location": { en: "Location",  fi: "Sijainti" },
  "contact.btn":      { en: "Send us a message", fi: "Lähetä meille viesti" },

  // ── Footer ──
  "footer.copy":      { en: "&copy; 2026 Hills Wellness. Tampere, Finland.", fi: "&copy; 2026 Hills Wellness. Tampere, Suomi." },

  // ── Benefits page ──
  "ben.breadcrumb":   { en: "&larr; Back to home", fi: "&larr; Takaisin etusivulle" },
  "ben.title":        { en: "How Massage Supports the Body and Mind", fi: "Miten hieronta tukee kehoa ja mieltä" },
  "ben.intro":        { en: "Gentle touch creates real changes in how we feel, move and function.", fi: "Lempeä kosketus saa aikaan todellisia muutoksia siinä, miten tunnemme, liikumme ja toimimme." },
  "ben.intro.sub":    { en: "Hills Wellness offers head, foot and chair massage designed specifically for office environments. These short sessions may be simple, but the effects on the body and mind can be surprisingly powerful.", fi: "Hills Wellness tarjoaa pää-, jalka- ja tuolihierontaa, joka on suunniteltu erityisesti toimistoympäristöihin. Nämä lyhyet hetket voivat olla yksinkertaisia, mutta vaikutukset kehoon ja mieleen voivat olla yllättävän voimakkaita." },
  "ben.prompt":       { en: "Here's what happens during and after a relaxation massage.", fi: "Tässä on mitä tapahtuu rentoutushieronnan aikana ja sen jälkeen." },

  "ben.1.title":      { en: "The Body Shifts Into \"Relax Mode\"", fi: "Keho siirtyy \"rentoutumistilaan\"" },
  "ben.1.desc":       { en: "Massage activates the body's natural relaxation response. Breathing slows, muscles soften and the nervous system calms down.", fi: "Hieronta aktivoi kehon luonnollisen rentoutumisreaktion. Hengitys hidastuu, lihakset pehmenevät ja hermosto rauhoittuu." },
  "ben.1.label":      { en: "This supports:", fi: "Tämä tukee:" },
  "ben.1.li1":        { en: "Lower stress levels", fi: "Alhaisempi stressitaso" },
  "ben.1.li2":        { en: "A sense of calm", fi: "Rauhallinen olo" },
  "ben.1.li3":        { en: "Better emotional balance", fi: "Parempi tunnetasapaino" },

  "ben.2.title":      { en: "Muscle Tension Gently Releases", fi: "Lihasjännitys vapautuu lempeästi" },
  "ben.2.desc":       { en: "Long hours at a desk create tightness in the head, neck, shoulders, back and feet. Massage helps soften these areas and encourages natural release.", fi: "Pitkät tunnit työpöydän ääressä aiheuttavat kireyttä päässä, niskassa, hartioissa, selässä ja jaloissa. Hieronta auttaa pehmentämään näitä alueita ja edistää luonnollista vapautumista." },
  "ben.2.label":      { en: "Employees often feel:", fi: "Työntekijät tuntevat usein:" },
  "ben.2.li1":        { en: "Less stiffness", fi: "Vähemmän jäykkyyttä" },
  "ben.2.li2":        { en: "More comfort", fi: "Enemmän mukavuutta" },
  "ben.2.li3":        { en: "Easier movement", fi: "Helpompaa liikkumista" },

  "ben.3.title":      { en: "Circulation Improves", fi: "Verenkierto paranee" },
  "ben.3.desc":       { en: "Gentle pressure encourages better blood flow in the areas being massaged.", fi: "Lempeä paine edistää parempaa verenkiertoa hierottavilla alueilla." },
  "ben.3.label":      { en: "This helps:", fi: "Tämä auttaa:" },
  "ben.3.li1":        { en: "Bring warmth to tight muscles", fi: "Tuomaan lämpöä kireisiin lihaksiin" },
  "ben.3.li2":        { en: "Support natural recovery", fi: "Tukemaan luonnollista palautumista" },
  "ben.3.li3":        { en: "Reduce the \"heavy\" feeling in feet and legs", fi: "Vähentämään \"raskasta\" tunnetta jaloissa" },

  "ben.4.title":      { en: "The Mind Clears", fi: "Mieli selkiytyy" },
  "ben.4.desc":       { en: "Relaxation massage helps quiet mental noise. A short break can reset focus and improve clarity.", fi: "Rentoutushieronta auttaa hiljentämään mielen hälinää. Lyhyt tauko voi palauttaa keskittymisen ja parantaa selkeyttä." },
  "ben.4.label":      { en: "This supports:", fi: "Tämä tukee:" },
  "ben.4.li1":        { en: "Better concentration", fi: "Parempaa keskittymistä" },
  "ben.4.li2":        { en: "Sharper thinking", fi: "Terävämpää ajattelua" },
  "ben.4.li3":        { en: "More productive work", fi: "Tuottavampaa työskentelyä" },

  "ben.5.title":      { en: "Mood Naturally Lifts", fi: "Mieliala kohoaa luonnollisesti" },
  "ben.5.desc":       { en: "Relaxation touch can increase feelings of comfort and wellbeing.", fi: "Rentouttava kosketus voi lisätä mukavuuden ja hyvinvoinnin tunnetta." },
  "ben.5.label":      { en: "Employees often experience:", fi: "Työntekijät kokevat usein:" },
  "ben.5.li1":        { en: "A lighter mood", fi: "Kevyemmän mielen" },
  "ben.5.li2":        { en: "More positivity", fi: "Enemmän positiivisuutta" },
  "ben.5.li3":        { en: "A refreshed mindset", fi: "Virkistyneen mielen" },

  "ben.6.title":      { en: "Stress Doesn't Build Up as Easily", fi: "Stressi ei kasaudu yhtä helposti" },
  "ben.6.desc":       { en: "Regular massage helps prevent tension from accumulating over time.", fi: "Säännöllinen hieronta auttaa estämään jännityksen kasautumista ajan myötä." },
  "ben.6.label":      { en: "This encourages:", fi: "Tämä edistää:" },
  "ben.6.li1":        { en: "Healthier work habits", fi: "Terveellisempiä työtapoja" },
  "ben.6.li2":        { en: "Better stress management", fi: "Parempaa stressinhallintaa" },
  "ben.6.li3":        { en: "A more balanced workday", fi: "Tasapainoisempaa työpäivää" },

  "ben.7.title":      { en: "Employees Feel Cared For", fi: "Työntekijät tuntevat itsensä arvostetuiksi" },
  "ben.7.desc":       { en: "Offering massage shows that the company values its people. This strengthens team culture and boosts morale.", fi: "Hieronnan tarjoaminen osoittaa, että yritys arvostaa ihmisiään. Tämä vahvistaa tiimikulttuuria ja nostaa työmoraalia." },

  "ben.why.title":    { en: "Why These Benefits Matter at Work", fi: "Miksi nämä hyödyt ovat tärkeitä työssä" },
  "ben.why.text":     { en: "Short, fully clothed, office-friendly massage sessions are one of the simplest ways to support employee wellbeing. They require no special equipment, no undressing and no disruption to the workday — just a calm moment that makes everything feel lighter.", fi: "Lyhyet, vaatteet päällä tehtävät, toimistoystävälliset hierontahetket ovat yksi yksinkertaisimmista tavoista tukea työntekijöiden hyvinvointia. Ne eivät vaadi erikoisvälineitä, riisuutumista tai häiriötä työpäivään — vain rauhallisen hetken, joka saa kaiken tuntumaan kevyemmältä." },
  "ben.cta.title":    { en: "Bring These Benefits to Your Workplace", fi: "Tuo nämä hyödyt työpaikallesi" },
  "ben.cta.text":     { en: "Hills Wellness offers head, foot and chair relaxation massage sessions for offices in Tampere.", fi: "Hills Wellness tarjoaa pää-, jalka- ja tuolihierontaa toimistoille Tampereella." },
};

/* ── Engine ──────────────────────────────────────────────────────────── */
function saveLang(lang) {
  try { document.cookie = 'ww-lang=' + lang + ';path=/;max-age=31536000;SameSite=Lax'; } catch(e) {}
}

function getSavedLang() {
  try {
    const m = document.cookie.match(/(?:^|;\s*)ww-lang=([^;]*)/);
    return m ? m[1] : null;
  } catch(e) { return null; }
}

let currentLang = 'en';

function setLang(lang) {
  currentLang = lang;
  saveLang(lang);
  document.documentElement.setAttribute('lang', lang);

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[key] && translations[key][lang]) {
      el.innerHTML = translations[key][lang];
    }
  });

  // Update toggle button states
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('lang-btn--active', btn.getAttribute('data-lang') === lang);
  });
}

function initI18n() {
  const saved = getSavedLang() || 'en';
  setLang(saved);

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      setLang(btn.getAttribute('data-lang'));
    });
  });
}

// Auto-init
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initI18n);
} else {
  initI18n();
}
