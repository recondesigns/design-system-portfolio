import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import AboutContent from './AboutContent'

const meta: Meta<typeof AboutContent> = {
  title: 'Organisms/AboutContent',
  component: AboutContent,
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof AboutContent>

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
