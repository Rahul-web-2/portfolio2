# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (Vite)
npm run build     # Production build
npm run preview   # Preview production build
npm run lint      # Run ESLint
```

No test suite is configured.

## Environment Variables

The contact form requires a Formspree form ID set in `.env`:

```
VITE_FORMSPREE_ID=your_formspree_form_id
```

## Architecture

Single-page portfolio built with React 19 + Vite. `App.jsx` renders all sections in order: `Header → Intro → About → Project → Contact → Footer`.

**Data layer** (`src/data/`): All content is decoupled from components into plain JS data files. To update copy, links, or project listings, edit the relevant data file — not the component.

- `introData.js` — hero text, social links
- `aboutData.js` — skills, bio
- `projectData.js` — project cards (`projects` array) and filter `tabs`
- `navbarData.js` — nav links
- `footerData.js` — footer links

**Animation system** (`src/animation/animations.js`): Reusable Framer Motion variants (`fadeUp`, `fadeLeft`, `fadeRight`, `stagger`, `pop`). Components use `whileInView` with `viewport={{ once: true }}` so animations trigger once on scroll. The `stagger` variant is used as a parent wrapper; children use individual variants like `fadeUp`.

**CSS structure**: Each component has a base CSS file (`src/css/*.css`) and a responsive override in `src/css/media_css/*.css`. Both are imported directly in the component file.

**Contact form** (`Contact.jsx`): Uses `@formspree/react`. The Formspree form ID is read from `import.meta.env.VITE_FORMSPREE_ID`. If missing, a `ConfigError` is rendered instead of the form.

**Project filtering** (`Project.jsx`): Filter tabs and project list come from `projectData.js`. Filtering is done with `useMemo` on the `category` field. To add a new category, add it to the `tabs` array and set `category` on the project object.
