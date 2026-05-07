# Portfolio — Next.js + TypeScript + Tailwind + GSAP

A production-grade portfolio refactored from a single React file into a clean, maintainable Next.js project.

## Tech Stack
- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS** (with CSS variable integration)
- **GSAP 3** + ScrollTrigger (loaded from CDN, no extra npm package needed)

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout & metadata
│   ├── page.tsx            # Main page (assembles all sections)
│   └── globals.css         # CSS variables + base styles + Tailwind directives
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── Gallery.tsx
│   │   ├── Skills.tsx
│   │   └── Contact.tsx
│   └── ui/
│       ├── Loader.tsx
│       └── Cursor.tsx
│
├── hooks/
│   └── usePortfolioAnimations.ts  # Encapsulates all GSAP lifecycle
│
├── lib/
│   ├── gsap-loader.ts             # Dynamic CDN script loader
│   └── animations.ts              # All GSAP timeline & ScrollTrigger configs
│
└── data/
    ├── projects.ts
    ├── skills.ts
    └── gallery.ts
```

## Customisation

| What to change | Where |
|---|---|
| Personal info, bio | `src/components/sections/About.tsx` |
| Projects list | `src/data/projects.ts` |
| Skills & levels | `src/data/skills.ts` |
| Gallery images | `src/data/gallery.ts` |
| Colors / fonts | `src/app/globals.css` (`:root` variables) |
| Tailwind utilities | `tailwind.config.ts` |
| Animation timings | `src/lib/animations.ts` |
| SEO metadata | `src/app/layout.tsx` |

## Deploying to Vercel

```bash
# Install Vercel CLI (optional)
npm i -g vercel

# Deploy
vercel
```

Or simply push to GitHub and import the repo in [vercel.com](https://vercel.com).
