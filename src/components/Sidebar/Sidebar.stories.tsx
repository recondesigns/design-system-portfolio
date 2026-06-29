import type { Meta, StoryObj, Decorator } from '@storybook/nextjs-vite'
import { useUiStore } from '@/store/uiStore'
import Sidebar from './Sidebar'

const withToggleButton: Decorator = (Story) => {
  const { isSidebarOpen, toggleSidebar } = useUiStore()
  return (
    <>
      <button
        onClick={toggleSidebar}
        style={{
          position: 'fixed',
          top: 16,
          left: 16,
          zIndex: 999,
          padding: '8px 16px',
          background: '#c8783a',
          color: '#fff',
          border: 'none',
          borderRadius: 4,
          cursor: 'pointer',
          fontFamily: 'sans-serif',
          fontSize: 13,
        }}
      >
        {isSidebarOpen ? 'Close sidebar' : 'Open sidebar'}
      </button>
      <Story />
    </>
  )
}

const meta: Meta = {
  title: 'Organisms/Sidebar',
  component: Sidebar,
  decorators: [withToggleButton],
  parameters: {
    layout: 'fullscreen',
    viewport: { defaultViewport: 'mobile1' },
  },
}

export default meta

export const Default: StoryObj = {}
