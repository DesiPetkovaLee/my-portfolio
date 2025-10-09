## Desi Lee – Portfolio (Work in Progress)

A personal portfolio built with React and Vite showcasing my work, skills, and contact information. The design features a two‑tone split Home page with a pendant‑lamp toggle, smooth transitions, and section pages for About, Projects, and Contact.

Live site: `https://desipetkovalee.github.io/my-portfolio/`

### Status

Actively under development. Current focus:
- Responsiveness (desktop/tablet/mobile)
- Accessibility (keyboard, semantics, focus, contrast)
- Small UI polish and bug fixes
- Improving styling and colour palette

Over time I’ll migrate more styling logic from SCSS toward component‑scoped React/CSS‑variables.

## Tech Stack

- React 19 + Vite 7
- React Router DOM 7
- SCSS
- BEM methodology
- Font Awesome
- GitHub Pages

## 🚀 Project Overview

This portfolio website includes:

- **Home/Profile** – A brief introduction about me.
- **About** – More details about my background and interests.
- **Projects** – A showcase of selected projects with descriptions and links.
- **Contact** – Ways to get in touch, including email and social media links.

## Features

- Split intro section (40%/60%) with lamp toggle
- Smooth theme transitions driven by CSS variables
- Routing for Home, About, Projects, Contact
- Floating emoji layer
- Fast dev build and optimised production build with Vite

## Getting Started

Prereqs: Node 18+ (20+ recommended), npm

Install and run:
```bash
npm install
npm run dev
```

Build and preview:
```bash
npm run build
npm run preview
```

Deploy to GitHub Pages:
```bash
npm run deploy
```

## Project Structure

- `src/App.jsx` – routing, global layout, lamp/theme state
- `src/Header.jsx` – header/nav, CSS pendant lamp, toggle
- `src/Profile.jsx` – intro section (split background, desk illustration)
- `src/Projects.jsx`, `src/About.jsx`, `src/Contact.jsx` – sections
- `src/Footer.jsx` – footer
- `src/scss/` – global styles, palette, mixins, section styles

## Accessibility & UX (In Progress)

- Keyboard navigation and focus states
- Semantic structure and ARIA where helpful
- Consistent color contrast and hover/focus behavior

## Known issues / To‑do 

- Rare flicker on theme toggle (smoothing with shared CSS variables)
- Title underline on “Get In Touch”
- Ongoing responsive tweaks (tablet/phone)
- Gradual migration of styling from SCSS toward component scope

## Scripts

- `npm run dev` – start dev server
- `npm run build` – production build
- `npm run preview` – preview build locally
- `npm run deploy` – publish `dist/` to GitHub Pages

## License

Copyright (c) 2025 Desi Lee. All Rights Reserved.

This project is published solely for personal portfolio and evaluation. No permission is granted to use, copy, modify, merge, publish, distribute, sublicense, or sell any part of the source code, design, or assets, in whole or in part, without prior written consent from the author. Viewing the site/repo is permitted. Third‑party packages and assets remain under their respective licenses.

This project is my personal portfolio website, stored in the GitHub repository **my-portfolio**.

It’s built with React, SCSS, and BEM methodology, and is designed to showcase my professional background, skills, and projects.






