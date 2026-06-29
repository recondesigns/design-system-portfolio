import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import SelectedWork from './SelectedWork'

const meta: Meta<typeof SelectedWork> = {
  title: 'Organisms/SelectedWork',
  component: SelectedWork,
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof SelectedWork>

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
