/* ============================================================
   SCRIPT PRINCIPAL — Syllabus MG2PSM
   ============================================================ */

// ---------- MENU MOBILE ----------
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');

menuToggle?.addEventListener('click', () => {
  menuToggle.classList.toggle('open');
  nav.classList.toggle('open');
});

// Ferme le menu au clic sur un lien
nav?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    menuToggle.classList.remove('open');
    nav.classList.remove('open');
  });
});

// ---------- RENDU DES UE ----------
const ueList = document.getElementById('ueList');
const ueEmpty = document.getElementById('ueEmpty');
const searchInput = document.getElementById('searchInput');
const filterSemestre = document.getElementById('filterSemestre');
const filterParcours = document.getElementById('filterParcours');

/**
 * Génère le HTML d'une carte UE
 */
function createUECard(ue) {
  const badgesHTML = ue.applications
    .map(app => {
      let cls = 'badge--autre';
      if (app.toLowerCase().includes('pharma')) cls = 'badge--pharma';
      else if (app.toLowerCase().includes('agro')) cls = 'badge--agro';
      return `<span class="badge ${cls}">${app}</span>`;
    })
    .join('');

  const ecueHTML = ue.ecue.map(e => `<li>${e}</li>`).join('');
  const objHTML = ue.objectifsSpecifiques.map(o => `<li>${o}</li>`).join('');

  return `
    <article class="ue-item" data-parcours="${ue.parcours}" data-semestre="${ue.semestre}" data-code="${ue.code}">
      <div class="ue-item__head" role="button" tabindex="0" aria-expanded="false">
        <span class="ue-code">${ue.code}</span>
        <h3 class="ue-item__title">${ue.titre}</h3>
        <span class="ue-credits">${ue.credits} crédits</span>
        <span class="ue-item__toggle" aria-hidden="true">+</span>
      </div>
      <div class="ue-item__body">
        <div class="ue-item__content">
          <div class="ue-meta">
            <span>📅 ${labelSemestre(ue.semestre)}</span>
            <span>⏱️ ${ue.volume}</span>
          </div>

          <h4>Éléments constitutifs (ECUE)</h4>
          <ul>${ecueHTML}</ul>

          <h4>Objectif général</h4>
          <p>${ue.objectifGeneral}</p>

          <h4>Objectifs spécifiques</h4>
          <ul>${objHTML}</ul>

          <h4>Évaluation</h4>
          <p>${ue.evaluation}</p>

          <h4>Applications professionnelles</h4>
          <div class="badges">${badgesHTML}</div>
        </div>
      </div>
    </article>
  `;
}

function labelSemestre(s) {
  return {
    S1: "Semestre 1 — M1",
    S2: "Semestre 2 — M1",
    S3: "Semestre 3 — M2",
    S4: "Semestre 4 — M2"
  }[s] || s;
}

/**
 * Affiche toutes les UE (ou filtrées)
 */
function renderUE(list) {
  if (!list.length) {
    ueList.innerHTML = '';
    ueEmpty.hidden = false;
    return;
  }
  ueEmpty.hidden = true;
  ueList.innerHTML = list.map(createUECard).join('');
  attachToggleHandlers();
}

/**
 * Ajoute le comportement de dépliage
 */
function attachToggleHandlers() {
  ueList.querySelectorAll('.ue-item__head').forEach(head => {
    const handler = () => {
      const item = head.closest('.ue-item');
      const isOpen = item.classList.toggle('open');
      head.setAttribute('aria-expanded', isOpen);
    };
    head.addEventListener('click', handler);
    head.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handler();
      }
    });
  });
}

/**
 * Applique les filtres
 */
function applyFilters() {
  const q = searchInput.value.trim().toLowerCase();
  const sem = filterSemestre.value;
  const parc = filterParcours.value;

  const filtered = SYLLABUS.filter(ue => {
    const matchQ =
      !q ||
      ue.code.toLowerCase().includes(q) ||
      ue.titre.toLowerCase().includes(q) ||
      ue.objectifGeneral.toLowerCase().includes(q);
    const matchSem = !sem || ue.semestre === sem;
    const matchParc = !parc || ue.parcours === parc;
    return matchQ && matchSem && matchParc;
  });

  renderUE(filtered);
}

// ---------- ÉVÉNEMENTS ----------
searchInput?.addEventListener('input', applyFilters);
filterSemestre?.addEventListener('change', applyFilters);
filterParcours?.addEventListener('change', applyFilters);

// ---------- RENDU INITIAL ----------
renderUE(SYLLABUS);

// ---------- SCROLL DOUX (fallback) ----------
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ---------- ANNÉE DYNAMIQUE DANS LE FOOTER ----------
const yearEl = document.querySelector('.footer p');
if (yearEl) {
  yearEl.innerHTML = yearEl.innerHTML.replace('2025', new Date().getFullYear());
}