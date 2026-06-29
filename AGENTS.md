<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:project-conventions -->

# Project Conventions

## Architecture — Atomic Design
Components follow strict Atomic Design hierarchy. Do not skip tiers or flatten variants.

- **Atoms** (`src/components/…`): `Button`, `Text`, `Icon`, `IconButton`
- **Molecules**: `TextLink`, `StatItem`, `CapabilityItem`, `SocialLinks`, `ListItem`, `SidebarNavItem`
- **Organisms**: `Header`, `Footer`, `Sidebar`, `Hero`, `Metrics`, `SelectedWork`, `About`
- **Templates**: `Section` wrapper; root layout (`src/app/layout.tsx`) acts as the page template — `Header` + `Sidebar` + `<main>{children}</main>` + `Footer`

Each component folder contains: `ComponentName.tsx`, `index.ts`, and `ComponentName.stories.tsx` (atoms + molecules always; organisms when they add Storybook value).

## Styling — Emotion + Design Tokens
- Always use `styled()` from `@emotion/styled`. Avoid the `css` prop except for one-off overrides.
- **Never hardcode hex values, px values, or magic numbers.** Every color, size, spacing, radius, transition, and z-index must come from `src/tokens/theme.ts` via the typed `theme` prop: `${({ theme }) => theme.color.text.primary}`.
- Token groups in `theme.ts`: `color`, `primitives`, `opacity`, `fontFamily`, `fontWeight`, `fontSize`, `lineHeight`, `letterSpacing`, `fontStyle`, `breakpoints`, `mediaQuery`, `spacing`, `radius`, `size`, `transition`, `zIndex`.
- Breakpoints are mobile-first min-width: `theme.mediaQuery.md` (768px), `theme.mediaQuery.xl` (1280px).

## Icons — Tabler Icons
All icons come from `@tabler/icons-react`. Do not use inline SVGs or Figma asset exports.
- Arrow (external link / list item): `IconArrowUpRight`
- Sidebar close: `IconX`
- Mobile hamburger: `IconMenu2`
Use the `Icon` atom wrapper (`src/components/Icon/Icon.tsx`) which sets `aria-hidden` and drives size/color from tokens.

## React / Next.js
- Default to React Server Components. Add `'use client'` only when the component needs browser APIs, event handlers, or Zustand.
- `'use client'` components: `Header`, `Sidebar`, `IconButton` (interactive), any Zustand consumer.
- Use `next/link` for all internal navigation. Use `next/image` for all images.
- External links: `target="_blank" rel="noopener noreferrer"`.
- Path alias: `@/*` → `src/*`. Use type-only imports where the ESLint rule requires it.
- Before writing any Next.js-specific code, consult `node_modules/next/dist/docs/01-app/` — this project runs Next.js 16 which has breaking changes from prior versions.

## State
- **Zustand** for state that crosses component boundaries (sidebar open/close in `src/store/uiStore.ts`).
- Local `useState` / `useRef` for everything internal to a single component.
- CSS `:hover` for visual hover states — no JS state for interaction-only changes.

## TypeScript
- Strict mode is on (`strict`, `noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`).
- Every component must have a typed props interface — no implicit `any`.

## Accessibility
- Semantic HTML landmarks: `<header>`, `<nav>`, `<main>`, `<footer>`.
- `aria-label` on all icon-only controls. `aria-expanded` on the hamburger toggle.
- `focus-visible` styles on all interactive elements.
- All transitions gated by `@media (prefers-reduced-motion: reduce)`.
- Sidebar must trap focus when open and restore focus to the hamburger on close.

<!-- END:project-conventions -->
