import type { Meta, StoryObj } from '@storybook/react'
import { Card } from './Card.component'
import Desktop from '@images/test/desktop.jpg'
import Mobile from '@images/test/mobile.jpg'
import Placeholder from '@images/test/placeholder.jpg'
import Tablet from '@images/test/tablet.jpg'

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    design: {
      type: 'figma',
      url: ''
    },
    layout: 'fullscreen'
  }
}

export default meta

type Story = StoryObj<typeof Card>

export const Primary: Story = {
  args: {
    image: {
      desktop: Desktop,
      tablet: Tablet,
      mobile: Mobile,
      placeholder: Placeholder,
      alt: 'Image Alt Text',
      size: { default: 'cover' },
      position: { default: 'center' },
      ratio: { default: '1x1' }
    },
    title: 'Lorem ipsum dolor sit amet consectetur',
    body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt, laudantium! Facilis iste sit, assumenda quod aliquam, ab harum molestiae sequi repellat delectus at placeat, ducimus laborum labore voluptatum blanditiis optio?',
    link: {
      variant: 'light',
      title: 'Read more',
      to: '/',
      target: '_self',
      typography: {
        size: 'body-med',
        textTransform: 'uppercase'
      }
    },
    loading: false
  }
}
