# Noventra Group — Website

Modern one-page website for **Noventra Group**: trucking operations, insurance guidance, finance solutions, and AI-powered products.

## What's in this repo

| File | Purpose |
|---|---|
| `index.html` | **The live site.** Fully compiled and self-contained (React bundled inside). Deploy this anywhere. |
| `src/NoventraGroupWebsite.jsx` | The editable React source component. Make changes here, then rebuild. |

## Features

- Original vector illustrations (no stock photos, no licensing issues)
- Interactive **Book a Demo** scheduler: calendar + time slots + downloadable `.ics` calendar invite
- Contact form (opens visitor's email app pre-filled — no backend required)
- Background animations (respects reduced-motion preferences)
- Fully responsive, dark theme, cyan/navy brand palette

## Deploy

**GitHub Pages (free, from this repo):**
1. Repo → Settings → Pages
2. Source: `Deploy from a branch` → Branch: `main` → Folder: `/ (root)` → Save
3. Site goes live at `https://novawebhub.github.io/NoventraWebSite/`

**Netlify / Vercel:** connect this repo, or drag `index.html` into https://app.netlify.com/drop

## Editing

Edit `src/NoventraGroupWebsite.jsx` (all content lives in the `DATA` object near the top), then rebuild `index.html` with esbuild, or ask Claude to rebuild it for you.
