# Noventra Group — Website

Modern one-page website for **Noventra Group**: trucking operations, insurance guidance, finance solutions, and AI-powered products.

## Project structure

| Path | Purpose |
|---|---|
| `index.html` | **The live site.** Fully compiled and self-contained (React bundled inside). Deploy this anywhere. |
| `src/NoventraGroupWebsite.jsx` | The editable React source component. All content lives in the `DATA` object near the top. |
| `src/main.jsx` | Entry point — mounts the component into the page. |
| `scripts/build.mjs` | Build script — bundles the source and inlines it into `index.html`. |
| `scripts/template.html` | HTML shell (meta tags, Tailwind CDN) used by the build. |

## Editing & building

```bash
npm install     # once
# edit src/NoventraGroupWebsite.jsx
npm run build   # regenerates index.html
```

## Features

- Original vector illustrations (no stock photos, no licensing issues)
- Interactive **Book a Demo** scheduler: calendar + time slots + downloadable `.ics` calendar invite
- Contact form (opens visitor's email app pre-filled — no backend required)
- Background animations (respects reduced-motion preferences)
- Light/dark theme toggle (sun/moon in the header) — follows the visitor's system preference on first visit and remembers their choice
- Fully responsive, cyan/navy brand palette

## Deploy

**GitHub Pages (free, from this repo):**
1. Repo → Settings → Pages
2. Source: `Deploy from a branch` → Branch: `main` → Folder: `/ (root)` → Save
3. Site goes live at `https://novawebhub.github.io/NoventraWebSite/`

**Netlify / Vercel:** connect this repo, or drag `index.html` into https://app.netlify.com/drop
