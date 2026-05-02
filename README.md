# AI'm by VNS — Website EN

Stack: React 18 + Vite + Vercel
Language: English (international version)
Style: AI Dark Brutalist — Oswald 700 + Inter
Brand Identity: v1.0 (01/05/2026)

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy on Vercel

1. Push to GitHub
2. Connect repo on vercel.com
3. Framework preset: **Vite**
4. Build command: `npm run build`
5. Output directory: `dist`

## Post-deploy checklist

- [ ] Update URLs in `src/config.js`
- [ ] Replace GA4 ID in `index.html` (G-TEST123 → real ID)
- [ ] Upload `og-image.jpg` to `public/` (1200x630px)
- [ ] Upload SVG logo files to `public/`
- [ ] Update `sitemap.xml` with current date
- [ ] Validate schema via Rich Results Test
- [ ] Activate N8N blog workflow (manually disable timeout after import)

## IMPORTANT — vercel.json

The vercel.json file contains NO redirects block for subdomains
(en.aim-vns.com). Subdomains use headers block only.
Redirects only for the root domain (www) — otherwise ERR_TOO_MANY_REDIRECTS.

## File structure

```
aim-vns-en/
├── index.html              # Schema.org, GA4, hreflang, noscript in body
├── public/
│   ├── robots.txt          # With explicit AI crawlers
│   ├── sitemap.xml         # No changefreq/priority
│   ├── llms.txt            # AI Permissions
│   ├── ai.txt
│   ├── vercel.json         # Headers only, no redirects
│   └── privacy.html        # GDPR compliant, including sessionStorage
└── src/
    ├── App.jsx
    ├── main.jsx
    ├── index.css
    ├── config.js
    ├── components/
    │   ├── LangBanner.jsx  # Browser language detection + sessionStorage
    │   ├── Nav.jsx
    │   ├── Hero.jsx
    │   ├── HowItWorks.jsx
    │   ├── Results.jsx
    │   ├── Services.jsx
    │   ├── FAQ.jsx
    │   ├── Blog.jsx        # Inline article expansion
    │   ├── Contact.jsx
    │   └── Footer.jsx
    └── data/
        ├── posts.jsx       # 3 GEO/AEO articles in English
        └── qanda.jsx       # 10 validated GEO questions
```

## LangBanner logic (EN version)

- Browser set to Italian → suggests Italian version
- Browser set to Dutch → suggests Dutch version
- Browser set to English or any other language → no banner (user is already on the right site)
- Once the user makes a choice, sessionStorage prevents the banner from reappearing for the session
