# Portfolio

Personal freelance portfolio — React + Vite, TypeScript, Tailwind CSS v4, React Three Fiber (Three.js) for the interactive hero, GSAP + Lenis for scroll animation.

## Development

```bash
npm install
npm run dev
```

## Editing content

All placeholder content lives in `src/data/`:

- `profile.ts` — name, role, tagline, email, social links
- `skills.ts` — skill groups
- `projects.ts` — project cards
- `experience.ts` — work/education timeline
- `blog.ts` — blog post teasers

Replace the `yourname.dev` favicon/name, and the `#` placeholder links in `ProjectsSection.tsx`, with your real assets.

## Deploying to GitHub Pages

Two options are set up:

**Option A — GitHub Actions (recommended):** push this repo to GitHub, then in the repo's Settings → Pages, set Source to "GitHub Actions". Every push to `main` will build and deploy automatically via `.github/workflows/deploy.yml`.

**Option B — manual:**

```bash
npm run deploy
```

This builds the site and pushes `dist/` to a `gh-pages` branch (requires a `git remote` already configured and the `gh-pages` package, which is already installed).

Either way, Vite is configured with a relative `base: './'` in `vite.config.ts`, so it works whether the repo is a project page (`username.github.io/repo-name`) or a user page (`username.github.io`).
