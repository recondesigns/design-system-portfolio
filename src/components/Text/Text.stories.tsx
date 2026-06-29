import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import Text from './Text'

const meta: Meta<typeof Text> = {
  title: 'Atoms/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'display',
        'displayStat',
        'heading1',
        'bodyLead',
        'bodyEmphasis',
        'bodyDefault',
        'bodySmall',
        'labelDefault',
        'labelEyebrow',
        'labelTag',
        'labelStat',
      ],
    },
    italic: { control: 'boolean' },
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
}

export default meta
type Story = StoryObj<typeof Text>

export const Display: Story = {
  args: { variant: 'display', children: 'I build the systems behind the products.' },
}

export const DisplayItalic: Story = {
  args: { variant: 'display', italic: true, children: 'consistent.' },
}

export const DisplayStat: Story = {
  args: { variant: 'displayStat', children: '140+' },
}

export const Heading1: Story = {
  args: { variant: 'heading1', children: 'Scale requires rigor.' },
}

export const BodyLead: Story = {
  args: { variant: 'bodyLead', children: 'Eight years bridging design and engineering.' },
}

export const BodyEmphasis: Story = {
  args: { variant: 'bodyEmphasis', children: 'Component libraries, token pipelines, and the documentation that makes them stick.' },
}

export const BodyDefault: Story = {
  args: { variant: 'bodyDefault', children: 'My background as both a UX designer and a Frontend Engineer gives me a unique perspective on design systems.' },
}

export const BodySmall: Story = {
  args: { variant: 'bodySmall', children: 'Unified system for Northwind: 140 components across web, iOS and Android.' },
}

export const LabelDefault: Story = {
  args: { variant: 'labelDefault', children: 'Selected Work' },
}

export const LabelEyebrow: Story = {
  args: { variant: 'labelEyebrow', children: 'Design Systems Engineer & UX Designer' },
}

export const LabelTag: Story = {
  args: { variant: 'labelTag', children: 'Design System · Lead' },
}

export const LabelStat: Story = {
  args: { variant: 'labelStat', children: 'Components' },
}

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '32px', background: '#1a2b1f' }}>
      <Text variant="display">I build the systems</Text>
      <Text variant="display" italic>consistent.</Text>
      <Text variant="displayStat">140+</Text>
      <Text variant="heading1">Scale requires rigor.</Text>
      <Text variant="bodyLead">Eight years bridging design and engineering.</Text>
      <Text variant="bodyEmphasis">Component libraries, token pipelines.</Text>
      <Text variant="bodyDefault">My background as both a UX designer and a Frontend Engineer.</Text>
      <Text variant="bodySmall">Unified system for Northwind: 140 components.</Text>
      <Text variant="labelDefault">Selected Work</Text>
      <Text variant="labelEyebrow">Design Systems Engineer</Text>
      <Text variant="labelTag">Design System · Lead</Text>
      <Text variant="labelStat">Components</Text>
    </div>
  ),
}
