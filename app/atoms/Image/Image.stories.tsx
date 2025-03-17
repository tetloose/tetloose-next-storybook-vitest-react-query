import type { Meta, StoryObj } from '@storybook/react'
import { Image } from './Image.component'
import Desktop from '@images/test/desktop.jpg'
import Mobile from '@images/test/mobile.jpg'
import Placeholder from '@images/test/Placeholder.jpg'
import Tablet from '@images/test/tablet.jpg'

const meta: Meta<typeof Image> = {
  title: 'Atoms/Image',
  component: Image
}

export default meta

type Story = StoryObj<typeof Image>

export const Cover16x9: Story = {
  args: {
    alt: 'Alt text',
    desktop: Desktop,
    tablet: Tablet,
    mobile: Mobile,
    placeholder: Placeholder,
    ratio: { default: '16x9' },
    position: { default: 'center-bottom' },
    size: { default: 'cover' }
  }
}

export const Contain16x9: Story = {
  args: {
    alt: 'Alt text',
    desktop: Desktop,
    tablet: Tablet,
    mobile: Mobile,
    placeholder: Placeholder,
    ratio: { default: '16x9' },
    position: { default: 'center-bottom' },
    size: { default: 'contain' }
  }
}
