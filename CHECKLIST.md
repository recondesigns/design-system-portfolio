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
- [~] Git hygiene — .gitignore in place; husky, commitlint, lint-staged still missing
- [x] Velite — MDX content pipeline for project case studies (velite.config.ts, content/work/*.mdx, frontmatter + typed content)
- [x] Case studies — 5-project rotation, atomly-ai → Bespoke → Trove → Lotus → Hitch → loops back
  - [x] atomly-ai — real OSS project (React + Vue, AI-first + accessible components); links: Figma, GitHub
  - [x] Bespoke — real project (riac.design/@up-riac/bespoke-ui); link: Storybook
  - [x] Trove — real project (GoFundMe/Classy, anonymized); link: external case study writeup
  - [x] Lotus — real project (VSchool/lotus); link: GitHub
  - [x] Hitch — real project (Rocket Auction — RocketAuction + TowClub, anonymized); [ ] Figma link still pending from user
- [x] Build components — full atom/molecule/organism set built (Button, Text, Icon, IconButton, Input, TextLink, StatItem, CapabilityItem, SocialLinks, ListItem, SidebarNavItem, Header, Sidebar, Footer, Hero, Metrics, SelectedWork, About, WorkList, CaseStudyHero/Overview/Process/Images, NextProject, ProjectLinks, AboutContent, ContactContent)
- [x] `/work` — project listing page
- [x] `/about` — about page
- [x] `/contact` — contact page
- [ ] Replace placeholder imagery — Hero portrait (Hero.tsx:124, flat color div) and case study visuals; no real assets in public/ yet, no image field in MDX frontmatter
- [ ] Final polish + launch
  - [ ] SEO basics (metadata, OG/Twitter tags, sitemap, robots.txt)
  - [ ] Favicon / app icons
  - [ ] Lighthouse / performance pass
  - [ ] Cross-browser + real-device check
  - [ ] Analytics (if wanted)
  - [ ] Custom domain hookup on Vercel
  - [ ] Final content proofread
