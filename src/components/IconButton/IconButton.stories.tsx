import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { IconArrowUpRight } from '@tabler/icons-react'
import IconButton from './IconButton'

const meta: Meta<typeof IconButton> = {
  title: 'Atoms/IconButton',
  component: IconButton,
  tags: ['autodocs'],
  argTypes: {
    state: { control: 'radio', options: ['default', 'accent'] },
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
}

export default meta
type Story = StoryObj<typeof IconButton>

export const Default: Story = {
  args: {
    'aria-label': 'View project',
    icon: IconArrowUpRight,
    state: 'default',
  },
}

export const Accent: Story = {
  args: {
    'aria-label': 'View project',
    icon: IconArrowUpRight,
    state: 'accent',
  },
}

export const BothStates: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', padding: '32px', background: '#1a2b1f' }}>
      <IconButton aria-label="Default" icon={IconArrowUpRight} state="default" />
      <IconButton aria-label="Accent" icon={IconArrowUpRight} state="accent" />
    </div>
  ),
}
