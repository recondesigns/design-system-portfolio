import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import CaseStudyHero from './CaseStudyHero'

const meta: Meta<typeof CaseStudyHero> = {
  title: 'Organisms/CaseStudyHero',
  component: CaseStudyHero,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    title: 'Helix-33',
    subtitle: 'Design System · Lead',
    tagline: 'From four design languages to one — without slowing a single team down.',
    role: 'Lead DS Engineer',
    year: '2024–26',
    scope: 'Web · iOS · Android',
  },
}

export default meta
type Story = StoryObj<typeof CaseStudyHero>

export const Desktop: Story = {
  parameters: {
    viewport: { defaultViewport: 'desktop' },
  },
}

export const Tablet: Story = {
  parameters: {
    viewport: { defaultViewport: 'tablet' },
  },
}

export const Mobile: Story = {
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
  },
}
