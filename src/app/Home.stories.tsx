import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import Footer from '@/components/Footer'
import HomePage from './page'

function FullHomePage() {
  return (
    <>
      <Header />
      <Sidebar />
      <main>
        <HomePage />
      </main>
      <Footer />
    </>
  )
}

const meta: Meta = {
  title: 'Pages/Home',
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

export const Desktop: StoryObj = {
  render: () => <FullHomePage />,
  parameters: {
    viewport: { defaultViewport: 'desktop' },
  },
}

export const Tablet: StoryObj = {
  render: () => <FullHomePage />,
  parameters: {
    viewport: { defaultViewport: 'tablet' },
  },
}

export const Mobile: StoryObj = {
  render: () => <FullHomePage />,
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
  },
}
