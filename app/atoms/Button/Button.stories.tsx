import { action } from '@storybook/addon-actions'
import type { Meta, StoryObj } from '@storybook/react'
import { useNotification } from '@hooks/Notification/use-notification.hooks'
import { Column } from '@foundations/Row/Column.component'
import { Row } from '@foundations/Row/Row.component'
import { Button } from './Button.component'
import type { ButtonProps } from './Button.types'

const RenderButton = (args: ButtonProps) => {
  const notify = useNotification()

  const handleClick = () => {
    notify('Button Clicked', 'success')
  }

  return <Button {...args} onClick={handleClick} />
}

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    design: {
      type: 'figma',
      url: ''
    }
  },
  argTypes: {
    onClick: { action: 'clicked' }
  }
}

export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    label: 'No Style',
    onClick: action('No Style Button Clicked')
  }
}

export const Children: Story = {
  args: {
    label: 'No Style With Children',
    onClick: action('No Style With Children Button Clicked'),
    children: (
      <>
        <br />
        <span>Child</span>
      </>
    )
  }
}
export const Buttons: Story = {
  render: () => (
    <Row>
      <Column
        display={{ default: 'flex' }}
        gap={{ default: 6 }}
        direction={{ default: 'column', med: 'row' }}
        padding={{ top: { default: 6 } }}
        align={{ med: 'center' }}
        justify={{ med: 'center' }}
      >
        <RenderButton
          variant={'primary'}
          justify={{ default: 'center' }}
          align={{ default: 'center' }}
          width={{ default: 'full', med: 'auto' }}
          label={'Primary'}
        />
        <RenderButton
          variant={'primary'}
          justify={{ default: 'center' }}
          align={{ default: 'center' }}
          width={{ default: 'full', med: 'auto' }}
          label={'Primary Disabled'}
          disabled={true}
        />
        <RenderButton
          variant={'primary'}
          justify={{ default: 'center' }}
          align={{ default: 'center' }}
          width={{ default: 'full', med: 'auto' }}
          to={'https://google.com'}
          label={'Primary Link'}
        />
        <RenderButton
          variant={'secondary'}
          justify={{ default: 'center' }}
          align={{ default: 'center' }}
          width={{ default: 'full', med: 'auto' }}
          label={'Secondary'}
        />
        <RenderButton
          variant={'secondary'}
          justify={{ default: 'center' }}
          align={{ default: 'center' }}
          width={{ default: 'full', med: 'auto' }}
          to={'https://google.com'}
          label={'Secondary Link'}
        />
        <RenderButton
          variant={'secondary'}
          justify={{ default: 'center' }}
          align={{ default: 'center' }}
          width={{ default: 'full', med: 'auto' }}
          label={'Secondary Disabled'}
          disabled={true}
        />
      </Column>
    </Row>
  )
}
