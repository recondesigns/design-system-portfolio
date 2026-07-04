import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import ContactContent from './ContactContent'

const meta: Meta<typeof ContactContent> = {
  title: 'Organisms/ContactContent',
  component: ContactContent,
  parameters: { layout: 'fullscreen' },
}

export default meta
type Story = StoryObj<typeof ContactContent>

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
