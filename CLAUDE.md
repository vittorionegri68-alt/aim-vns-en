# CLAUDE.md — aim-vns-en

## Progetto
AI'm by VNS — sito inglese
URL live: https://en.aim-vns.com
Repo: github.com/vittorionegri68-alt/aim-vns-en
Cartella locale: D:\AI-m_by_VNS\SITO\aim-vns-en

## Stack
React 18 + Vite + Vercel + GitHub
Node: latest LTS | Package manager: npm

## Struttura critica
- index-EN.html = shell Vite (schema.org, meta tag, GA4, noscript) — file sorgente
- index.html = COPIA OBBLIGATORIA di index-EN.html (richiesta da Vite build)
- public/resources/index-EN.html = shell pagina resources
- public/resources/index.html = COPIA OBBLIGATORIA di public/resources/index-EN.html
- src/ = tutto il contenuto visivo React/JSX (CTA, sezioni, componenti)
- App.jsx = entry point — aggiornare import se si rinomina un componente

## Regole obbligatorie (non derogabili)
- MAI str_replace parziali su index.html o index-EN.html — ricreare SEMPRE il file completo
- MAI blocco redirects in vercel.json su sottodomini — causa ERR_TOO_MANY_REDIRECTS
- vercel.json: SOLO blocco headers su sottodomini, redirects SOLO su dominio radice
- noscript: SEMPRE nel body dopo div#root, MAI nel head (Vite/parse5 rifiuta)
- GA4 cookieless: anonymize_ip true, client_storage none
- MAI em dash in qualsiasi testo prodotto
- Schema Person: chiedere sempre nome e URL del gestore prima di scrivere
- File mancante: fermarsi e chiedere, non ricostruire da zero

## Procedura deploy standard
```bash
cp index-EN.html index.html
cp public/resources/index-EN.html public/resources/index.html
git add .
git commit -m "feat: descrizione modifica"
git push origin main
```
Vercel deploya automaticamente da main.

## Procedura git (se repo non collegato)
```bash
git config --global --add safe.directory D:/AI-m_by_VNS/SITO/aim-vns-en
git config --global user.name "Vittorio Negri"
git config --global user.email "info@aim-vns.com"
git remote add origin https://github.com/vittorionegri68-alt/aim-vns-en.git
git fetch origin
git update-ref refs/heads/main refs/remotes/origin/main
git symbolic-ref HEAD refs/heads/main
git reset HEAD
git branch --set-upstream-to=origin/main main
```

## File obbligatori (verificare prima di ogni deploy)
- index.html (copia di index-EN.html)
- public/robots.txt (AI crawler espliciti: GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot, anthropic-ai, Bingbot, CCBot)
- public/sitemap.xml (no changefreq, no priority)
- public/llms.txt (con sezione AI Permissions)
- public/ai.txt
- vercel.json (solo headers, no redirects su sottodomini)
- public/privacy.html

## Schema.org
Tipo: @graph unificato in index-EN.html
Tipi inclusi: ProfessionalService + Person + WebSite + BreadcrumbList + FAQPage (10 domande GEO)
NON modificare schema senza leggere il documento di contesto aggiornato.

## GA4
ID: G-NQ5G31HN3T
Configurazione: anonymize_ip: true, client_storage: 'none'

## Calendly
CTA principale: https://calendly.com/aim-vns-info/30min

## PDF resources
Percorso: public/assets/pdf/
- ai-visibility-guide-part1-en.pdf
- ai-visibility-guide-part2-en.pdf

## Vercel
Team ID: team_MBDCILrQ2mSTeCxO2UbjujfO
Connettore Claude attivo.

## Contatti progetto
Vittorio Negri | info@aim-vns.com | +31613078576
Sede: Steen van Ommerenstraat 14, 3861AW Nijkerk, NL
