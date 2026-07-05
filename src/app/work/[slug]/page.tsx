import { caseStudies } from '@/lib/content'
import CaseStudyHero from '@/components/CaseStudyHero'
import { CaseStudyHeroImage } from '@/components/CaseStudyImages/CaseStudyImages'
import CaseStudyOverview from '@/components/CaseStudyOverview'
import CaseStudyProcess from '@/components/CaseStudyProcess'
import NextProject from '@/components/NextProject'

interface Props {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }))
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const project = caseStudies.find((cs) => cs.slug === slug)

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
      <CaseStudyHeroImage src={project.heroImage} alt={`${project.title} hero`} />
      <CaseStudyOverview
        overview={project.overview}
        metrics={project.metrics}
      />
      <CaseStudyProcess phases={project.phases} />
<NextProject nextSlug={project.nextSlug} nextTitle={project.nextTitle} />
    </>
  )
}
