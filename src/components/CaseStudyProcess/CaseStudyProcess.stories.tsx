import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import CaseStudyProcess from './CaseStudyProcess'

const meta: Meta<typeof CaseStudyProcess> = {
  title: 'Organisms/CaseStudyProcess',
  component: CaseStudyProcess,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
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
  },
}

export default meta
type Story = StoryObj<typeof CaseStudyProcess>

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
