import type { Meta, StoryObj } from '@storybook/react'
import { Column } from '@foundations/Row/Column.component'
import { Row } from '@foundations/Row/Row.component'
import { Typography } from '@foundations/Typography/Typography.component'
import { Spacer } from './Spacer.component'

const Text = ({ odd, text }: { odd?: boolean; text: string }) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100px',
      backgroundColor: odd ? '#7bff69' : '#ff69b4'
    }}
  >
    <Typography
      tag={'span'}
      display={{ default: 'block' }}
      color={'dark'}
      size={'body-med'}
      textAlign={{ default: 'center' }}
      text={text}
    />
  </div>
)

const meta: Meta<typeof Spacer> = {
  title: 'Foundations/Spacer',
  component: Spacer,
  parameters: {
    design: {
      type: 'figma',
      url: ''
    },
    layout: 'fullscreen'
  }
}

export default meta

type Story = StoryObj<typeof Spacer>

export const Padding: Story = {
  render: () => (
    <Row
      align={{
        default: 'center'
      }}
      justify={{ default: 'center' }}
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
        width={{
          med: 8
        }}
      >
        <Spacer display={{ default: 'block' }} padding={{ default: 1 }}>
          <Text odd={true} text={'Padding 1'} />
        </Spacer>
        <Spacer display={{ default: 'block' }} padding={{ default: 2 }}>
          <Text text={'Padding 2'} />
        </Spacer>
        <Spacer display={{ default: 'block' }} padding={{ default: 3 }}>
          <Text odd={true} text={'Padding 3'} />
        </Spacer>
        <Spacer display={{ default: 'block' }} padding={{ default: 4 }}>
          <Text text={'Padding 4'} />
        </Spacer>
        <Spacer display={{ default: 'block' }} padding={{ default: 5 }}>
          <Text odd={true} text={'Padding 5'} />
        </Spacer>
        <Spacer display={{ default: 'block' }} padding={{ default: 6 }}>
          <Text text={'Padding 6'} />
        </Spacer>
        <Spacer display={{ default: 'block' }} padding={{ default: 7 }}>
          <Text odd={true} text={'Padding 7'} />
        </Spacer>
        <Spacer display={{ default: 'block' }} padding={{ default: 8 }}>
          <Text text={'Padding 8'} />
        </Spacer>
        <Spacer display={{ default: 'block' }} padding={{ default: 9 }}>
          <Text odd={true} text={'Padding 9'} />
        </Spacer>
        <Spacer display={{ default: 'block' }} padding={{ default: 10 }}>
          <Text text={'Padding 10'} />
        </Spacer>
      </Column>
    </Row>
  )
}

export const Margin: Story = {
  render: () => (
    <Row
      align={{
        default: 'center'
      }}
      justify={{ default: 'center' }}
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
        width={{
          med: 8
        }}
      >
        <Spacer display={{ default: 'block' }} margin={{ default: 1 }}>
          <Text odd={true} text={'Margin 1'} />
        </Spacer>
        <Spacer display={{ default: 'block' }} margin={{ default: 2 }}>
          <Text text={'Margin 2'} />
        </Spacer>
        <Spacer display={{ default: 'block' }} margin={{ default: 3 }}>
          <Text odd={true} text={'Margin 3'} />
        </Spacer>
        <Spacer display={{ default: 'block' }} margin={{ default: 4 }}>
          <Text text={'Margin 4'} />
        </Spacer>
        <Spacer display={{ default: 'block' }} margin={{ default: 5 }}>
          <Text odd={true} text={'Margin 5'} />
        </Spacer>
        <Spacer display={{ default: 'block' }} margin={{ default: 6 }}>
          <Text text={'Margin 6'} />
        </Spacer>
        <Spacer display={{ default: 'block' }} margin={{ default: 7 }}>
          <Text odd={true} text={'Margin 7'} />
        </Spacer>
        <Spacer display={{ default: 'block' }} margin={{ default: 8 }}>
          <Text text={'Margin 8'} />
        </Spacer>
        <Spacer display={{ default: 'block' }} margin={{ default: 9 }}>
          <Text odd={true} text={'Margin 9'} />
        </Spacer>
        <Spacer display={{ default: 'block' }} margin={{ default: 10 }}>
          <Text text={'Margin 10'} />
        </Spacer>
      </Column>
    </Row>
  )
}

export const Breakpoints: Story = {
  render: () => (
    <Row
      align={{
        default: 'center'
      }}
      justify={{ default: 'center' }}
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
        width={{
          med: 8
        }}
      >
        <Spacer
          display={{ default: 'block' }}
          padding={{
            default: 7,
            sml: 2,
            med: 4,
            lrg: 6,
            xlrg: 8,
            xxlrg: 10
          }}
        >
          <Text
            odd={true}
            text={'default: 7, sml: 2, med: 4, lrg: 6, xlrg: 8, xxlrg: 10'}
          />
        </Spacer>
      </Column>
      <Column
        padding={{
          left: { default: 6 },
          right: { default: 6 }
        }}
        width={{
          med: 8
        }}
      >
        <Spacer
          display={{ default: 'block' }}
          margin={{
            default: 7,
            sml: 2,
            med: 4,
            lrg: 6,
            xlrg: 8,
            xxlrg: 10
          }}
        >
          <Text
            text={'default: 7, sml: 2, med: 4, lrg: 6, xlrg: 8, xxlrg: 10'}
          />
        </Spacer>
      </Column>
    </Row>
  )
}
