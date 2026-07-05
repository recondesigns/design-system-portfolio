import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import Footer from '@/components/Footer'
import CaseStudyHero from '@/components/CaseStudyHero'
import { CaseStudyHeroImage } from '@/components/CaseStudyImages/CaseStudyImages'
import CaseStudyOverview from '@/components/CaseStudyOverview'
import CaseStudyProcess from '@/components/CaseStudyProcess'
import NextProject from '@/components/NextProject'
import { caseStudies } from '@/lib/content'

const project = caseStudies[0]!

function FullCaseStudyPage() {
  return (
    <>
      <Header />
      <Sidebar />
      <main>
        <CaseStudyHero
          title={project.title}
          tagline={project.tagline}
          role={project.role}
          year={project.year}
          scope={project.scope}
          subtitle={project.subtitle}
          links={project.links}
        />
        <CaseStudyHeroImage />
        <CaseStudyOverview
          overview={project.overview}
          metrics={project.metrics}
        />
        <CaseStudyProcess phases={project.phases} />
<NextProject nextSlug={project.nextSlug} nextTitle={project.nextTitle} />
      </main>
      <Footer />
    </>
  )
}

const meta: Meta = {
  title: 'Pages/CaseStudy',
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

export const Desktop: StoryObj = {
  render: () => <FullCaseStudyPage />,
  parameters: {
    viewport: { defaultViewport: 'desktop' },
  },
}

export const Tablet: StoryObj = {
  render: () => <FullCaseStudyPage />,
  parameters: {
    viewport: { defaultViewport: 'tablet' },
  },
}

export const Mobile: StoryObj = {
  render: () => <FullCaseStudyPage />,
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
  },
}
