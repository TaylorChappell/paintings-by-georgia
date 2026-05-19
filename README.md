# Paintings by Georgia

A full responsive artist portfolio and commission website built with React, Vite, and CSS.

## Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Add your image assets

Place the following images in the `/public/assets/` folder:

- `dog-portrait.png`
- `horse-painting.png`
- `red-portrait.png`
- `male-portrait.png`
- `distressed-cardboard-dog.png`
- `flower-corner.png`
- `flower-sprig.png`
- `flower-small.png`
- `flower-large.png`
- `paint-brush.png`
- `palette.png`

The site works without the images present (uses the paths directly), but you will need your actual artwork files for the full visual effect.

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Build for production

```bash
npm run build
```

The production build will be in the `/dist` folder. You can preview it with:

```bash
npm run preview
```

## Project Structure

```
src/
  components/
    Navbar.jsx          - Top navigation bar with mobile menu
    Footer.jsx          - Site footer with links and social icons
    HeroCollage.jsx     - Layered artwork collage for hero sections
    FloralDecor.jsx     - SVG floral corner decorations
    FloralDivider.jsx   - SVG floral section divider
  pages/
    Home.jsx            - Landing page with hero, featured work, why section
    Portfolio.jsx       - Masonry portfolio grid with filter buttons
    Commissions.jsx     - Commission info, process steps, options
    About.jsx           - About Georgia, quote, info columns, CTA
    Contact.jsx         - Contact form with fake success state
    Etsy.jsx            - Etsy shop page with product cards
  App.jsx               - Router setup
  main.jsx              - Entry point
  index.css             - Global design system and styles
public/
  assets/               - Place your artwork images here
```

## Colour Palette

| Variable         | Value     | Use                        |
|------------------|-----------|----------------------------|
| `--bg`           | `#fdf8f3` | Page background            |
| `--text`         | `#2f2927` | Main text                  |
| `--text-muted`   | `#6f6662` | Secondary text             |
| `--rose`         | `#b94f6f` | Dusty rose accent          |
| `--rose-soft`    | `#f5d6dd` | Soft rose for petals       |
| `--rose-pale`    | `#fbecef` | Pale blush backgrounds     |
| `--green`        | `#7d8f6a` | Muted green for leaves     |
| `--card-bg`      | `#ffffff` | Card backgrounds           |
| `--border`       | `#ead8d2` | Borders and dividers       |

## Fonts

- **Logo:** Dancing Script (Google Fonts, script/handwritten)
- **Headings:** Cormorant Garamond (Google Fonts, elegant serif)
- **Body:** Lato (Google Fonts, clean sans-serif)

## Pages

- `/` - Home
- `/portfolio` - Portfolio with category filters
- `/commissions` - Commission process and options
- `/about` - About Georgia
- `/contact` - Contact form (front-end only, shows success message)
- `/etsy` - Etsy shop page with product cards
