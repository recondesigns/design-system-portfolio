import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import ListItem from './ListItem'

const defaultArgs = {
  slug: 'helix-33',
  projectNumber: '01',
  title: 'Helix-33',
  subtitle: 'Design System · Lead',
  details: 'Unified system for Northwind: 140 components across web, iOS and Android, six brand themes from one token set.',
}

const meta: Meta<typeof ListItem> = {
  title: 'Molecules/ListItem',
  component: ListItem,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'radio', options: ['desktop', 'mobile'] },
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
}

export default meta
type Story = StoryObj<typeof ListItem>

export const Desktop: Story = {
  args: { ...defaultArgs, size: 'desktop' },
  parameters: { layout: 'fullscreen' },
  decorators: [
    (Story) => (
      <div style={{ background: '#1a2b1f', padding: '0 48px' }}>
        <Story />
      </div>
    ),
  ],
}

export const Mobile: Story = {
  args: { ...defaultArgs, size: 'mobile' },
  parameters: { layout: 'fullscreen', viewport: { defaultViewport: 'mobile1' } },
  decorators: [
    (Story) => (
      <div style={{ background: '#1a2b1f', padding: '0 24px' }}>
        <Story />
      </div>
    ),
  ],
}

export const DesktopList: Story = {
  render: () => (
    <div style={{ background: '#1a2b1f', padding: '0 48px' }}>
      {['Helix-33', 'Prism', 'Atlas', 'Lumen'].map((title, i) => (
        <ListItem
          key={title}
          size="desktop"
          slug={title.toLowerCase().replace('-', '-')}
          projectNumber={String(i + 1).padStart(2, '0')}
          title={title}
          subtitle="Design System · Lead"
          details="Unified system for Northwind: 140 components across web, iOS and Android, six brand themes from one token set."
        />
      ))}
    </div>
  ),
  parameters: { layout: 'fullscreen' },
}

export const MobileList: Story = {
  render: () => (
    <div style={{ background: '#1a2b1f', padding: '0 24px' }}>
      {['Helix-33', 'Prism', 'Atlas', 'Lumen'].map((title, i) => (
        <ListItem
          key={title}
          size="mobile"
          slug={title.toLowerCase()}
          projectNumber={String(i + 1).padStart(2, '0')}
          title={title}
          subtitle="Design System · Lead"
          details="Unified system for Northwind: 140 components across web, iOS and Android, six brand themes from one token set."
        />
      ))}
    </div>
  ),
  parameters: { layout: 'fullscreen', viewport: { defaultViewport: 'mobile1' } },
}
