import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import ContactPage from './page'

const meta: Meta<typeof ContactPage> = {
  title: 'Pages/Contact',
  component: ContactPage,
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof ContactPage>

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
