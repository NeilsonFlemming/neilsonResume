# Neilson Flemming — Resume Site

Personal resume site built with [Astro](https://astro.build), Preact islands, and Tailwind CSS. Hosted on Netlify.

## Stack

- **Astro** — Static site generator, zero JS by default
- **Preact** — Lightweight framework for the interactive nav (11KB gzipped total JS)
- **Tailwind CSS** — Utility-first styling with custom design tokens
- **Netlify** — Static hosting with edge CDN, Brotli compression, immutable asset caching

## Development

```bash
npm install
npm run dev       # Start dev server at localhost:4321
npm run build     # Production build to dist/
npm run preview   # Preview production build locally
```

## Project Structure

```
src/
├── layouts/BaseLayout.astro     # HTML shell, meta tags, OG, JSON-LD, fonts
├── components/
│   ├── Hero.astro               # Full-viewport hero with CSS gradient
│   ├── About.astro              # Two-column layout, headshot, quick stats
│   ├── Experience.astro         # Timeline cards with accent borders
│   ├── Education.astro          # Compact card with graduation cap icon
│   ├── Certifications.astro     # Vendor logos + grouped expandable lists
│   ├── Skills.astro             # Tag cloud by category
│   ├── Footer.astro             # Social links, credit, back-to-top
│   ├── Nav.tsx                  # Preact island — scroll-aware sticky nav
│   └── icons/                   # Inline SVG icon components
├── data/resume.ts               # Typed resume data (single source of truth)
├── styles/global.css            # Tailwind base + custom tokens + animations
└── pages/index.astro            # Single page assembly
```

## Performance

| Metric | Target | Actual |
|--------|--------|--------|
| JS (gzipped) | < 15KB | ~11KB |
| CSS (gzipped) | < 10KB | ~4.5KB |
| Headshot image | < 10KB | 3KB (WebP) |
| Fonts | < 160KB | 156KB (4 WOFF2, cached forever) |
| First page load | < 150KB | ~27KB (excl. fonts) |
