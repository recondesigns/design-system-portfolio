import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { useState } from 'react'
import Input from './Input'

const meta: Meta<typeof Input> = {
  title: 'Atoms/Input',
  component: Input,
  parameters: { layout: 'padded' },
}

export default meta
type Story = StoryObj<typeof Input>

function Controlled(args: React.ComponentProps<typeof Input>) {
  const [value, setValue] = useState(args.value ?? '')
  return <Input {...args} value={value} onChange={setValue} />
}

export const Default: Story = {
  render: (args) => <Controlled {...args} />,
  args: {
    id: 'name',
    label: 'Your name',
    placeholder: 'Jane Doe',
    value: '',
  },
}

export const WithValue: Story = {
  render: (args) => <Controlled {...args} />,
  args: {
    id: 'name-filled',
    label: 'Your name',
    placeholder: 'Jane Doe',
    value: 'Jane Doe',
  },
}

export const Multiline: Story = {
  render: (args) => <Controlled {...args} />,
  args: {
    id: 'message',
    label: 'Tell me more',
    placeholder: "What are you building, what's the current state, and what does success look like?",
    value: '',
    multiline: true,
  },
}
