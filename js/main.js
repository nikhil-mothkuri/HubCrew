/**
 * Hubcrew Talent Solutions - Interactive Website Engine
 * Preserves 100% of sample content, lifecycle scope picker, and routing.
 */

// Core Data Specifications from Sample Document
const STAGES = [
  ["Sourcing", "Multi-channel search across job boards, referrals and passive outreach."],
  ["Screening", "Technical and cultural pre-screens against scorecards calibrated with you."],
  ["Interview scheduling", "We coordinate candidate and panel calendars and follow through."],
  ["Offer and negotiation", "Compensation benchmarking, expectation alignment and closure support."],
  ["Joining and onboarding", "Documentation, verification hand-off and first-day readiness."],
  ["Probation tracking", "Check-ins until the hire is confirmed."]
];

const BUSINESS_UNITS = [
  [
    "RPO: end-to-end recruitment",
    "Our core, always-on service.",
    ["Sourcing, screening and scheduling", "Offer negotiation and onboarding", "Probation tracking to confirmation"],
    "Startups, MSMEs, corporates, agencies",
    "Success fee per hire or monthly retainer",
    1
  ],
  [
    "Contract-to-hire and talent-as-a-service",
    "Flexible capacity without fixed headcount risk.",
    ["Temp-to-perm conversion", "Dedicated recruiter pod", "Project-based surge hiring"],
    "Startups and corporates",
    "Monthly retainer or billing markup",
    2
  ],
  [
    "Background verification",
    "Compliance-grade checks, bundled with hiring.",
    ["Employment, education, identity, address", "Criminal and civil record checks", "Reference checks for senior hires"],
    "All segments",
    "Per check or bundled",
    2
  ],
  [
    "Employer branding",
    "Win the talent you want to hire.",
    ["Career page content and EVP", "Social hiring campaigns", "Candidate experience design"],
    "Startups and scale-ups",
    "Project or quarterly retainer",
    2
  ],
  [
    "Executive and leadership search",
    "Confidential, high-touch hiring.",
    ["Retained CXO, VP, Director search", "Market mapping, pay benchmarking", "Succession advisory"],
    "Boutique firms, corporates, MNCs",
    "Staged retained fee",
    3
  ],
  [
    "HR consulting and documentation",
    "HR backbone for teams without an HR function.",
    ["Policy manuals: leave, POSH, WFH", "Offer and appointment letters", "Labour-code compliance advice"],
    "MSMEs and startups",
    "Project fee or advisory retainer",
    3
  ],
  [
    "Corporate training",
    "Build hiring and people capability in-house.",
    ["Onboarding programmes", "Interviewer and manager training", "HR process training"],
    "Corporates and scale-ups",
    "Per programme",
    3
  ],
  [
    "Talent marketplace",
    "Self-serve job posting and candidate discovery.",
    ["Planned digital marketplace for employers and candidates"],
    "All segments",
    "Subscription or listing fee",
    4
  ]
];

const SEGMENTS = [
  ["MSMEs", "Dependable, affordable hiring without an in-house TA team."],
  ["Startups and scale-ups", "Speed and tech sourcing for founding and scaling teams."],
  ["Boutique and professional firms", "Confidential hiring for niche and leadership roles."],
  ["Large corporates", "Volume hiring with SLAs across locations."],
  ["Multinational companies", "Cross-border delivery in India, Africa and Southeast Asia."],
  ["Staffing agencies", "An outsourced partner for overflow and niche tech mandates."]
];

const GEOGRAPHIES = [
  ["India", "Primary base, Hyderabad-anchored, national coverage."],
  ["Africa", "Rising tech and GCC hiring across Sub-Saharan corridors."],
  ["Indonesia", "High-growth digital economy."],
  ["Thailand", "Regional tech and manufacturing demand."],
  ["Malaysia", "GCC and shared-services hiring corridor."]
];

// Helper shorthand
const $ = (id) => document.getElementById(id);

// Lifecycle Picker State
let startStage = 0;
let endStage = 5;
let isPickingEnd = false;
let currentScope = '';

document.addEventListener('DOMContentLoaded', () => {
  // Clear any previously stored dark theme preference to lock in White & Cobalt
  try {
    localStorage.removeItem('hubcrew-theme');
    document.documentElement.removeAttribute('data-theme');
  } catch (e) {}

  initMobileNav();
  renderContent();
  initLifecyclePicker();
  initContactForm();
  initRoute();
});

/* ==========================================================================
   Mobile Navigation Drawer
   ========================================================================== */
function initMobileNav() {
  const toggleBtn = $('mobileNavToggle');
  const drawer = $('mobileNavDrawer');
  
  if (toggleBtn && drawer) {
    toggleBtn.addEventListener('click', () => {
      const isOpen = drawer.classList.toggle('open');
      toggleBtn.setAttribute('aria-expanded', isOpen);
    });

    drawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        drawer.classList.remove('open');
        toggleBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }
}

/* ==========================================================================
   Content Rendering (Segments, Geographies, Stages, Services)
   ========================================================================== */
function renderContent() {
  // Render Client Segments
  const segEl = $('seg');
  if (segEl) {
    segEl.innerHTML = SEGMENTS.map(([title, desc]) => `
      <div class="c">
        <h3>${title}</h3>
        <p>${desc}</p>
      </div>
    `).join('');
  }

  // Render Geographies
  const geoEl = $('geo');
  if (geoEl) {
    geoEl.innerHTML = GEOGRAPHIES.map(([country, note]) => `
      <div class="c">
        <h3>${country}</h3>
        <p>${note}</p>
      </div>
    `).join('');
  }

  // Render Process Stages (How We Work)
  const stgEl = $('stg');
  if (stgEl) {
    stgEl.innerHTML = STAGES.map(([title, desc], idx) => `
      <div class="st">
        <i>${idx + 1}</i>
        <div>
          <h3>${title}</h3>
          <p>${desc}</p>
        </div>
      </div>
    `).join('');
  }

  // Render Business Units (Services)
  renderServices(BUSINESS_UNITS);

  // Populate Contact Form Dropdown
  const scSelect = $('sc');
  if (scSelect && scSelect.options.length === 0) {
    const options = [
      'RPO: full hiring lifecycle',
      'Part of the hiring cycle',
      'Contract-to-hire or recruiter pod',
      'Executive search',
      'Verification, HR or branding',
      'Not sure yet'
    ];
    scSelect.innerHTML = options.map(opt => `<option value="${opt}">${opt}</option>`).join('');
  }
}

function renderServices(units) {
  const busEl = $('bus');
  if (!busEl) return;

  busEl.innerHTML = units.map(b => {
    const isLive = b[5] === 1;
    const badgeText = isLive ? 'Available now' : 'Coming soon';
    const badgeClass = isLive ? 'tag n' : 'tag';
    const bulletsHtml = b[2].map(bullet => `<li>${bullet}</li>`).join('');

    return `
      <div class="c">
        <span class="${badgeClass}">${badgeText}</span>
        <h3>${b[0]}</h3>
        <p>${b[1]}</p>
        <ul>${bulletsHtml}</ul>
        <div class="c-meta">
          <p><b>Best for:</b> ${b[3]}</p>
          <p><b>Pricing:</b> ${b[4]}</p>
        </div>
      </div>
    `;
  }).join('');
}

/* ==========================================================================
   Interactive Lifecycle Picker
   ========================================================================== */
function initLifecyclePicker() {
  const trk = $('trk');
  if (!trk) return;

  drawLifecycleTrack();

  trk.addEventListener('click', (ev) => {
    const btn = ev.target.closest('.trk-btn');
    if (!btn) return;
    const idx = parseInt(btn.dataset.i, 10);

    if (!isPickingEnd) {
      startStage = idx;
      endStage = idx;
      isPickingEnd = true;
    } else {
      if (idx >= startStage) {
        endStage = idx;
      } else {
        startStage = idx;
      }
      isPickingEnd = false;
    }
    drawLifecycleTrack();
  });

  const lcgoBtn = $('lcgo');
  if (lcgoBtn) {
    lcgoBtn.addEventListener('click', () => {
      const rlTextarea = $('rl');
      const scSelect = $('sc');
      
      if (rlTextarea) {
        rlTextarea.value = `Scope: ${currentScope}\n` + (rlTextarea.value ? rlTextarea.value.replace(/^Scope: .*\n?/, '') : '');
      }

      if (scSelect) {
        const count = endStage - startStage + 1;
        scSelect.value = count === 6 ? 'RPO: full hiring lifecycle' : 'Part of the hiring cycle';
      }
    });
  }
}

function drawLifecycleTrack() {
  const trk = $('trk');
  const out = $('out');
  if (!trk || !out) return;

  const count = endStage - startStage + 1;

  // Render 6 Stage Buttons
  trk.innerHTML = STAGES.map(([name], idx) => {
    const inRange = idx >= startStage && idx <= endStage;
    const isStart = idx === startStage;
    const isEnd = idx === endStage;
    
    let classes = ['trk-btn'];
    if (inRange) classes.push('in');
    if (isStart) classes.push('start-stage');
    if (isEnd) classes.push('end');

    return `
      <button type="button" class="${classes.join(' ')}" data-i="${idx}" aria-label="Stage ${idx + 1}: ${name}">
        <span class="trk-num">0${idx + 1}</span>
        <span class="trk-title">${name}</span>
      </button>
    `;
  }).join('');

  // Calculate scope bundle type and commercial description
  let bundleType = 'Full-cycle bundle';
  let pricingHint = 'Usually a success fee per hire or a monthly RPO retainer.';

  if (count === 1) {
    bundleType = 'Single-stage service';
    pricingHint = 'Priced per unit for a quick win.';
  } else if (count < 4) {
    bundleType = 'Focused bundle';
    pricingHint = 'Usually priced per hire on success.';
  }

  currentScope = `${bundleType}: ${STAGES[startStage][0]} to ${STAGES[endStage][0]}`;

  out.innerHTML = `
    <div class="out-title">
      <span class="out-badge">${count} of 6 Stages</span>
      ${currentScope}
    </div>
    <div class="out-detail">${pricingHint}</div>
  `;
}

/* ==========================================================================
   Contact Form Validation & State
   ========================================================================== */
function initContactForm() {
  const goBtn = $('go');
  const okMsg = $('ok');
  const emailInput = $('e');
  const nameInput = $('n');
  const companyInput = $('co');

  if (!goBtn || !okMsg) return;

  goBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const email = emailInput ? emailInput.value.trim() : '';
    const name = nameInput ? nameInput.value.trim() : '';

    if (!email || email.indexOf('@') <= 0 || email.indexOf('.') <= 0) {
      okMsg.textContent = 'Please enter a valid work email so we can reply.';
      okMsg.style.color = '#DC2626';
      if (emailInput) emailInput.focus();
      return;
    }

    const greeting = name ? `Thanks, ${name}.` : 'Thanks.';
    okMsg.innerHTML = `<span style="color:var(--goldt)">✓ ${greeting} We have received your brief and will reply within one business day with a scoping call proposal.</span>`;
    
    // Clear inputs on success
    if (emailInput) emailInput.value = '';
    if (nameInput) nameInput.value = '';
    if (companyInput) companyInput.value = '';
  });
}

/* ==========================================================================
   Single Page Route Switcher via URL Hash
   ========================================================================== */
function initRoute() {
  window.addEventListener('hashchange', handleRoute);
  handleRoute();
}

function handleRoute() {
  const hash = (location.hash || '#home').slice(1);
  const targetId = document.querySelector(`.pg#${hash}`) ? hash : 'home';

  // Toggle visible page section
  document.querySelectorAll('.pg').forEach(pg => {
    const isActive = pg.id === targetId;
    pg.classList.toggle('on', isActive);
  });

  // Update navigation link aria-current indicators
  document.querySelectorAll('#nav a, #mobileNavDrawer a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === `#${targetId}`) {
      link.setAttribute('aria-current', 'page');
    } else {
      link.removeAttribute('aria-current');
    }
  });

  // Scroll to top of window smoothly on page transition
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
