import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import NextProject from './NextProject'

const meta: Meta<typeof NextProject> = {
  title: 'Organisms/NextProject',
  component: NextProject,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    nextSlug: 'prism',
    nextTitle: 'Prism',
  },
}

export default meta
type Story = StoryObj<typeof NextProject>

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
