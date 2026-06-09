# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
yarn dev          # Start Next.js dev server (localhost:3000)
yarn build        # Production build
yarn lint         # ESLint
yarn storybook    # Storybook dev server (localhost:6006)
yarn build-storybook  # Build static Storybook to storybook-static/
```

There are no automated tests. Storybook serves as the component development and visual review environment.

## Architecture

This is a Next.js 16 (App Router) portfolio site with MDX support and Vercel Analytics. The project is intentionally over-engineered as a showcase of component-based architecture.

### Two parallel UI systems

**`stories/`** — the component library, developed in isolation via Storybook:
- `stories/components/` — atomic UI: `Button`, `Card`, `Logo`, `Selfie`, `BackgroundImage`, `YouTubeEmbed`
- `stories/modules/` — composed sections: `Hero`, `Grid`, `Article`, `Footer`
- Each component has its own co-located CSS file and a `.stories.tsx` file
- `stories/constants.ts` — Storybook-specific constants

**`app/`** — the Next.js pages that consume the stories library:
- `app/constants.tsx` — the single source of truth for all content: `worklist` (work experience entries with detail sections and media) and `playlist` (side projects)
- `app/page.tsx` — home page: renders `Hero` + `Grid` of `Card`s from `worklist`
- `app/work/page.tsx` — work detail page: renders alternating-alignment `Article` sections per work entry, with `BackgroundImage` or `YouTubeEmbed` for media

### Content model

Work entries in `worklist` have a nested structure: each entry has one or more `details`, each with `text[]` (paragraphs) and `media[]` (images or YouTube embeds). The `/work` page derives anchor IDs from `entry.name.toLowerCase()` and links from the home page use `/work#${name}`.

### Path aliases

`@/stories/...` maps to `stories/` via `tsconfig.json`. Both `@/` imports and relative imports are used interchangeably in the codebase.

### MDX

`next.config.mjs` configures MDX support and `mdx-components.tsx` provides the component map, but no MDX pages currently exist in `app/`.
