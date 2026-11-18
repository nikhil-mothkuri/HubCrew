# HubCrew Talent Solutions

Official website for **HubCrew Talent Solutions LLP** (Hyderabad, India).  
Live Domain: [hubcrew.in](https://hubcrew.in) · Official Email: `rini@hubcrewtalent.com`

HubCrew runs your hiring from sourcing to probation confirmation. Tech-first RPO for startups, MSMEs and enterprises across India, Africa and Southeast Asia.

---

## 🌟 Key Features (Version 2.0 Revamp)

- **White & Cobalt Blue Design System:** Authentic editorial palette using Fraunces headings and Inter typography on a crisp white base with vibrant cobalt blue (`#0047AB`) and warm amber accent badges.
- **Real Indexable URLs & Full Multi-Page SEO:** 
  - Real URLs: `/` (Home), `/services`, `/who-we-serve`, `/how-we-work`, `/about`, `/contact`, `/privacy`, `/terms`.
  - Canonical URLs, unique `<title>` and `<meta name="description">` per page.
  - Organization, Service, AboutPage, and HowTo structured data JSON-LD schemas.
  - `sitemap.xml` and `robots.txt`.
  - 1200×630 Open Graph preview image (`assets/og-image.png`).
- **Interactive Lifecycle Scope Picker (Home):**
  - 6 modular stages: Sourcing, Screening, Interviewing, Offer, Onboarding, Probation.
  - Stage range selector computing package scope and deep-linking directly into `/contact` with prefilled selection.
- **Visual-First Process & Capabilities:**
  - 6-Stage Stepper with outputs on How We Work (`how-we-work.html`).
  - Comparative Tick Matrix benchmarking Staffing Majors, Boutiques, Search Firms vs HubCrew.
  - Graphic Corridor Map (`assets/hubcrew-map.svg`) illustrating the Hyderabad delivery base, Pan-African coverage, and Southeast Asian corridors.
  - 5 Payment Model Cards on Services (`services.html`) with expandable data-driven unit details.
  - 3-Stage Capability Roadmap (Live → Next → Later) located exclusively on Services.
- **Founder & Leadership Profiles (About):**
  - Recruitment and industry credentials only (no past employer names, employment dates, or employer-linked metrics).
  - Designated Partners: **Rini Shah Purohit** (Business and Delivery) and **Krishna Saurabh Purohit** (Finance, Regulatory and Strategy).
- **Start a Hiring Brief (Contact):**
  - 7-field form with work email validation, location multi-selector, and honeypot spam protection.
  - Form submission wired to `rini@hubcrewtalent.com`.
- **Dynamic Social & Job-Board Presence:**
  - Footer "Find us on" block wired to central config in `js/main.js` (gracefully hidden until profiles are live).

---

## 📁 Project Structure

```
HubCrew/
├── index.html              # Home page (/)
├── services.html           # Services page (/services)
├── services/index.html     # Directory index for /services/
├── who-we-serve.html       # Who we serve (/who-we-serve)
├── who-we-serve/index.html # Directory index for /who-we-serve/
├── how-we-work.html        # How we work (/how-we-work)
├── how-we-work/index.html  # Directory index for /how-we-work/
├── about.html              # About page (/about)
├── about/index.html        # Directory index for /about/
├── contact.html            # Start a hiring brief (/contact)
├── contact/index.html      # Directory index for /contact/
├── privacy.html            # Privacy policy (/privacy)
├── privacy/index.html      # Directory index for /privacy/
├── terms.html              # Terms of service (/terms)
├── terms/index.html        # Directory index for /terms/
├── 404.html                # Not found fallback
├── sitemap.xml             # XML Sitemap
├── robots.txt              # Search engine directives
├── CNAME                   # Custom domain (hubcrew.in)
├── css/
│   └── style.css           # Vanilla CSS design system & responsive layout
├── js/
│   └── main.js             # Interactive engine, lifecycle picker, & config
└── assets/
    ├── og-image.png        # 1200x630 Open Graph preview image
    ├── hubcrew-map.svg     # Stylized corridor map (Pan-Africa, India, SEA)
    ├── hubcrew-icon.png    # HC Monogram squircle mark
    └── favicon.svg         # Favicon
```

---

## 🚀 How to Run Locally

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .
```

Open `http://localhost:8000` in any web browser.
