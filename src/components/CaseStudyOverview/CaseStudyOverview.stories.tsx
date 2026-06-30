import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import CaseStudyOverview from './CaseStudyOverview'

const meta: Meta<typeof CaseStudyOverview> = {
  title: 'Organisms/CaseStudyOverview',
  component: CaseStudyOverview,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    overview:
      'Northwind Health struggled with fragmentation across web, iOS, and Android. Helix was built to unify these platforms through a centralized token pipeline and a comprehensive React & Swift component library.',
    metrics: [
      { value: '140+', label: 'Components' },
      { value: '3.5x', label: 'Faster Dev' },
      { value: '0', label: 'Lint Errors' },
    ],
  },
}

export default meta
type Story = StoryObj<typeof CaseStudyOverview>

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
