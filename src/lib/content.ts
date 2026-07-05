import caseStudiesJson from '../../.velite/caseStudies.json'

export interface ProjectMetric {
  value: string
  label: string
}

export interface ProjectPhase {
  number: string
  title: string
  body: string
  image?: string | undefined
}

export interface CaseStudy {
  slug: string
  order: number
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
  heroImage?: string
  content: string
}

export const caseStudies = (caseStudiesJson as CaseStudy[]).sort((a, b) => a.order - b.order)
