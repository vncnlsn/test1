# APS Land Services | Concept V2: Terrain / Editorial

An alternative visual concept built from APS's existing V1 site. It preserves the existing public-facing content, service descriptions, leadership biographies, contact details, client list, map code and supplied brand assets. It does not invent vendor qualifications or project claims.

## Review

Run `python3 -m http.server 8000` in this directory, then open `http://localhost:8000`. All links use relative paths. This is a static concept and does not transmit form data.

## Architecture

- `index.html`, `about.html`, `services.html`, `contact.html`: page content
- `css/styles.css`: baseline shared styles
- `css/index.css`, `about.css`, `services.css`, `contact.css`: original page styles
- `css/concept-v2.css`: V2 design system and visual composition overrides (loaded last)
- `js/main.js`, `js/services.js`: interactions
- `js/us-map.js`: original preserved map
- `assets/branding`, `assets/images`, `assets/favicons`: supplied files
- `assets/imagery/terrain-lines.svg`: generated decorative cartographic artwork

## Before launch

Review desktop/mobile in real browsers, run accessibility and performance checks, validate public claims and client name usage, and ensure favicon, sitemap, canonical URLs, and deployment routing are configured. No external stock imagery is required for this concept.
