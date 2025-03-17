import type { Meta, StoryObj } from '@storybook/react'
import { EXPORT_NAME } from './COMPONENT_NAME.component'

const meta: Meta<typeof EXPORT_NAME> = {
  title: 'TITLE_NAME',
  component: EXPORT_NAME,
  parameters: {
    design: {
      type: 'figma',
      url: ''
    },
    layout: 'fullscreen'
  }
}

export default meta

type Story = StoryObj<typeof EXPORT_NAME>

export const Primary: Story = {
  args: {}
}
