import type { Meta, StoryObj } from '@storybook/react'
import { Column } from '@foundations/Row/Column.component'
import { Row } from '@foundations/Row/Row.component'
import { Typography } from '@foundations/Typography/Typography.component'
import { Icon } from './Icon.component'
import type { IconNames } from './Icon.types'

const meta: Meta<typeof Icon> = {
  title: 'Foundations/Icon',
  component: Icon,
  parameters: {
    design: {
      type: 'figma',
      url: ''
    }
  }
}

export default meta
type Story = StoryObj<typeof Icon>

const renderIcons = () => {
  const icons: IconNames[] = ['happy', 'angry']

  return (
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
      >
        {icons.map((icon) => (
          <Typography
            key={icon}
            display={{ default: 'block' }}
            textTransform={'capitalize'}
            fontWeight={'bold'}
            size={'body-med'}
            tag={'span'}
            padding={{ default: 6 }}
            text={icon}
          >
            <br />
            <Icon name={icon} size={'sml'} />
            <Icon name={icon} size={'med'} />
            <Icon name={icon} size={'lrg'} />
            <Icon name={icon} size={'xlrg'} />
            <Icon name={icon} size={'xxlrg'} />
          </Typography>
        ))}
      </Column>
    </Row>
  )
}

export const Icons: Story = {
  render: renderIcons
}
