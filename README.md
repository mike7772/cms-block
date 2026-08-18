# @occms/cms-blocks

Shared Puck/Strapi page-builder block library — the single source of truth for the
Puck block registry consumed by:

- **OCCMS_FRONTED_V1** (the editor — Puck editing UI, admin-only, writes to Strapi)
- **PUBLIC_PORTAL** (the renderer — public `/home` route, reads from Strapi, no editor UI)

Ported in full from `portal-frontend` (the reference/sample implementation — not used
in production). All ~100 blocks from its `components/blocks/` directory are included,
plus the Puck registry (`puck/registry/*`), the Puck config assembly (`puck.config.tsx`),
the Puck↔Strapi converters (`puck-to-strapi.ts`/`strapi-to-puck.ts`), and their full
transitive dependency closure (Lexical rich-text editing support, media/nav/i18n
helpers).

## What's deliberately *not* here

Editor-only chrome stays in OCCMS_FRONTED_V1, not in this package, since it's UI
wiring specific to that app, not part of the block contract itself: the Puck editor
shell, AI-assist plugin, admin-menu plugin, save-template plugin, and the Elementor-style
field-panel drawer UI.

## Consumption

This is a git-dependency package (no private registry set up yet):

```
pnpm add "@occms/cms-blocks@git+<repo-url>#<tag>"
```

`dist/` is committed (not gitignored) so consumers get working code without needing
this package's own TypeScript build tooling — deliberately has no `prepare`/install-time
script, since pnpm's supply-chain policy blocks git dependencies that try to run one
unless explicitly allowlisted. Run `npm run build` locally after changing `src/`.

`@puckeditor/core`, `next`, `react`, and `react-dom` are peer dependencies — the
consuming app supplies its own versions so editor and renderer type definitions for
`Config`/`Data` line up with whatever they use directly (e.g. `<Puck>` in the editor).

## Updating a block

Bump the version in `package.json`, tag a release, then bump the dependency version in
both OCCMS_FRONTED_V1 and PUBLIC_PORTAL and reinstall. There's no monorepo auto-linking
between these three repos — this is a manual but explicit sync step.

## Tailwind tokens

Blocks were authored against portal-frontend's Tailwind v4 theme (custom tokens like
`text-ink/70`, `bg-sky-pale`: `sky`/`sky-light`/`sky-pale`/`sky-dark`, `ink`, `court`/
`court-dark`, `foliage`/`foliage-deep`, `trunk`/`trunk-dark`). Both consuming apps
(OCCMS_FRONTED_V1, PUBLIC_PORTAL) are on Tailwind v3 and have these declared under
`theme.extend.colors` in their own `tailwind.config.ts` — add the same there for any
new consumer.
