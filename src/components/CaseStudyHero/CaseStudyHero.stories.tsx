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
    links: [
      { label: 'View in Figma', url: 'https://www.figma.com/@thestedman' },
      { label: 'View on GitHub', url: 'https://github.com/recondesigns' },
      { label: 'View in Storybook', url: 'https://storybook.js.org' },
    ],
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
