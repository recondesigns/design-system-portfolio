export interface Project {
  slug: string
  projectNumber: string
  title: string
  subtitle: string
  details: string
}

export const projects: Project[] = [
  {
    slug: 'helix-33',
    projectNumber: '01',
    title: 'Helix-33',
    subtitle: 'Design System · Lead',
    details:
      'Unified system for Northwell 140 components across web, iOS and Android; six brand themes from one token set.',
  },
  {
    slug: 'prism',
    projectNumber: '02',
    title: 'Prism',
    subtitle: 'Design System · Lead',
    details:
      'Unified system for Northwell 140 components across web, iOS and Android; six brand themes from one token set.',
  },
  {
    slug: 'atlas',
    projectNumber: '03',
    title: 'Atlas',
    subtitle: 'Design System · Lead',
    details:
      'Unified system for Northwell 140 components across web, iOS and Android; six brand themes from one token set.',
  },
  {
    slug: 'lumen',
    projectNumber: '04',
    title: 'Lumen',
    subtitle: 'Design System · Lead',
    details:
      'Unified system for Northwell 140 components across web, iOS and Android; six brand themes from one token set.',
  },
]
