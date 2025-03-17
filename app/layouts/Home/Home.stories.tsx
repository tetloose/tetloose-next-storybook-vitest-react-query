import { lazy } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Grid } from '@foundations/Grid/Grid.component'

const Home = lazy(() => import('@layouts/Home/Home.component'))
const Header = lazy(() => import('@layouts/Header/Header.component'))
const Footer = lazy(() => import('@layouts/Footer/Footer.component'))

const meta: Meta<typeof Home> = {
  title: 'Layouts/Home',
  component: Home,
  parameters: {
    design: {
      type: 'figma',
      url: ''
    },
    layout: 'fullscreen'
  }
}

export default meta

type Story = StoryObj<typeof Home>

const RenderStory = () => (
  <Grid
    height={{ default: 'viewport-fullscreen' }}
    rows={{ default: ['auto', 1, 'auto'] }}
    columns={{ default: [1] }}
  >
    <Header />
    <Home />
    <Footer />
  </Grid>
)

export const Primary: Story = {
  render: RenderStory
}
