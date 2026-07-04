import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import WorkPage from './page'

const meta: Meta<typeof WorkPage> = {
  title: 'Pages/Work',
  component: WorkPage,
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof WorkPage>

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
