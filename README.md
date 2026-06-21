# ConvLab — Landing Page

Production-ready Landing Page fuer [convlab.ch](https://convlab.ch).
Productized Conversion-Audit-Service fuer DACH SaaS-Solo-Founder.

## Stack

- Next.js 15 (App Router) · TypeScript (strict)
- Tailwind CSS mit Brand-Tokens als CSS-Variables
- DM Sans (self-hosted, variable woff2 — keine externe Font-Request)
- Statisch (SSG), kein Backend, keine externen JS-Libraries ausser Tailwind
- OG-Bild + Favicon zur Build-Zeit generiert (next/og)

## Lokal starten

```bash
npm install
npm run dev      # http://localhost:3000
```

## Verifikation

```bash
npm run lint
npm run type-check
npm run build
```

## Deploy auf Vercel

1. Repo zu GitHub pushen (oder `vercel` CLI im Ordner ausfuehren).
2. In Vercel "Import Project" → Framework wird als Next.js erkannt, keine Config noetig.
3. Domain `convlab.ch` im Vercel-Projekt unter Settings → Domains verbinden.
4. Build Command `next build`, Output automatisch.

Alternativ direkt:

```bash
npm i -g vercel
vercel            # Preview-Deploy
vercel --prod     # Production
```

## Platzhalter befuellen (vor Live-Gang)

Zentral in `lib/config.ts`:

| Konstante | Bedeutung | Wann |
|---|---|---|
| `CALENDLY_URL` | Discovery-Call-Link | Tag 4 |
| `STRIPE_AUDIT_URL` | Stripe-Checkout 1.490 CHF | Tag 3 |
| `STRIPE_REANALYSE_URL` | Stripe 290 CHF Re-Analyse | Tag 3 |
| `LINKEDIN_PROFILE_URL` | dein LinkedIn-Profil | jetzt pruefen |
| `LINKEDIN_POST_URL` | Sprint-Story-Post | gesetzt |

Footer-Links `/impressum` und `/datenschutz` muessen noch als Seiten angelegt werden (rechtlich Pflicht in CH/DE).

## Brand-Tokens (`app/globals.css`)

- Background `#0D1117` · Foreground `#FFFFFF`
- Accent `#1A6BFF` · Muted `#788AAA`

## Struktur

```
app/            layout, page, globals.css, og-image, icons, fonts/
components/      Header, Section, Footer
components/sections/  Hero, Problem, Solution, Proof, Process, Pricing, About, FAQ, FinalCTA
lib/config.ts    zentrale Platzhalter-URLs
```
