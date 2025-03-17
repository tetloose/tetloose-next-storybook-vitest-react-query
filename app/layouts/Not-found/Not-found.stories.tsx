import { lazy } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Grid } from '@foundations/Grid/Grid.component'

const NotFound = lazy(() => import('@layouts/Not-found/Not-found.component'))
const Header = lazy(() => import('@layouts/Header/Header.component'))
const Footer = lazy(() => import('@layouts/Footer/Footer.component'))

const meta: Meta<typeof NotFound> = {
  title: 'Layouts/Not Found',
  component: NotFound,
  parameters: {
    design: {
      type: 'figma',
      url: ''
    },
    layout: 'fullscreen'
  }
}

export default meta

type Story = StoryObj<typeof NotFound>

const RenderStory = () => (
  <Grid
    height={{ default: 'viewport-fullscreen' }}
    rows={{ default: ['auto', 1, 'auto'] }}
    columns={{ default: [1] }}
  >
    <Header />
    <NotFound />
    <Footer />
  </Grid>
)

export const Primary: Story = {
  render: RenderStory
}

export const Error: Story = {
  args: {
    error: {
      message: 'This is an error',
      name: 'Error Name',
      stack: 'Stack Name'
    }
  }
}
