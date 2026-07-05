# ProstateWise

**Know Early. Check Early. Live Longer.**

ProstateWise is a premium, production-ready prostate health and prostate cancer
awareness website for men and their families. It helps men understand their
risk, learn warning signs, and prepare for a confident conversation with a
doctor about PSA screening.

> **Medical safety:** ProstateWise is an education and awareness platform only.
> It does **not** diagnose, detect, confirm, or rule out prostate cancer or any
> other condition, and it does not replace a licensed medical professional.

## Tech stack

- **Next.js 15** (App Router)
- **TypeScript** (strict mode)
- **Tailwind CSS 3**
- Zero runtime UI dependencies — all icons and the brand mark are inline SVG.

## Getting started

```bash
# Install dependencies
npm install

# Run the dev server (http://localhost:3000)
npm run dev

# Production build
npm run build

# Start the production server
npm run start

# Lint
npm run lint
```

## Pages

| Route                        | Description                                            |
| ---------------------------- | ------------------------------------------------------ |
| `/`                          | Homepage — hero, trust stats, pathways, community      |
| `/about-prostate-health`     | The prostate, BPH, prostatitis, cancer explained       |
| `/prostate-cancer-awareness` | Age, family history, ancestry, PSA, the silent stage   |
| `/risk-and-screening`        | When to discuss screening; benefits and downsides      |
| `/risk-check`                | Interactive, private risk questionnaire                |
| `/psa-and-visit-prep`        | PSA explained + printable appointment checklist        |
| `/for-families`              | Encouraging the men you love, without shame            |
| `/mission`                   | The ProstateWise mission and future programs           |
| `/resources`                 | Links to CDC, ACS, NCI, NIDDK, USPSTF, and more        |

## Project structure

```
src/
├── app/                 # App Router pages, layout, sitemap, robots, 404
├── components/
│   ├── brand/           # Logo / brand mark
│   ├── layout/          # Navbar, Footer, PageHeader
│   ├── risk-check/      # Interactive risk-check client component
│   ├── sections/        # Hero, CTA band
│   └── ui/              # Button, Card, Section, Container, Icons, etc.
└── lib/                 # site config, risk-check scoring, helpers
```

## The interactive Risk Check

The risk check (`src/lib/risk-check.ts` + `src/components/risk-check/`) maps
answers to one of four **responsible** next-step categories:

1. **Routine awareness**
2. **Talk to a doctor about screening**
3. **Prioritize a medical appointment**
4. **Seek urgent medical care** (triggered by red-flag symptoms)

It never produces a diagnosis, runs entirely in the browser, and stores nothing.

## Deploying to Vercel

1. Push this folder to a Git repository.
2. Import the repository at [vercel.com/new](https://vercel.com/new).
3. Vercel auto-detects Next.js — no extra configuration is needed.
4. Deploy. Update `siteConfig.url` in `src/lib/site.ts` to your live domain so
   SEO metadata, the sitemap, and `robots.txt` use the correct URL.

## Content sources

Educational content is guided by reputable public health references including
the CDC, American Cancer Society, National Cancer Institute, NIDDK, and USPSTF.
See the in-app **Resources** page for direct links.
