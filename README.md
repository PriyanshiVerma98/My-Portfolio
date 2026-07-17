# Priyanshi Verma — Developer Portfolio

Built with Next.js (App Router), Tailwind CSS v4, Framer Motion, GSAP + ScrollTrigger,
Lenis smooth scroll, and next-themes.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Before you deploy — things to replace

1. **`src/lib/data.js`** — this is the single source of truth for all content:
   name, links, project details, achievements, timeline. Update:
   - `site.github`, `site.linkedin`, `site.url` — currently placeholders.
   - `project.liveUrl` / `project.repoUrl` for each of the 3 projects.
2. **`public/resume.pdf`** — add your actual resume PDF here (referenced by the
   "Resume" button in the hero).
3. **Project screenshots** — each case study page (`src/app/projects/[slug]/page.jsx`)
   currently has a placeholder box where a real screenshot or short screen
   recording of the live app should go. Drop images into `/public/projects/`
   and swap in an `<Image>` (from `next/image`) for the placeholder `div`.
4. **`site.url`** in `data.js` — used for metadata, sitemap, and Open Graph tags.
   Set this to your real deployed domain once you have one.

## Structure

```
src/
  app/
    layout.jsx          root layout: fonts, metadata, providers, nav/footer
    template.jsx         page-transition wrapper (re-mounts per route)
    page.jsx              home page — assembles all sections
    projects/[slug]/      case study route, statically generated
    sitemap.js / robots.js
  components/
    providers/            ThemeProvider (next-themes), SmoothScroll (Lenis + GSAP)
    layout/                Navbar, Footer, CommitRail (signature scroll element)
    ui/                    Reveal, SectionHeading, MagneticLink, ThemeToggle
    sections/              Hero, TechMarquee, Projects, Achievements, About, Contact
    project/               ProjectCard
  lib/
    data.js                all resume-derived content lives here
```

## Design system

- **Color:** dark "amber terminal" base (`#0B0F0E`) with a brass/amber accent
  (`#D8A34E`) — tokens live in `src/app/globals.css` under `:root` / `.dark`.
- **Type:** Space Grotesk (display), Manrope (body), JetBrains Mono (labels/code).
- **Signature element:** the vertical "commit rail" on desktop (`CommitRail.jsx`)
  mirrors the page's own sections as a git-style build log.

## Performance & accessibility notes

- All animation respects `prefers-reduced-motion` (Lenis, GSAP ScrollTrigger,
  the hero timeline, and the stat counters all check this and fall back to
  instant/static states).
- Fonts are loaded via `next/font/google` (self-hosted at build time, no
  render-blocking external requests).
- All pages are statically generated (`○`/`●` in the build output) — no
  server-side data fetching at request time.
- Visible focus rings on every interactive element (`:focus-visible` in
  `globals.css`).

## Known placeholders

Search the codebase for `your-username`, `your-profile`, `your-project-link`,
and `your-portfolio-link` — these are the only remaining placeholders and
should be swapped for real URLs before launch.
