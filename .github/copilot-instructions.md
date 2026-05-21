# Copilot instructions for x-energy-drink

Purpose: give an AI coding agent the minimal, actionable knowledge to be productive in this Next.js project.

1) Project overview
- Stack: Next.js (app router), React 19, Next 16, Sass + Tailwind, Mongoose (+ MongoDB).
- Structure: top-level `app/` (routes + layout), `components/` (UI pieces), `styles/` (global + module SCSS), `lib/` (helpers, `mongo/`), `public/assets/fonts`.

2) Entry points & runtime
- App entry: `app/layout.jsx` mounts global styles and `SmoothScroll`.
- Run locally: `npm run dev` (uses `next dev`). Build: `npm run build`; start: `npm run start`.

3) Path aliases
- Imports use `@/` alias. See `jsconfig.json` → `"@/*": ["./*"]`.

4) Styling conventions
- Global styles: `styles/_global.scss` (Sass + `@use "tailwindcss"`).
- Component styles: SCSS modules under `styles/` (e.g. `styles/landingpage/HeroVersion3.module.scss`).
- Use CSS modules for component-scoped styles and `styles/_global.scss` for global variables and font-faces.

5) Common utilities & patterns
- Class merging: use `cn()` from `lib/utils.js` (wraps `clsx` + `twMerge`).
- Smooth scroll / animations: `components/animations/SmoothScroll.jsx` and GSAP/Lenis/Framer Motion are used across `components/animations`.

6) Backend & integration
- Mongo connection helper: `lib/mongo/mongodb.js` exposes `connectToDatabase()` and expects `MONGODB_URI` in `.env.local` (cached via `global.mongoose`).
- If adding server routes or API handlers, re-use `connectToDatabase()` to avoid multiple connections.

7) Project-specific gotchas for edits
- Fonts are loaded from `/public/fonts` and declared in `styles/_global.scss` via `@font-face` — update both when adding/removing fonts.
- This project mixes Tailwind and SCSS: prefer Tailwind utility classes for layout and SCSS modules for complex visual pieces.
- When changing component props or layout, update the corresponding SCSS module in `styles/` to avoid visual regressions.

8) Testing & linting
- No tests in repo. Lint command: `npm run lint` (uses `eslint`).

9) Quick examples (how to make typical edits)
- Add a new section in the landing page: create `components/landingpage/MySection.jsx` + `styles/landingpage/MySection.module.scss`, import in `app/page.jsx`.
- Add a DB-backed API: create `app/api/.../route.js` (Next API route under app router), call `await connectToDatabase()` from `lib/mongo/mongodb.js`, then use Mongoose models.

10) When you are unsure
- Search for patterns under `components/` and `styles/` and mirror naming and SCSS module usage.
- Preserve `cn()` usage for class merging instead of ad-hoc string joins.

If anything here is unclear or you want extra details (e.g., common component props, animation entrypoints, or recommended tests), tell me which area to expand.
