# avacollins.dev

Personal portfolio site for Ava Collins — frontend-leaning full-stack developer with a long history of building interactive products for retail, education, and games.

**[avacollins.dev →](https://www.avacollins.dev)** &nbsp;|&nbsp; **[Component Library (Storybook) →](https://ava-collins.github.io/avacollins.dev/)**

---

## About this project

The site is intentionally over-engineered. A personal portfolio doesn't need a design system, a separate component library, or MDX — but demonstrating those patterns is the point. This codebase is structured the way I'd structure a scalable enterprise frontend: atomic UI components developed in isolation, composed into page modules, consumed by application pages, with content and code cleanly separated.

## Architecture

### Two parallel UI systems

**`stories/`** — the component library, developed and reviewed in isolation via Storybook:

| Layer | Components |
|---|---|
| Atomic | `Button`, `Card`, `Logo`, `Selfie`, `BackgroundImage`, `YouTubeEmbed` |
| Modules | `Hero`, `Grid`, `Article`, `Footer` |

Each component owns its CSS and a `.stories.tsx` file. Storybook serves as the visual review and documentation environment in the absence of automated tests.

**`app/`** — the Next.js App Router site that consumes the component library:

- `app/constants.tsx` — json store for all content.
- `app/page.tsx` — home page: `Hero` + `Grid` of `Card` entries from `worklist`
- `app/work/page.tsx` — work detail page: alternating-alignment `Article` sections per entry, with `BackgroundImage` or `YouTubeEmbed` for media

### Tech stack

- **Next.js 16** (App Router) + **React 19**
- **TypeScript 5**
- **Storybook 10** with `@storybook/nextjs` — stories run in a real Next.js environment
- **Vercel Analytics** for traffic insights
- **MDX** configured via `next.config.mjs` (no MDX pages yet — infrastructure is in place)
- `@/stories/...` path alias via `tsconfig.json`

## Development

```bash
yarn dev              # Next.js dev server  →  localhost:3000
yarn storybook        # Storybook dev server →  localhost:6006
yarn build            # Production build
yarn build-storybook  # Static Storybook → storybook-static/
yarn lint             # ESLint
```

## Deployment

- **Site** — deployed to Vercel on push to `main`: [avacollins.dev](https://www.avacollins.dev)
- **Storybook** — deployed to GitHub Pages via Actions: [ava-collins.github.io/avacollins.dev](https://ava-collins.github.io/avacollins.dev/)
