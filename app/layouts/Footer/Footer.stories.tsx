import { lazy } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

const Footer = lazy(() => import('@layouts/Footer/Footer.component'))

const meta: Meta<typeof Footer> = {
  title: 'Layouts/Footer',
  component: Footer,
  parameters: {
    design: {
      type: 'figma',
      url: ''
    },
    layout: 'fullscreen'
  }
}

export default meta

type Story = StoryObj<typeof Footer>

export const Primary: Story = {
  args: {}
}
