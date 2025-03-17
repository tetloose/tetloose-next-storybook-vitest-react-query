import { lazy } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

const Header = lazy(() => import('@layouts/Header/Header.component'))

const meta: Meta<typeof Header> = {
  title: 'Layouts/Header',
  component: Header,
  parameters: {
    design: {
      type: 'figma',
      url: ''
    },
    layout: 'fullscreen'
  }
}

export default meta

type Story = StoryObj<typeof Header>

export const Primary: Story = {
  args: {}
}
