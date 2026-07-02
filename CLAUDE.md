# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository structure

This repo is a GitHub Pages site (custom domain `ochoajuan.com`, see `CNAME`) for a personal homepage. It is a plain static site — no framework, no build step. GitHub Pages serves it directly from the repository root.

```
index.html            single page, all sections
assets/css/style.css   all styling (dark theme, CSS variables in :root)
assets/js/script.js    small vanilla-JS enhancements (mobile nav toggle, footer year)
assets/images/         page images (e.g. headshot.jpg)
CNAME, favicon.ico, robots.txt
```

There is no `npm install` / `npm run build` step — edit `index.html`, `assets/css/style.css`, or `assets/js/script.js` directly and the change is live as soon as it's pushed.

## Local preview

Serve the repo root with any static file server and open it in a browser, e.g.:

```
python -m http.server 8000
```

then visit `http://localhost:8000/index.html`.

## Architecture

Single HTML page (`index.html`) with anchor-linked sections, each `id` matching a nav link in the header (`#about`, `#education`, `#tutorials`, `#contact`):

- **Hero** — name, title, headshot, CTA buttons.
- **About** — bio paragraph(s).
- **Education** — a `<ol class="timeline">` list; each `<li class="timeline-item">` is one degree/credential with a date, title, and institution. Add new entries by copying an existing `<li>`.
- **Tutorials** — intro text plus a responsive embedded video (`.video-wrapper` uses the padding-bottom aspect-ratio trick around an `<iframe>`).
- **Footer / Contact** — social links (email, LinkedIn, GitHub) and copyright line; the year is filled in by `assets/js/script.js`.

Styling conventions in `assets/css/style.css`:
- Color palette, spacing, and layout constants live in `:root` custom properties at the top of the file — change theme colors there rather than hunting through selectors.
- Mobile layout is handled by a single `@media (max-width: 640px)` block near the bottom (hamburger nav, stacked hero).

`assets/js/script.js` is intentionally minimal: it sets the footer's copyright year and toggles the mobile nav menu. There's no bundler, so don't introduce `import`/`export` or dependencies here — it needs to run as-is in the browser.

Note: an earlier version of this site was built with Create React App (source previously under `react_build/personal_website/`). That approach was retired in favor of this framework-free static site; if you see references to React/CRA elsewhere (old commits, docs), they describe the prior architecture, not the current one.
