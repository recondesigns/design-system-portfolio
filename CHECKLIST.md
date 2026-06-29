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
- [ ] Emotion — install with Next.js 16 SSR integration
- [ ] Design token integration — export Figma variables → tokens/, wire into ThemeProvider
- [ ] Vercel deployment
- [ ] Storybook — install, configure for Next.js 16 + Emotion
- [ ] Git hygiene — husky, commitlint, lint-staged, ignore files
