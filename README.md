# World of ESG — Climate Intelligence for Sustainable Growth

A next-generation ESG & sustainability company website built with Vue 3, Three.js, and GSAP. Helps organisations transition toward resilient, compliant, and low-carbon business models.

**Live site:** [worldofesg.in](https://worldofesg.in)

---

## Tech Stack

| Layer | Library |
|---|---|
| Framework | Vue 3 + TypeScript |
| State | Pinia |
| Routing | Vue Router 4 |
| 3D / Globe | Three.js r160 |
| Animations | GSAP 3 + ScrollTrigger |
| Smooth Scroll | Lenis |
| Styling | Tailwind CSS v3 + custom design tokens |
| Build | Vite 5 |

---

## Features

- **Dotted-Earth Three.js globe** — scatter-to-form hero animation with orbiting satellites and mouse parallax; blue/aurora CTA globe with scroll-triggered fade
- **GSAP manifesto** — pinned scroll word-by-word text reveal
- **Horizontal solutions scroll** — GSAP-pinned horizontal card track on desktop
- **17 sections** — Hero, Marquee, About, Vision/Mission, Manifesto, Challenge, Solutions, Process, Market, Team, Industries, Frameworks, Impact, Partners, Why Us, Contact, Footer
- **Booking modal** — 7-day date picker, time slot selector, form validation
- **ESG chat panel** — keyword-aware auto-replies (CBAM, BRSR, CSRD, net-zero)
- **Custom cursor** — rotating globe SVG with orbiting gold moon dot
- **Preloader** — honest real-time progress counter
- **Responsive** — mobile-first, touch-friendly, reduced-motion aware
- **Accessible** — ARIA roles, skip link, keyboard navigation, focus indicators

---

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:3000)
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

---

## Project Structure

```
src/
├── components/          # Shared UI components
│   ├── AppNavigation.vue
│   ├── BookingModal.vue
│   ├── ChatPanel.vue
│   ├── FloatingActions.vue
│   ├── IconSprite.vue
│   ├── BaseButton.vue
│   └── BaseIcon.vue
├── sections/            # Page sections (one per scroll block)
│   ├── HeroSection.vue
│   ├── AboutSection.vue
│   ├── VisionMissionSection.vue
│   ├── ManifestoSection.vue
│   ├── ChallengeSection.vue
│   ├── SolutionsSection.vue
│   ├── ProcessSection.vue
│   ├── MarketSection.vue
│   ├── TeamSection.vue
│   ├── IndustriesSection.vue
│   ├── FrameworksSection.vue
│   ├── ImpactSection.vue
│   ├── PartnersSection.vue
│   ├── WhyUsSection.vue
│   ├── ContactSection.vue
│   └── FooterSection.vue
├── composables/
│   └── useGlobe.ts      # Three.js dotted-Earth globes
├── stores/              # Pinia state
│   ├── app.ts           # Preloader done signal
│   ├── booking.ts       # Booking modal state & form
│   └── navigation.ts    # Nav scroll, mobile menu, chat panel
├── pages/
│   └── HomePage.vue
├── router/index.ts
├── styles/main.css      # Global CSS + design tokens
└── App.vue              # Root — Lenis, GSAP, cursor, manifesto, counters
```

---

## Design System

All colors, fonts, and animations live in `tailwind.config.js` and `src/styles/main.css`.

**Color tokens:** `forest` · `emerald` · `aurora` · `sage` · `mint` · `sand` · `charcoal` · `graphite` · `indigo` · `violet` · `gold`

**Fonts:** Inter (body) · Inter Tight (headings/display) · Instrument Serif (italic quote text)

---

## Deployment

The project builds to a static `dist/` folder — deploy to any static host:

```bash
npm run build
# Upload dist/ to Netlify / Vercel / Cloudflare Pages / S3+CloudFront
```

For Netlify / Vercel, add a rewrite rule so all routes serve `index.html` (SPA routing):

**netlify.toml**
```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

**vercel.json**
```json
{ "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }
```

---

## Contact

**World of ESG** — hello@worldofesg.in · +91 8123019616
[worldofesg.in](https://worldofesg.in) · [YouTube](https://www.youtube.com/@WorldofESG)
