/**
 * HubCrew Talent Solutions - Modern Apple-Inspired Interactive Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNav();
  initTabs();
  initCalculator();
  initTechRadar();
  initContactForm();
  initModals();
  initScrollEffects();
});

/* ==========================================================================
   Theme Switcher (Apple Light / Space Dark)
   ========================================================================== */
function initTheme() {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const savedTheme = localStorage.getItem('hubcrew-theme');
  
  const currentTheme = savedTheme || (prefersDark ? 'dark' : 'light');
  setTheme(currentTheme);

  // Bind all theme buttons across navigation and floating dock
  const themeButtons = document.querySelectorAll('.theme-segment-btn');
  themeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTheme = btn.getAttribute('data-theme');
      if (targetTheme) {
        setTheme(targetTheme);
      }
    });
  });

  // Listen to system preference changes if user hasn't explicitly set one
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('hubcrew-theme')) {
      setTheme(e.matches ? 'dark' : 'light');
    }
  });
}

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('hubcrew-theme', theme);
  updateThemeButtons(theme);
  updateBrandLogos(theme);
}

function updateThemeButtons(theme) {
  const themeButtons = document.querySelectorAll('.theme-segment-btn');
  themeButtons.forEach(btn => {
    if (btn.getAttribute('data-theme') === theme) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

function updateBrandLogos(theme) {
  const brandLogos = document.querySelectorAll('.brand-logo-img');
  brandLogos.forEach(logo => {
    if (theme === 'dark') {
      logo.src = 'assets/logo-dark.svg';
    } else {
      logo.src = 'assets/logo.svg';
    }
  });
}

/* ==========================================================================
   Navigation & Mobile Menu
   ========================================================================== */
function initNav() {
  const nav = document.querySelector('.site-nav');
  const mobileToggle = document.getElementById('mobileMenuToggle');
  const navLinks = document.getElementById('navLinks');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      const isOpen = navLinks.classList.contains('open');
      mobileToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close menu when clicking on a link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
      });
    });
  }
}

/* ==========================================================================
   7 Business Units Interactive Tabs
   ========================================================================== */
function initTabs() {
  const tabButtons = document.querySelectorAll('.bu-tab-btn');
  const tabPanels = document.querySelectorAll('.bu-tab-panel');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      
      tabButtons.forEach(b => b.classList.remove('active'));
      tabPanels.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetPanel = document.getElementById(targetId);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }
    });
  });
}

/* ==========================================================================
   Interactive Talent Cost & ROI Calculator
   ========================================================================== */
function initCalculator() {
  const hiresSlider = document.getElementById('calcHires');
  const salarySlider = document.getElementById('calcSalary');
  const feeSlider = document.getElementById('calcFee');

  const hiresDisplay = document.getElementById('hiresDisplay');
  const salaryDisplay = document.getElementById('salaryDisplay');
  const feeDisplay = document.getElementById('feeDisplay');

  const savingsDisplay = document.getElementById('calcSavings');
  const daysDisplay = document.getElementById('calcDaysSaved');
  const roiDisplay = document.getElementById('calcRoi');

  if (!hiresSlider || !salarySlider || !feeSlider) return;

  function recalculate() {
    const hires = parseInt(hiresSlider.value, 10);
    const avgSalaryLakhs = parseInt(salarySlider.value, 10); // in INR Lakhs
    const currentFeePct = parseInt(feeSlider.value, 10); // in %

    hiresDisplay.textContent = hires;
    salaryDisplay.textContent = `₹${avgSalaryLakhs} Lakhs`;
    feeDisplay.textContent = `${currentFeePct}%`;

    // Standard agency cost = Hires * (Salary * feePct/100)
    const totalAgencySpend = hires * (avgSalaryLakhs * 100000) * (currentFeePct / 100);
    
    // HubCrew RPO / Optimized model typically reduces cost-per-hire by 38% to 46%
    const estimatedSavingsINR = Math.round(totalAgencySpend * 0.42);
    const savingsInLakhs = (estimatedSavingsINR / 100000).toFixed(1);
    
    // Time to hire reduction (HubCrew averages 22 days saved per role)
    const daysSaved = hires * 18;
    
    // ROI multiplier
    const roiMultiplier = (2.8 + (hires * 0.05)).toFixed(1);

    if (savingsDisplay) savingsDisplay.textContent = `₹${savingsInLakhs} L`;
    if (daysDisplay) daysDisplay.textContent = `${daysSaved}+ Days`;
    if (roiDisplay) roiDisplay.textContent = `${roiMultiplier}x ROI`;
  }

  hiresSlider.addEventListener('input', recalculate);
  salarySlider.addEventListener('input', recalculate);
  feeSlider.addEventListener('input', recalculate);

  recalculate();
}

/* ==========================================================================
   Contact & RFP Form Handling
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('discoveryForm');
  const successBanner = document.getElementById('formSuccessBanner');
  const submitBtn = document.getElementById('submitFormBtn');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const originalBtnText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="spin">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M12 2a10 10 0 0 1 10 10"></path>
      </svg> Connecting with HubCrew...
    `;

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;
      form.reset();
      if (successBanner) {
        successBanner.style.display = 'block';
        successBanner.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }, 1200);
  });
}

/* ==========================================================================
   Digital Business Card & Brand Modal Handlers
   ========================================================================== */
function initModals() {
  const modalBackdrop = document.getElementById('vcardModal');
  const modalTitle = document.getElementById('vcardModalTitle');
  const modalBody = document.getElementById('vcardModalBody');
  const closeModalBtn = document.getElementById('closeVcardModal');

  // Digital card trigger buttons
  const krishnaCardBtn = document.getElementById('krishnaCardBtn');
  const riniCardBtn = document.getElementById('riniCardBtn');

  const vCardData = {
    krishna: {
      name: 'Krishna Saurabh',
      role: 'Co-Founder',
      company: 'HubCrew Talent Solutions LLP',
      email: 'krishna@hubcrewtalent.com',
      location: 'Hyderabad, India',
      phone: '+91 (0) 40-HUBCREW',
      linkedin: 'https://linkedin.com/company/hubcrew',
      bio: 'Pioneering tech staffing, strategic RPO partnerships, and executive search pipelines across India and global enterprises.'
    },
    rini: {
      name: 'Rini Shah Purohit',
      role: 'Co-Founder',
      company: 'HubCrew Talent Solutions LLP',
      email: 'rini@hubcrewtalent.com',
      location: 'Hyderabad, India',
      phone: '+91 (0) 40-HUBCREW',
      linkedin: 'https://linkedin.com/company/hubcrew',
      bio: 'Specializing in HR advisory, talent governance, volume talent ecosystems, and capability hub design.'
    }
  };

  function openVcard(founderKey) {
    const data = vCardData[founderKey];
    if (!data || !modalBackdrop) return;

    modalTitle.textContent = `${data.name} — Digital Business Card`;
    modalBody.innerHTML = `
      <div style="text-align: center; margin-bottom: 24px;">
        <div style="width: 80px; height: 80px; border-radius: 50%; background: var(--accent-gradient); color: white; display: flex; align-items: center; justify-content: center; font-size: 1.8rem; font-weight: 700; margin: 0 auto 12px;">
          ${data.name.split(' ').map(n => n[0]).join('')}
        </div>
        <h3 style="font-size: 1.4rem; font-weight: 700; color: var(--text-primary);">${data.name}</h3>
        <p style="font-size: 0.9rem; font-weight: 600; color: var(--accent-blue); text-transform: uppercase;">${data.role} • ${data.company}</p>
        <p style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 6px;">${data.location}</p>
      </div>

      <div style="display: flex; flex-direction: column; gap: 12px; margin-bottom: 24px;">
        <a href="mailto:${data.email}" class="btn-apple btn-secondary" style="justify-content: flex-start; padding: 12px 16px;">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          ${data.email}
        </a>
        <a href="https://wa.me/?text=Hello%20${encodeURIComponent(data.name)}%2C%20connecting%20regarding%20HubCrew%20Talent%20Solutions" target="_blank" class="btn-apple btn-secondary" style="justify-content: flex-start; padding: 12px 16px; color: #25D366;">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
          WhatsApp Direct Connect
        </a>
      </div>

      <div style="display: flex; gap: 10px;">
        <button id="downloadVcfBtn" class="btn-apple btn-primary" style="flex: 1;">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          Save to Contacts (.vcf)
        </button>
      </div>
    `;

    modalBackdrop.classList.add('active');

    // Attach .vcf generation
    const downloadVcfBtn = document.getElementById('downloadVcfBtn');
    if (downloadVcfBtn) {
      downloadVcfBtn.addEventListener('click', () => {
        downloadVCF(data);
      });
    }
  }

  if (krishnaCardBtn) {
    krishnaCardBtn.addEventListener('click', () => openVcard('krishna'));
  }

  if (riniCardBtn) {
    riniCardBtn.addEventListener('click', () => openVcard('rini'));
  }

  if (closeModalBtn && modalBackdrop) {
    closeModalBtn.addEventListener('click', () => {
      modalBackdrop.classList.remove('active');
    });

    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        modalBackdrop.classList.remove('active');
      }
    });
  }
}

function downloadVCF(data) {
  const vcardContent = `BEGIN:VCARD
VERSION:3.0
N:${data.name.split(' ').reverse().join(';')};;;
FN:${data.name}
ORG:${data.company}
TITLE:${data.role}
EMAIL;TYPE=PREF,INTERNET:${data.email}
ADR;TYPE=WORK:;;Hyderabad;Telangana;;India
URL:https://hubcrewtech.com
NOTE:${data.bio}
END:VCARD`;

  const blob = new Blob([vcardContent], { type: 'text/vcard;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${data.name.replace(/\s+/g, '_')}_HubCrew.vcf`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/* ==========================================================================
   Smooth Scroll Spy
   ========================================================================== */
function initScrollEffects() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPosition = window.scrollY + 120;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

/* ==========================================================================
   Interactive Tech Ecosystem Filter Radar
   ========================================================================== */
function initTechRadar() {
  const filterBtns = document.querySelectorAll('.radar-filter-btn');
  const chips = document.querySelectorAll('.tech-chip');

  if (!filterBtns.length || !chips.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');

      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      chips.forEach(chip => {
        const cat = chip.getAttribute('data-cat');
        if (filter === 'all' || cat === filter) {
          chip.style.display = 'inline-flex';
          chip.style.opacity = '1';
          chip.style.transform = 'scale(1)';
        } else {
          chip.style.display = 'none';
          chip.style.opacity = '0';
          chip.style.transform = 'scale(0.95)';
        }
      });
    });
  });
}
