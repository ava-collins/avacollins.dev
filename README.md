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
yarn test:api         # API route validation tests
```

## Chatbot configuration

The site integrates with a deployed Amazon Lex V2 chatbot through a server-side Next.js API route. The browser should call the local API route, not Lex directly, so AWS credentials and bot configuration stay on the server.

Copy `.env.example` to a local env file and fill in the deployed Lex values:

```bash
AWS_REGION=us-east-1
LEX_BOT_ID=
LEX_BOT_ALIAS_ID=
LEX_LOCALE_ID=en_US
```

The API route should use the AWS SDK default credential provider chain: deployment IAM role in production, or a local AWS profile/environment credentials during development. The runtime identity needs permission to call `lex:RecognizeText` for the deployed bot alias. Do not add `NEXT_PUBLIC_*` Lex or AWS credential variables unless the architecture changes to make browser-side AWS calls.

Example IAM policy for the production runtime role:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": "lex:RecognizeText",
      "Resource": "arn:aws:lex:<region>:<account-id>:bot-alias/<bot-id>/<bot-alias-id>"
    }
  ]
}
```

## Deployment

- **Site** — deployed to Vercel on push to `main`: [avacollins.dev](https://www.avacollins.dev)
- **Storybook** — deployed to GitHub Pages via Actions: [ava-collins.github.io/avacollins.dev](https://ava-collins.github.io/avacollins.dev/)
