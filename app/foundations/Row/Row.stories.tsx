import type { Meta, StoryObj } from '@storybook/react'
import { Typography } from '@foundations/Typography/Typography.component'
import { Column } from './Column.component'
import { Row } from './Row.component'

type TextProps = {
  text?: string
  bg: '#ff6969' | '#7bff69' | '#69b4ff' | '#ffdc69' | '#ff69b4'
}

const Text = ({ text, bg = '#69b4ff' }: TextProps) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100px',
      backgroundColor: bg
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

const meta: Meta<typeof Row> = {
  title: 'Foundations/Row',
  component: Row,
  parameters: {
    design: {
      type: 'figma',
      url: ''
    },
    layout: 'fullscreen'
  }
}

export default meta

type ColumnStory = StoryObj<typeof Row>

export const Size: ColumnStory = {
  render: () => (
    <>
      <Row>
        <Column>
          <Text bg={'#ffdc69'} text={'Full width'} />
        </Column>
      </Row>
      <Row>
        <Column width={{ default: 'auto' }}>
          <Text bg={'#ff69b4'} text={'Auto Width'} />
        </Column>
      </Row>
      <Row>
        <Column width={{ default: 1 }}>
          <Text bg={'#ffdc69'} text={'1'} />
        </Column>
      </Row>
      <Row>
        <Column width={{ default: 2 }}>
          <Text bg={'#ff69b4'} text={'2'} />
        </Column>
      </Row>
      <Row>
        <Column width={{ default: 3 }}>
          <Text bg={'#ffdc69'} text={'3'} />
        </Column>
      </Row>
      <Row>
        <Column width={{ default: 4 }}>
          <Text bg={'#ff69b4'} text={'4'} />
        </Column>
      </Row>
      <Row>
        <Column width={{ default: 5 }}>
          <Text bg={'#ffdc69'} text={'5'} />
        </Column>
      </Row>
      <Row>
        <Column width={{ default: 6 }}>
          <Text bg={'#ff69b4'} text={'6'} />
        </Column>
      </Row>
      <Row>
        <Column width={{ default: 7 }}>
          <Text bg={'#ffdc69'} text={'7'} />
        </Column>
      </Row>
      <Row>
        <Column width={{ default: 8 }}>
          <Text bg={'#ff69b4'} text={'8'} />
        </Column>
      </Row>
      <Row>
        <Column width={{ default: 9 }}>
          <Text bg={'#ffdc69'} text={'9'} />
        </Column>
      </Row>
      <Row>
        <Column width={{ default: 10 }}>
          <Text bg={'#ff69b4'} text={'10'} />
        </Column>
      </Row>
      <Row>
        <Column width={{ default: 11 }}>
          <Text bg={'#ffdc69'} text={'11'} />
        </Column>
      </Row>
      <Row>
        <Column width={{ default: 12 }}>
          <Text bg={'#ff69b4'} text={'12'} />
        </Column>
      </Row>
    </>
  )
}

export const Breakpoints: ColumnStory = {
  render: () => (
    <Row>
      <Column
        width={{
          default: 6,
          sml: 4,
          med: 6,
          lrg: 8,
          xlrg: 10,
          xxlrg: 12
        }}
      >
        <Text
          bg={'#ff69b4'}
          text={'default: 6, sml: 4, med: 6, lrg: 8, xlrg: 10, xxlrg: 12'}
        />
      </Column>
      <Column
        width={{
          default: 6,
          sml: 8,
          med: 6,
          lrg: 4,
          xlrg: 2,
          xxlrg: 12
        }}
      >
        <Text
          bg={'#ffdc69'}
          text={'default: 6, sml: 8, med: 6, lrg: 4, xlrg: 2, xxlrg: 12'}
        />
      </Column>
    </Row>
  )
}

export const Gutter: ColumnStory = {
  render: () => (
    <Row
      padding={{
        left: { default: 6 },
        right: { default: 6 }
      }}
    >
      <Column
        padding={{
          left: { default: 6, lrg: 10 },
          right: { default: 6, lrg: 10 }
        }}
        width={{ default: 6 }}
      >
        <Text bg={'#ff69b4'} text={'Left Column'} />
      </Column>
      <Column
        padding={{
          left: { default: 6, lrg: 10 },
          right: { default: 6, lrg: 10 }
        }}
        width={{ default: 6 }}
      >
        <Text bg={'#ffdc69'} text={'Right Column'} />
      </Column>
    </Row>
  )
}

export const Layout: ColumnStory = {
  render: () => (
    <Row tag={'main'}>
      <Column tag={'header'}>
        <Text bg={'#69b4ff'} text={'Header'} />
      </Column>
      <Column
        tag={'aside'}
        width={{
          med: 4
        }}
      >
        <Text bg={'#7bff69'} text={'Sidebar'} />
      </Column>
      <Column
        tag={'section'}
        width={{
          med: 8
        }}
      >
        <Text bg={'#ff6969'} text={'Content'} />
      </Column>
      <Column tag={'footer'}>
        <Text bg={'#ff69b4'} text={'Footer'} />
      </Column>
    </Row>
  )
}
