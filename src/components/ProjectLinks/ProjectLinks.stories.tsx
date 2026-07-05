import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import ProjectLinks from './ProjectLinks'

const meta: Meta<typeof ProjectLinks> = {
  title: 'Molecules/ProjectLinks',
  component: ProjectLinks,
  tags: ['autodocs'],
  parameters: {
    backgrounds: { default: 'dark' },
    layout: 'padded',
  },
  decorators: [
    (Story) => (
      <div style={{ background: '#1a2b1f', padding: '48px' }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof ProjectLinks>

export const ThreeLinks: Story = {
  args: {
    links: [
      { label: 'View in Figma', url: 'https://www.figma.com/@thestedman' },
      { label: 'View on GitHub', url: 'https://github.com/recondesigns' },
      { label: 'View in Storybook', url: 'https://storybook.js.org' },
    ],
  },
}

export const TwoLinks: Story = {
  args: {
    links: [
      { label: 'View in Figma', url: 'https://www.figma.com/@thestedman' },
      { label: 'View on GitHub', url: 'https://github.com/recondesigns' },
    ],
  },
}

export const OneLink: Story = {
  args: {
    links: [{ label: 'View in Storybook', url: 'https://storybook.js.org' }],
  },
}

export const NoLinks: Story = {
  args: {
    links: undefined,
  },
}
