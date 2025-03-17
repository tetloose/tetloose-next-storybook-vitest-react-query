import type { Meta, StoryObj } from '@storybook/react'
import { Logo } from './Logo.component'

const meta: Meta<typeof Logo> = {
  title: 'Components/Logo',
  component: Logo,
  parameters: {
    design: {
      type: 'figma',
      url: ''
    },
    layout: 'fullscreen'
  }
}

export default meta

type Story = StoryObj<typeof Logo>

export const Primary: Story = {
  args: {}
}
