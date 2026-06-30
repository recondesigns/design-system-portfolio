import { projects } from '@/data/projects'
import CaseStudyHero from '@/components/CaseStudyHero'
import { CaseStudyHeroImage, CaseStudyMockups } from '@/components/CaseStudyImages/CaseStudyImages'
import CaseStudyOverview from '@/components/CaseStudyOverview'
import CaseStudyProcess from '@/components/CaseStudyProcess'
import NextProject from '@/components/NextProject'

interface Props {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) return null

  return (
    <>
      <CaseStudyHero
        title={project.title}
        tagline={project.tagline}
        role={project.role}
        year={project.year}
        scope={project.scope}
        subtitle={project.subtitle}
      />
      <CaseStudyHeroImage />
      <CaseStudyOverview
        overview={project.overview}
        metrics={project.metrics}
      />
      <CaseStudyProcess phases={project.phases} />
      <CaseStudyMockups />
      <NextProject nextSlug={project.nextSlug} nextTitle={project.nextTitle} />
    </>
  )
}
