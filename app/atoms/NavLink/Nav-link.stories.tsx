import type { Meta, StoryObj } from '@storybook/react'
import { NavLink } from './Nav-link.component'

const meta: Meta<typeof NavLink> = {
  title: 'Atoms/NavLink',
  component: NavLink,
  parameters: {
    design: {
      type: 'figma',
      url: ''
    },
    layout: 'fullscreen'
  }
}

export default meta

type Story = StoryObj<typeof NavLink>

export const Dark: Story = {
  args: {
    variant: 'dark',
    to: 'https://google.com',
    title: 'Dark NavLink',
    typography: {
      padding: {
        default: 6
      },
      size: 'body-lrg'
    }
  }
}

export const Light: Story = {
  args: {
    variant: 'light',
    to: 'https://google.com',
    title: 'Light NavLink',
    typography: {
      padding: {
        default: 6
      },
      size: 'body-lrg'
    }
  },
  parameters: {
    backgrounds: {
      default: 'Dark'
    }
  }
}

export const Grey: Story = {
  args: {
    variant: 'grey',
    to: 'https://google.com',
    title: 'Grey NavLink',
    typography: {
      padding: {
        default: 6
      },
      size: 'body-lrg'
    }
  }
}
