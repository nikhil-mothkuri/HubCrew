/**
 * HubCrew Talent Solutions — Interactive Website Engine
 * Version 2.0 (Revamp with confirmed inputs)
 * Official Email: rini@hubcrewtalent.com
 */

// ==========================================================================
// 1. Central Configuration & CMS Data Store
// ==========================================================================

const HUBCREW_CONFIG = {
  officialEmail: 'rini@hubcrewtalent.com',
  whatsappNumber: '', // Set when HubCrew provides number, e.g. '919876543210'
  calendarBookingUrl: '', // Set when HubCrew provides calendar link
  addressLines: [
    'Hubcrew Talent Solutions LLP',
    'Bridge Paramount, Musheerabad',
    'Hyderabad 500020, Telangana, India'
  ],
  llpin: 'ACZ-1901',

  // Social & Job-Board Profiles (Section 8)
  // An icon renders only when its URL is filled; if empty, the block is cleanly hidden.
  socialProfiles: {
    linkedin: '',
    instagram: '',
    youtube: '',
    facebook: '',
    twitter: '',
    google_business: ''
  },
  jobBoards: {
    naukri: '',
    indeed: '',
    foundit: '',
    linkedin_jobs: '',
    wellfound: '',
    cutshort: '',
    instahyre: '',
    hirist: '',
    glassdoor: '',
    ambitionbox: '',
    brightermonday: '',
    jobberman: '',
    jobstreet: '',
    jobsdb: '',
    glints: ''
  }
};

// 6 Hiring Stages
const STAGES = [
  { name: 'Sourcing', desc: 'Multi-channel active search and talent mapping.', output: 'Shortlist pool' },
  { name: 'Screening', desc: 'Technical and cultural calibration against scorecards.', output: 'Calibrated shortlist' },
  { name: 'Interviewing', desc: 'Calendar coordination and candidate follow-through.', output: 'Interview dossiers' },
  { name: 'Offer', desc: 'Compensation benchmarking and negotiation closure.', output: 'Offer letter signed' },
  { name: 'Onboarding', desc: 'Verification hand-off and first-day readiness.', output: 'Day-1 readiness' },
  { name: 'Probation', desc: 'Scheduled check-ins until confirmed hire.', output: 'Confirmed hire' }
];

// 8 Service Units (Grouped into Core Hiring vs Growth Add-ons)
const SERVICES_DATA = [
  // Core Hiring (Available now)
  {
    id: 'rpo',
    group: 'core',
    status: 'Available now',
    isLive: true,
    title: 'RPO: End-to-end recruitment',
    tagline: 'Our core, always-on talent delivery engine.',
    bullets: [
      'Sourcing, screening and interview scheduling',
      'Offer negotiation and day-1 onboarding',
      'Probation tracking through to confirmation'
    ],
    bestFor: 'Startups, MSMEs, corporates, and agencies',
    model: 'Success fee per hire or monthly RPO retainer',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`
  },

  // Growth Add-ons (Coming soon)
  {
    id: 'contract',
    group: 'growth',
    status: 'Coming soon',
    isLive: false,
    title: 'Contract-to-hire & recruiter pods',
    tagline: 'Flexible capacity without fixed headcount risk.',
    bullets: [
      'Temp-to-perm conversion workflows',
      'Dedicated recruiter pod deployment',
      'Project-based surge tech hiring'
    ],
    bestFor: 'High-growth startups and scaling teams',
    model: 'Monthly retainer or billing markup',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`
  },
  {
    id: 'bgv',
    group: 'growth',
    status: 'Coming soon',
    isLive: false,
    title: 'Background verification',
    tagline: 'Compliance-grade checks, bundled with hiring.',
    bullets: [
      'Employment, education, identity & address verification',
      'Civil and criminal record checks',
      'Executive reference checks for senior hires'
    ],
    bestFor: 'All growth segments & regulated enterprises',
    model: 'Per check or bundled retainer',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 11 12 14 22 4"/></svg>`
  },
  {
    id: 'branding',
    group: 'growth',
    status: 'Coming soon',
    isLive: false,
    title: 'Employer branding',
    tagline: 'Win the talent you want to hire.',
    bullets: [
      'Career page content and EVP positioning',
      'Social hiring campaigns across regional corridors',
      'Candidate experience journey design'
    ],
    bestFor: 'Startups and scale-ups building employer brand',
    model: 'Project fee or quarterly retainer',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`
  },
  {
    id: 'search',
    group: 'growth',
    status: 'Coming soon',
    isLive: false,
    title: 'Executive & leadership search',
    tagline: 'Confidential, high-touch leadership hiring.',
    bullets: [
      'Retained CXO, VP, and Director search',
      'Market mapping and compensation benchmarking',
      'Leadership succession advisory'
    ],
    bestFor: 'Boutique firms, corporates, and MNCs',
    model: 'Staged retained search fee',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><path d="M11 8v6"/><path d="M8 11h6"/></svg>`
  },
  {
    id: 'hr',
    group: 'growth',
    status: 'Coming soon',
    isLive: false,
    title: 'HR consulting & documentation',
    tagline: 'HR backbone for teams without an HR function.',
    bullets: [
      'Policy manuals: leave, POSH, remote work',
      'Offer and appointment letter templates',
      'Labour-code compliance advisory'
    ],
    bestFor: 'MSMEs and early-stage startups',
    model: 'Project fee or advisory retainer',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`
  },
  {
    id: 'training',
    group: 'growth',
    status: 'Coming soon',
    isLive: false,
    title: 'Corporate training',
    tagline: 'Build hiring and people capability in-house.',
    bullets: [
      'Candidate onboarding frameworks',
      'Interviewer and hiring manager calibration',
      'Talent acquisition process training'
    ],
    bestFor: 'Corporates and scaling businesses',
    model: 'Per programme fee',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`
  },
  {
    id: 'marketplace',
    group: 'growth',
    status: 'Coming soon',
    isLive: false,
    title: 'Talent marketplace',
    tagline: 'Self-serve job posting and candidate discovery.',
    bullets: [
      'Curated talent profiles across India, Africa & SEA',
      'Verified tech candidate shortlists',
      'Direct employer connection portal'
    ],
    bestFor: 'All growth segments & active employers',
    model: 'Subscription or listing fee',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`
  }
];

// Helper shorthand
const $ = (id) => document.getElementById(id);

// Lifecycle Picker State
let startStage = 0;
let endStage = 5;
let isPickingEnd = false;
let currentScope = 'Full-cycle bundle: Sourcing to Probation';

// ==========================================================================
// 2. Lifecycle Initialization
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  initCleanRoutingRedirect();
  initMobileNav();
  initLifecyclePicker();
  renderDynamicServices();
  initContactForm();
  renderFindUsOnFooter();
  initFloatingWhatsApp();
  highlightActiveNav();
});

// ==========================================================================
// 3. Clean Routing & Link Fallbacks
// ==========================================================================

function initCleanRoutingRedirect() {
  // If a visitor arrives via legacy hash e.g. #services or #contact, redirect cleanly
  const hash = location.hash ? location.hash.slice(1).toLowerCase() : '';
  const hashRedirects = {
    'home': '/',
    'services': '/services',
    'clients': '/who-we-serve',
    'how': '/how-we-work',
    'about': '/about',
    'contact': '/contact'
  };

  if (hash && hashRedirects[hash]) {
    const targetUrl = hashRedirects[hash];
    if (location.pathname !== targetUrl && location.pathname !== targetUrl + '.html') {
      window.location.replace(targetUrl);
    }
  }

  // Handle local file protocol fallbacks
  if (location.protocol === 'file:') {
    document.querySelectorAll('a[href^="/"]').forEach(link => {
      const path = link.getAttribute('href');
      if (path === '/') {
        link.setAttribute('href', 'index.html');
      } else {
        const cleanName = path.replace(/^\//, '').replace(/\/$/, '');
        link.setAttribute('href', cleanName + '.html');
      }
    });
  }
}

function highlightActiveNav() {
  const currentPath = location.pathname.replace(/\/$/, '').toLowerCase() || '/';
  
  const pageNavMap = {
    '/': ['/', '/index', '/index.html'],
    '/services': ['/services', '/services.html'],
    '/who-we-serve': ['/who-we-serve', '/who-we-serve.html'],
    '/how-we-work': ['/how-we-work', '/how-we-work.html'],
    '/about': ['/about', '/about.html'],
    '/contact': ['/contact', '/contact.html']
  };

  document.querySelectorAll('#nav a, #mobileNavDrawer a').forEach(link => {
    const href = link.getAttribute('href').replace(/\/$/, '').toLowerCase();
    let isActive = false;

    for (const [key, paths] of Object.entries(pageNavMap)) {
      if (paths.includes(currentPath) && paths.includes(href)) {
        isActive = true;
        break;
      }
    }

    if (isActive) {
      link.setAttribute('aria-current', 'page');
      link.classList.add('active');
    } else {
      link.removeAttribute('aria-current');
      link.classList.remove('active');
    }
  });
}

// ==========================================================================
// 4. Mobile Navigation Drawer
// ==========================================================================

function initMobileNav() {
  const toggleBtn = $('mobileNavToggle');
  const drawer = $('mobileNavDrawer');
  const backdrop = $('navBackdrop');

  function closeDrawer() {
    if (!drawer) return;
    drawer.classList.remove('open');
    if (toggleBtn) {
      toggleBtn.classList.remove('open');
      toggleBtn.setAttribute('aria-expanded', 'false');
    }
    if (backdrop) backdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  function openDrawer() {
    if (!drawer) return;
    drawer.classList.add('open');
    if (toggleBtn) {
      toggleBtn.classList.add('open');
      toggleBtn.setAttribute('aria-expanded', 'true');
    }
    if (backdrop) backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  if (toggleBtn && drawer) {
    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (drawer.classList.contains('open')) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });

    if (backdrop) {
      backdrop.addEventListener('click', closeDrawer);
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && drawer.classList.contains('open')) {
        closeDrawer();
      }
    });

    drawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        closeDrawer();
      });
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 960 && drawer.classList.contains('open')) {
        closeDrawer();
      }
    });
  }
}

// ==========================================================================
// 5. Interactive Lifecycle Scope Picker (Home)
// ==========================================================================

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
    lcgoBtn.addEventListener('click', (e) => {
      const scopeVal = `${STAGES[startStage].name} to ${STAGES[endStage].name}`;
      try {
        sessionStorage.setItem('hubcrew_selected_scope', scopeVal);
      } catch (err) {}
      
      // Navigate to Contact with prefilled query param
      const targetUrl = (location.protocol === 'file:') ? 'contact.html' : '/contact';
      window.location.href = `${targetUrl}?scope=${encodeURIComponent(scopeVal)}`;
      e.preventDefault();
    });
  }
}

function drawLifecycleTrack() {
  const trk = $('trk');
  const out = $('out');
  if (!trk || !out) return;

  const count = endStage - startStage + 1;

  trk.innerHTML = STAGES.map((s, idx) => {
    const inRange = idx >= startStage && idx <= endStage;
    const isStart = idx === startStage;
    const isEnd = idx === endStage;

    let classes = ['trk-btn'];
    if (inRange) classes.push('in');
    if (isStart) classes.push('start-stage');
    if (isEnd) classes.push('end');

    return `
      <button type="button" class="${classes.join(' ')}" data-i="${idx}" aria-label="Stage ${idx + 1}: ${s.name}">
        <span class="trk-num">0${idx + 1}</span>
        <span class="trk-title">${s.name}</span>
      </button>
    `;
  }).join('');

  let bundleType = 'Full-cycle bundle';
  let pricingHint = 'Usually a success fee per hire or a monthly RPO retainer.';

  if (count === 1) {
    bundleType = 'Single-stage service';
    pricingHint = 'Priced per unit for focused fast-track delivery.';
  } else if (count < 6) {
    bundleType = 'Focused bundle';
    pricingHint = 'Flexible package tailored to your exact hiring scope.';
  }

  currentScope = `${bundleType}: ${STAGES[startStage].name} to ${STAGES[endStage].name}`;

  out.innerHTML = `
    <div class="out-title">
      <span class="out-badge">${count} of 6 Stages</span>
      ${currentScope}
    </div>
    <div class="out-detail">${pricingHint}</div>
  `;
}

// ==========================================================================
// 6. Dynamic Services Rendering & Accordion Details (Services Page)
// ==========================================================================

function renderDynamicServices() {
  const coreEl = $('servicesCoreGrid');
  const growthEl = $('servicesGrowthGrid');

  if (!coreEl && !growthEl) return;

  const coreServices = SERVICES_DATA.filter(s => s.group === 'core');
  const growthServices = SERVICES_DATA.filter(s => s.group === 'growth');

  if (coreEl) {
    coreEl.innerHTML = coreServices.map(renderServiceCardHtml).join('');
  }
  if (growthEl) {
    growthEl.innerHTML = growthServices.map(renderServiceCardHtml).join('');
  }

  // Bind click-to-expand details
  document.querySelectorAll('.service-details-toggle').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const parentCard = btn.closest('.service-card-interactive');
      const targetContent = parentCard ? parentCard.querySelector('.service-expanded-content') : null;
      if (targetContent) {
        const isShown = targetContent.classList.toggle('show');
        btn.setAttribute('aria-expanded', isShown ? 'true' : 'false');
        btn.querySelector('.toggle-label').textContent = isShown ? 'Hide details' : 'View details';
      }
    });
  });
}

function renderServiceCardHtml(s) {
  const badgeClass = s.isLive ? 'tag n' : 'tag';
  const cardClass = s.isLive ? 'c service-card-interactive' : 'c service-card-interactive coming-soon';

  const bulletsHtml = s.bullets.map(b => `<li>${b}</li>`).join('');

  return `
    <div class="${cardClass}" id="card-${s.id}">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
        <span class="${badgeClass}">${s.status}</span>
        <div style="width:30px; height:30px; color:var(--cobalt);">${s.icon}</div>
      </div>
      <h3>${s.title}</h3>
      <p style="margin-bottom:12px;">${s.tagline}</p>
      
      <button type="button" class="service-details-toggle" aria-expanded="false" aria-controls="details-${s.id}">
        <span class="toggle-label">View details</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
      </button>

      <div class="service-expanded-content" id="details-${s.id}">
        <ul style="padding-left:18px; margin:8px 0 12px;">${bulletsHtml}</ul>
        <div style="font-size:0.8rem; color:var(--ink-secondary); padding-top:8px; border-top:1px dashed var(--line);">
          <div style="margin-bottom:4px;"><b>Best for:</b> ${s.bestFor}</div>
          <div><b>Commercial:</b> ${s.model}</div>
        </div>
      </div>
    </div>
  `;
}

// ==========================================================================
// 7. Contact Page / "Start a Hiring Brief" Engine
// ==========================================================================

function initContactForm() {
  const form = $('hiringBriefForm');
  const submitBtn = $('sendBriefBtn');
  const okMsg = $('formStatusMsg');
  const scopeChips = $('selectedScopeChips');
  const scopeHiddenInput = $('hiddenScopeInput');
  const needSelect = $('needSelect');

  // 1. Pre-fill Scope from URL query param or sessionStorage
  const urlParams = new URLSearchParams(window.location.search);
  const scopeParam = urlParams.get('scope') || sessionStorage.getItem('hubcrew_selected_scope');

  if (scopeParam) {
    if (scopeChips) scopeChips.textContent = scopeParam;
    if (scopeHiddenInput) scopeHiddenInput.value = scopeParam;
    
    // Auto-select dropdown match
    if (needSelect) {
      if (scopeParam.includes('Sourcing to Probation')) {
        needSelect.value = 'Monthly RPO';
      } else {
        needSelect.value = 'Success-fee hiring';
      }
    }
  }

  // 2. Interactive Location Multi-Select Chips
  const locChips = document.querySelectorAll('.loc-chip');
  const locHiddenInput = $('hiddenLocationInput');
  
  locChips.forEach(chip => {
    chip.addEventListener('click', () => {
      chip.classList.toggle('selected');
      const selected = Array.from(document.querySelectorAll('.loc-chip.selected')).map(c => c.dataset.loc);
      if (locHiddenInput) {
        locHiddenInput.value = selected.join(', ');
      }
    });
  });

  // 3. Form Validation & Submission
  if (submitBtn) {
    submitBtn.addEventListener('click', (e) => {
      e.preventDefault();
      
      const name = $('briefName') ? $('briefName').value.trim() : '';
      const email = $('briefEmail') ? $('briefEmail').value.trim() : '';
      const company = $('briefCompany') ? $('briefCompany').value.trim() : '';
      const need = needSelect ? needSelect.value : '';
      const roles = $('briefRoles') ? $('briefRoles').value.trim() : '';
      const honeypot = $('briefHoneypot') ? $('briefHoneypot').value : '';

      // Honeypot spam protection
      if (honeypot) {
        console.warn('Spam detected via honeypot.');
        return;
      }

      if (!name) {
        showFormError('Please enter your name.');
        $('briefName')?.focus();
        return;
      }

      if (!email || email.indexOf('@') <= 0 || email.indexOf('.') <= 0) {
        showFormError('Please enter a valid work email.');
        $('briefEmail')?.focus();
        return;
      }

      if (!company) {
        showFormError('Please enter your company name.');
        $('briefCompany')?.focus();
        return;
      }

      // Track conversion event (Google Analytics & LinkedIn Insight tag)
      try {
        if (typeof gtag === 'function') {
          gtag('event', 'generate_lead', {
            'event_category': 'Brief',
            'event_label': need
          });
        }
        if (window.lintrk) {
          window.lintrk('track', { conversion_id: 12345 });
        }
      } catch (err) {}

      // Display official inline confirmation
      if (okMsg) {
        okMsg.innerHTML = `
          <div style="background:#ECFDF5; border:1px solid #10B981; border-radius:8px; padding:16px 20px; color:#065F46; font-size:0.95rem; line-height:1.5;">
            <b>✓ Thanks, ${name}.</b> We have received your brief and will reply to <b>${email}</b> within one business day.
          </div>
        `;
      }

      // Reset form
      if (form) form.reset();
      document.querySelectorAll('.loc-chip.selected').forEach(c => c.classList.remove('selected'));
      if (submitBtn) submitBtn.disabled = true;
    });
  }

  function showFormError(msg) {
    if (okMsg) {
      okMsg.innerHTML = `
        <div style="background:#FEF2F2; border:1px solid #DC2626; border-radius:8px; padding:12px 16px; color:#991B1B; font-size:0.9rem;">
          ${msg}
        </div>
      `;
    }
  }
}

// ==========================================================================
// 8. Footer "Find us on" Social & Job-Board Profiles (Section 8)
// ==========================================================================

function renderFindUsOnFooter() {
  const container = $('findUsOnContainer');
  if (!container) return;

  // Check if any profile is populated
  const activeSocials = Object.entries(HUBCREW_CONFIG.socialProfiles).filter(([_, url]) => Boolean(url));
  const activeJobBoards = Object.entries(HUBCREW_CONFIG.jobBoards).filter(([_, url]) => Boolean(url));

  // If no profiles are active yet, gracefully hide the block as per Section 8.3
  if (activeSocials.length === 0 && activeJobBoards.length === 0) {
    container.style.display = 'none';
    return;
  }

  container.style.display = 'block';
  let html = `<div class="find-us-block">`;

  if (activeSocials.length > 0) {
    html += `
      <div class="find-us-sublabel">Social</div>
      <div class="find-us-grid">
        ${activeSocials.map(([platform, url]) => `
          <a href="${url}" target="_blank" rel="noopener noreferrer" class="find-icon-btn" aria-label="HubCrew on ${platform}">
            ${getPlatformIcon(platform)}
          </a>
        `).join('')}
      </div>
    `;
  }

  if (activeJobBoards.length > 0) {
    html += `
      <div class="find-us-sublabel">Hiring Platforms</div>
      <div class="find-us-grid">
        ${activeJobBoards.map(([board, url]) => `
          <a href="${url}" target="_blank" rel="noopener noreferrer" class="find-icon-btn" aria-label="HubCrew on ${board}">
            ${getPlatformIcon(board)}
          </a>
        `).join('')}
      </div>
    `;
  }

  html += `</div>`;
  container.innerHTML = html;
}

function getPlatformIcon(platform) {
  // Line SVG icons for platforms
  const icons = {
    linkedin: `<svg viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>`,
    instagram: `<svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>`
  };
  return icons[platform] || `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>`;
}

// ==========================================================================
// 9. Floating WhatsApp Chat Button (Section 8.3)
// ==========================================================================

function initFloatingWhatsApp() {
  if (!HUBCREW_CONFIG.whatsappNumber) return; // Shown only once supplied

  const btn = document.createElement('a');
  btn.className = 'whatsapp-float-btn';
  btn.href = `https://wa.me/${HUBCREW_CONFIG.whatsappNumber}?text=${encodeURIComponent("Hi HubCrew, I'd like to discuss hiring.")}`;
  btn.target = '_blank';
  btn.rel = 'noopener noreferrer';
  btn.setAttribute('aria-label', 'Chat with HubCrew on WhatsApp');
  btn.innerHTML = `
    <svg viewBox="0 0 24 24">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
    </svg>
  `;
  document.body.appendChild(btn);
}
