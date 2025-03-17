import type { Meta, StoryObj } from '@storybook/react'
import { Column } from '@foundations/Row/Column.component'
import { Row } from '@foundations/Row/Row.component'
import { Typography } from '@foundations/Typography/Typography.component'
import { Grid } from './Grid.component'
import { GridItem } from './Grid-item.component'

const meta: Meta<typeof Grid> = {
  title: 'Foundations/Grid',
  component: Grid,
  parameters: {
    layout: 'fullscreen'
  }
}

export default meta

type Story = StoryObj<typeof Grid>

const renderPrimary = () => {
  return (
    <Grid
      tag={'main'}
      rows={{ default: ['60px', 'auto', '40px'] }}
      columns={{ default: [0.5, 1.5] }}
    >
      <GridItem
        tag={'header'}
        bg={'dark'}
        rows={{ default: [1] }}
        columns={{ default: [1, 3] }}
      >
        <Row
          height={{ default: 'parent-fullscreen' }}
          padding={{
            left: { default: 6 },
            right: { default: 6 }
          }}
          align={{
            default: 'center'
          }}
        >
          <Column
            padding={{
              left: { default: 6 },
              right: { default: 6 }
            }}
          >
            <Typography
              tag={'span'}
              display={{ default: 'block' }}
              textAlign={{ default: 'center' }}
              size={'body-xxlrg'}
              text={'Header'}
              color={'light'}
              fontWeight={'bold'}
            />
          </Column>
        </Row>
      </GridItem>
      <GridItem rows={{ default: [2] }} columns={{ default: [1, 2] }}>
        <Row>
          <Column
            padding={{
              top: {
                default: 6
              },
              right: {
                default: 6
              },
              bottom: {
                default: 6
              },
              left: {
                default: 6
              }
            }}
          >
            <Typography
              tag={'h2'}
              size={'body-lrg'}
              text={'Sidebar'}
              fontWeight={'bold'}
            />
          </Column>
        </Row>
      </GridItem>
      <GridItem
        tag={'section'}
        rows={{ default: [2] }}
        columns={{ default: [2, 3] }}
      >
        <Row>
          <Column
            padding={{
              top: {
                default: 6
              },
              right: {
                default: 6
              },
              bottom: {
                default: 6
              },
              left: {
                default: 6
              }
            }}
          >
            <Typography
              richText={
                '<h1>Lorem ipsum dolor sit amet</h1>\n<p>\n  Lorem ipsum dolor sit amet, <strong>consectetur</strong> adipisicing elit. \n  <u>Underscored text</u> may be used for emphasis, along with <em>italicized text</em>.\n  Visit <a href="https://example.com" target="_blank" rel="noopener noreferrer">our website</a> for more info.\n</p>\n<h2>Consectetur adipisicing elit</h2>\n<p>\n  Lorem ipsum dolor sit amet, <strong>consectetur</strong> adipisicing elit. \n  <u>Underscored text</u> may be used for emphasis, along with <em>italicized text</em>.\n  Visit <a href="https://example.com" target="_blank" rel="noopener noreferrer">our website</a> for more info.\n</p>\n<h3>Sed do eiusmod tempor incididunt</h3>\n<p>\n  Lorem ipsum dolor sit amet, <strong>consectetur</strong> adipisicing elit. \n  <u>Underscored text</u> may be used for emphasis, along with <em>italicized text</em>.\n  Visit <a href="https://example.com" target="_blank" rel="noopener noreferrer">our website</a> for more info.\n</p>\n<h4>Ut labore et dolore magna aliqua</h4>\n<p>\n  Lorem ipsum dolor sit amet, <strong>consectetur</strong> adipisicing elit. \n  <u>Underscored text</u> may be used for emphasis, along with <em>italicized text</em>.\n  Visit <a href="https://example.com" target="_blank" rel="noopener noreferrer">our website</a> for more info.\n</p>\n<h5>Ut enim ad minim veniam</h5>\n<p>\n  Lorem ipsum dolor sit amet, <strong>consectetur</strong> adipisicing elit. \n  <u>Underscored text</u> may be used for emphasis, along with <em>italicized text</em>.\n  Visit <a href="https://example.com" target="_blank" rel="noopener noreferrer">our website</a> for more info.\n</p>\n<h6>Quis nostrud exercitation ullamco</h6>\n<p>\n  Lorem ipsum dolor sit amet, <strong>consectetur</strong> adipisicing elit. \n  <u>Underscored text</u> may be used for emphasis, along with <em>italicized text</em>.\n  Visit <a href="https://example.com" target="_blank" rel="noopener noreferrer">our website</a> for more info.\n</p>\n<ul>\n  <li>Lorem ipsum <strong>consectetur</strong> adipisicing elit. sit amet</li>\n  <li>Consectetur <a href="https://example.com" target="_blank" rel="noopener noreferrer">our website</a> elit</li>\n  <li>Sed do <u>Underscored text</u> tempor</li>\n</ul>\n<p>\n  Lorem ipsum dolor sit amet, <strong>consectetur</strong> adipisicing elit. \n  <u>Underscored text</u> may be used for emphasis, along with <em>italicized text</em>.\n  Visit <a href="https://example.com" target="_blank" rel="noopener noreferrer">our website</a> for more info.\n</p>\n<ol>\n  <li>Lorem ipsum <strong>consectetur</strong> adipisicing elit. sit amet</li>\n  <li>Consectetur <a href="https://example.com" target="_blank" rel="noopener noreferrer">our website</a> elit</li>\n  <li>Sed do <u>Underscored text</u> tempor</li>\n</ol>'
              }
            />
          </Column>
        </Row>
      </GridItem>
      <GridItem
        bg={'dark'}
        tag={'footer'}
        rows={{ default: [3] }}
        columns={{ default: [1, 3] }}
      >
        <Row
          height={{ default: 'parent-fullscreen' }}
          padding={{
            left: { default: 6 },
            right: { default: 6 }
          }}
          align={{
            default: 'center'
          }}
        >
          <Column
            padding={{
              left: { default: 6 },
              right: { default: 6 }
            }}
          >
            <Typography
              tag={'span'}
              display={{ default: 'block' }}
              textAlign={{ default: 'center' }}
              size={'body-xxlrg'}
              text={'Footer'}
              color={'light'}
              fontWeight={'bold'}
            />
          </Column>
        </Row>
      </GridItem>
    </Grid>
  )
}

export const Primary: Story = {
  render: renderPrimary
}
