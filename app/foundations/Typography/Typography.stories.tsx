import type { Meta, StoryObj } from '@storybook/react'
import { Column } from '@foundations/Row/Column.component'
import { Row } from '@foundations/Row/Row.component'
import { Typography } from '@foundations/Typography/Typography.component'

const meta: Meta<typeof Typography> = {
  title: 'Foundations/Typography',
  component: Typography,
  parameters: {
    design: {
      type: 'figma',
      url: ''
    },
    layout: 'fullscreen'
  }
}

export default meta

type Story = StoryObj<typeof Typography>

export const Default: Story = {
  render: () => (
    <Row
      padding={{
        left: { default: 6 },
        right: { default: 6 }
      }}
    >
      <Column
        padding={{
          left: { default: 6 },
          right: { default: 6 }
        }}
        width={{ default: 6 }}
      >
        <Typography
          tag={'h1'}
          size={'h1'}
          text={'H1'}
          padding={{ default: 5 }}
        />
        <Typography
          tag={'h2'}
          size={'h2'}
          text={'H2'}
          padding={{ default: 5 }}
        />
        <Typography
          tag={'h3'}
          size={'h3'}
          text={'H3'}
          padding={{ default: 5 }}
        />
        <Typography
          tag={'h4'}
          size={'h4'}
          text={'H4'}
          padding={{ default: 5 }}
        />
        <Typography
          tag={'h5'}
          size={'h5'}
          text={'H5'}
          padding={{ default: 5 }}
        />
        <Typography
          tag={'h6'}
          size={'h6'}
          text={'H6'}
          padding={{ default: 5 }}
        />
        <Typography
          tag={'p'}
          size={'body-sml'}
          text={'Body sml'}
          padding={{ default: 5 }}
        />
        <Typography
          tag={'p'}
          size={'body-med'}
          text={'Body med'}
          padding={{ default: 5 }}
        />
        <Typography
          tag={'p'}
          size={'body-lrg'}
          text={'Body lrg'}
          padding={{ default: 5 }}
        />
        <Typography
          tag={'p'}
          size={'body-xlrg'}
          text={'Body xlrg'}
          padding={{ default: 5 }}
        />
        <Typography tag={'ul'}>
          <Typography
            tag={'li'}
            size={'body-med'}
            padding={{ default: 5 }}
            text={'Congue suscipit et velit amet felis adipiscing.'}
          />
          <Typography
            tag={'li'}
            size={'body-med'}
            padding={{ default: 1 }}
            text={'Congue suscipit et velit amet felis adipiscing.'}
          />
          <Typography
            tag={'li'}
            size={'body-med'}
            padding={{ default: 1 }}
            text={'Congue suscipit et velit amet felis adipiscing.'}
          />
          <Typography
            tag={'li'}
            size={'body-med'}
            padding={{ default: 1 }}
            text={'Congue suscipit et velit amet felis adipiscing.'}
          />
        </Typography>
        <Typography tag={'ol'}>
          <Typography
            tag={'li'}
            size={'body-med'}
            padding={{ default: 5 }}
            text={'Congue suscipit et velit amet felis adipiscing.'}
          />
          <Typography
            tag={'li'}
            size={'body-med'}
            padding={{ default: 1 }}
            text={'Congue suscipit et velit amet felis adipiscing.'}
          />
          <Typography
            tag={'li'}
            size={'body-med'}
            padding={{ default: 1 }}
            text={'Congue suscipit et velit amet felis adipiscing.'}
          />
          <Typography
            tag={'li'}
            size={'body-med'}
            padding={{ default: 1 }}
            text={'Congue suscipit et velit amet felis adipiscing.'}
          />
        </Typography>
      </Column>
      <Column
        padding={{
          left: { default: 6 },
          right: { default: 6 }
        }}
        width={{ default: 6 }}
      >
        <Typography
          color={'dark'}
          linkVariant={'dark'}
          padding={{ default: 10 }}
          richText={
            '<h1>Lorem ipsum dolor sit amet</h1>\n<p>\n  Lorem ipsum dolor sit amet, <strong>consectetur</strong> adipisicing elit. \n  <u>Underscored text</u> may be used for emphasis, along with <em>italicized text</em>.\n  Visit <a href="https://example.com" target="_blank" rel="noopener noreferrer">our website</a> for more info.\n</p>\n<h2>Consectetur adipisicing elit</h2>\n<p>\n  Lorem ipsum dolor sit amet, <strong>consectetur</strong> adipisicing elit. \n  <u>Underscored text</u> may be used for emphasis, along with <em>italicized text</em>.\n  Visit <a href="https://example.com" target="_blank" rel="noopener noreferrer">our website</a> for more info.\n</p>\n<h3>Sed do eiusmod tempor incididunt</h3>\n<p>\n  Lorem ipsum dolor sit amet, <strong>consectetur</strong> adipisicing elit. \n  <u>Underscored text</u> may be used for emphasis, along with <em>italicized text</em>.\n  Visit <a href="https://example.com" target="_blank" rel="noopener noreferrer">our website</a> for more info.\n</p>\n<h4>Ut labore et dolore magna aliqua</h4>\n<p>\n  Lorem ipsum dolor sit amet, <strong>consectetur</strong> adipisicing elit. \n  <u>Underscored text</u> may be used for emphasis, along with <em>italicized text</em>.\n  Visit <a href="https://example.com" target="_blank" rel="noopener noreferrer">our website</a> for more info.\n</p>\n<h5>Ut enim ad minim veniam</h5>\n<p>\n  Lorem ipsum dolor sit amet, <strong>consectetur</strong> adipisicing elit. \n  <u>Underscored text</u> may be used for emphasis, along with <em>italicized text</em>.\n  Visit <a href="https://example.com" target="_blank" rel="noopener noreferrer">our website</a> for more info.\n</p>\n<h6>Quis nostrud exercitation ullamco</h6>\n<p>\n  Lorem ipsum dolor sit amet, <strong>consectetur</strong> adipisicing elit. \n  <u>Underscored text</u> may be used for emphasis, along with <em>italicized text</em>.\n  Visit <a href="https://example.com" target="_blank" rel="noopener noreferrer">our website</a> for more info.\n</p>\n<ul>\n  <li>Lorem ipsum <strong>consectetur</strong> adipisicing elit. sit amet</li>\n  <li>Consectetur <a href="https://example.com" target="_blank" rel="noopener noreferrer">our website</a> elit</li>\n  <li>Sed do <u>Underscored text</u> tempor</li>\n</ul>\n<p>\n  Lorem ipsum dolor sit amet, <strong>consectetur</strong> adipisicing elit. \n  <u>Underscored text</u> may be used for emphasis, along with <em>italicized text</em>.\n  Visit <a href="https://example.com" target="_blank" rel="noopener noreferrer">our website</a> for more info.\n</p>\n<ol>\n  <li>Lorem ipsum <strong>consectetur</strong> adipisicing elit. sit amet</li>\n  <li>Consectetur <a href="https://example.com" target="_blank" rel="noopener noreferrer">our website</a> elit</li>\n  <li>Sed do <u>Underscored text</u> tempor</li>\n</ol>'
          }
        />
      </Column>
    </Row>
  )
}
