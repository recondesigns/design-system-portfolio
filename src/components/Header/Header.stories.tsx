import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import Header from './Header'
import Sidebar from '@/components/Sidebar'

function HeaderWithSidebar() {
  return (
    <>
      <Header />
      <Sidebar />
    </>
  )
}

const meta: Meta = {
  title: 'Organisms/Header',
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

export const Desktop: StoryObj = {
  render: () => <HeaderWithSidebar />,
  parameters: {
    viewport: { defaultViewport: 'desktop' },
  },
}

export const Mobile: StoryObj = {
  render: () => <HeaderWithSidebar />,
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
  },
}
