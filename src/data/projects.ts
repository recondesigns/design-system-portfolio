export interface ProjectMetric {
  value: string
  label: string
}

export interface ProjectPhase {
  number: string
  title: string
  body: string
}

export interface Project {
  slug: string
  projectNumber: string
  title: string
  subtitle: string
  tag: string
  details: string
  tagline: string
  role: string
  year: string
  scope: string
  overview: string
  metrics: ProjectMetric[]
  phases: ProjectPhase[]
  nextSlug: string
  nextTitle: string
}

export const projects: Project[] = [
  {
    slug: 'helix-33',
    projectNumber: '01',
    title: 'Helix-33',
    subtitle: 'Design System · Lead',
    tag: 'Design System · Lead',
    details:
      'Unified system for Northwell: 140 components across web, iOS and Android; six brand themes from one token set.',
    tagline:
      'From four design languages to one — without slowing a single team down.',
    role: 'Lead DS Engineer',
    year: '2024–26',
    scope: 'Web · iOS · Android',
    overview:
      'Northwind Health struggled with fragmentation across web, iOS, and Android. Helix was built to unify these platforms through a centralized token pipeline and a comprehensive React & Swift component library.',
    metrics: [
      { value: '140+', label: 'Components' },
      { value: '3.5x', label: 'Faster Dev' },
      { value: '0', label: 'Lint Errors' },
    ],
    phases: [
      {
        number: '01',
        title: 'Discovery',
        body: 'Audited nine product repositories to identify common patterns and naming discrepancies. We defined a unified taxonomy for all W3C compatible design tokens.',
      },
      {
        number: '02',
        title: 'Architecture',
        body: 'Built a custom Style Dictionary pipeline that consumes Figma Variables and exports optimized CSS, SCSS, Swift, and Kotlin files in real-time.',
      },
      {
        number: '03',
        title: 'Delivery',
        body: 'Developed a multi-platform library with WCAG 2.2 AA accessibility baked into every primitive. Adoption reached 85% of core products within six months.',
      },
    ],
    nextSlug: 'prism',
    nextTitle: 'Prism',
  },
  {
    slug: 'prism',
    projectNumber: '02',
    title: 'Prism',
    subtitle: 'Design System · Lead',
    tag: 'Token Pipeline',
    details:
      'Multi-brand token architecture powering five product lines from a single component library.',
    tagline: 'One library. Five brands. Zero compromises on quality.',
    role: 'Lead DS Engineer',
    year: '2023–24',
    scope: 'Web · React Native',
    overview:
      'Prism was built to serve five distinct product brands from a single component library, using a layered token architecture that separated global primitives from brand-specific semantics.',
    metrics: [
      { value: '5', label: 'Brands' },
      { value: '80+', label: 'Components' },
      { value: '40%', label: 'Less code' },
    ],
    phases: [
      {
        number: '01',
        title: 'Token Strategy',
        body: 'Designed a three-tier token model — primitives, semantics, and component-level — that allowed each brand to override only what differed.',
      },
      {
        number: '02',
        title: 'Component Build',
        body: 'Built 80+ components in React with React Native parity, each consuming only semantic tokens so brand-switching required zero component changes.',
      },
      {
        number: '03',
        title: 'Adoption',
        body: 'Rolled out across five product teams over eight weeks with dedicated office hours, reducing per-brand CSS from an average of 12k lines to under 3k.',
      },
    ],
    nextSlug: 'atlas',
    nextTitle: 'Atlas',
  },
  {
    slug: 'atlas',
    projectNumber: '03',
    title: 'Atlas',
    subtitle: 'Design System · Lead',
    tag: 'Documentation',
    details:
      'Enterprise data-visualization system with accessible charting primitives and a self-serve documentation portal.',
    tagline: 'Making complex data legible — for every user, on every surface.',
    role: 'Lead DS Engineer',
    year: '2022–23',
    scope: 'Web · Data Viz',
    overview:
      'Atlas was a ground-up design system for a data-heavy enterprise product, focused on accessible charting, dense information layouts, and a documentation portal that let teams self-serve without filing tickets.',
    metrics: [
      { value: '60+', label: 'Chart types' },
      { value: 'AA', label: 'WCAG rating' },
      { value: '90%', label: 'Self-serve' },
    ],
    phases: [
      {
        number: '01',
        title: 'Research',
        body: 'Conducted accessibility audits on existing charts and interviewed 12 power users to identify the highest-impact gaps in the current tooling.',
      },
      {
        number: '02',
        title: 'System Design',
        body: 'Designed a composable charting API with semantic color tokens that automatically adapt for colorblind-safe palettes and high-contrast mode.',
      },
      {
        number: '03',
        title: 'Documentation',
        body: 'Built a self-serve portal with live playgrounds, copy-paste code snippets, and a decision tree for choosing the right chart type.',
      },
    ],
    nextSlug: 'lumen',
    nextTitle: 'Lumen',
  },
  {
    slug: 'lumen',
    projectNumber: '04',
    title: 'Lumen',
    subtitle: 'Design System · Lead',
    tag: 'Accessibility',
    details:
      'Consumer-facing design system scaling a fintech product from MVP to 2M users.',
    tagline: 'The system that grew with the product — never behind, never in the way.',
    role: 'Lead DS Engineer',
    year: '2021–22',
    scope: 'Web · iOS',
    overview:
      'Lumen was built alongside a fast-growing fintech product, designed to scale gracefully from a 3-person startup to a 40-person org without requiring a full rewrite.',
    metrics: [
      { value: '2M+', label: 'Users' },
      { value: '3→40', label: 'Team size' },
      { value: '0', label: 'Rewrites' },
    ],
    phases: [
      {
        number: '01',
        title: 'Foundation',
        body: 'Established core tokens and a minimal component set that prioritized flexibility over completeness, so the system could grow without breaking changes.',
      },
      {
        number: '02',
        title: 'Scale',
        body: 'Introduced a versioning strategy and deprecation policy that let the product team move fast without fear of breaking the design system contract.',
      },
      {
        number: '03',
        title: 'Maturity',
        body: 'Shipped a public-facing Storybook, contribution guidelines, and an RFC process that turned the design system from a team product into a platform.',
      },
    ],
    nextSlug: 'helix-33',
    nextTitle: 'Helix-33',
  },
]
