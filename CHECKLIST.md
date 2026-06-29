# Setup Checklist

## Figma

- [x] Color primitives (ramps)
- [x] Semantic color variables + opacity variables
- [x] Apply color variables to all 3 frames
- [x] 14 canonical text styles
- [x] Apply text styles to all 3 frames
- [x] Grid / layout styles (Tailwind breakpoints: xl / md / base)
- [x] Effect styles — none in design
- [~] Publish to library — not needed

## Repo

- [x] Next.js 16 installed
- [x] TypeScript — strict + noUncheckedIndexedAccess, exactOptionalPropertyTypes, noImplicitReturns, noFallthroughCasesInSwitch, verbatimModuleSyntax, noPropertyAccessFromIndexSignature
- [x] ESLint — core-web-vitals + typescript, no-explicit-any, consistent-type-imports, no-console, self-closing-comp
- [x] Prettier — .prettierrc, eslint-config-prettier, format + format:check scripts
- [x] Emotion — installed with Next.js 16 SSR integration, Button component
- [x] Design token integration — Figma variables → src/tokens/, Emotion ThemeProvider, verified complete against Figma
- [x] Storybook — Storybook 10, nextjs-vite, ThemeProvider decorator, Button stories
- [x] Vercel deployment — connected to GitHub, auto-deploys on merge to main
- [x] Basic page content — hero section with Emotion-styled components wired to theme
- [ ] Git hygiene — husky, commitlint, lint-staged, ignore files
- [ ] Build components (referencing Figma handoff frames)
- [ ] Final polish + launch
