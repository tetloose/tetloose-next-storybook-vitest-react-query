import type { SubmitHandler } from 'react-hook-form'
import { useForm } from 'react-hook-form'
import type { Meta, StoryObj } from '@storybook/react'
import { useNotification } from '@hooks/Notification/use-notification.hooks'
import { Typography } from '@foundations/Typography/Typography.component'
import { Checkbox } from './_Checkbox.component'
import { Input } from './_Input.component'
import { Label } from './_Label.component'
import { Radio } from './_Radio.component'
import { Select } from './_Select.component'
import { Textarea } from './_Textarea.component'
import { Form } from './Form.component'
import type { Options } from './Form.types'
import type { Color } from '@global/global.types'

const meta: Meta<typeof Form> = {
  title: 'Atoms/Form',
  component: Form,
  parameters: {
    design: {
      type: 'figma',
      url: ''
    }
  }
}

export default meta

type Story = StoryObj<typeof Form>

const RenderForm = ({ color }: { color: Color }) => {
  type Inputs = {
    username: string
    password: string
    message: string
    colors: string
    accept: string
    favouriteColor: string
  }

  const defaultValues: Inputs = {
    username: '',
    password: '',
    message: '',
    colors: '',
    accept: '',
    favouriteColor: ''
  }

  const notify = useNotification()

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isValid }
  } = useForm<Inputs>({ defaultValues })

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (!data) return

    const { favouriteColor, username, password, message, colors, accept } = data

    if (favouriteColor) notify(`favouriteColor: ${favouriteColor}`, 'success')

    if (username) notify(`username: ${username}`, 'success')

    if (password) notify(`password: ${password}`, 'success')

    if (password) notify(`message: ${message}`, 'success')

    if (colors) notify(`colors: ${colors}`, 'success')

    if (accept) notify(`accept: ${accept && 'accepted'}`, 'success')

    reset()
  }

  const handleReset = () => {
    notify('Form Reset', 'success')

    reset()
  }

  const {
    favouriteColor: favouriteColorError,
    username: usernameError,
    password: passwordError,
    colors: colorsError,
    message: messageError,
    accept: acceptError
  } = errors

  const selectOptions: Options[] = [
    {
      text: 'What is your favourite color',
      value: ''
    },
    {
      text: 'Blue',
      value: 'blue'
    },
    {
      text: 'Green',
      value: 'green'
    },
    {
      text: 'Hotpink',
      value: 'hotpink'
    }
  ]

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      onReset={handleReset}
      inputs={{
        columnOptions: {
          display: {
            default: 'flex'
          },
          gap: {
            default: 6
          },
          justify: { default: 'flex-end' },
          padding: {
            top: {
              default: 6
            }
          }
        },
        submitButton: {
          variant: 'primary',
          label: 'Submit',
          disabled: !isValid
        },
        resetButton: {
          variant: 'secondary',
          label: 'reset'
        }
      }}
    >
      <Label
        color={color}
        htmlFor={'favouriteColor'}
        label={{
          text: `Favourite Color${favouriteColorError ? ': (required)' : ''}`,
          size: 'body-med',
          fontWeight: 'medium'
        }}
        error={!!favouriteColorError}
      />
      <Select
        padding={{ default: 2 }}
        color={color}
        id={'favouriteColor'}
        options={selectOptions}
        error={!!favouriteColorError}
        {...register('favouriteColor', { required: true })}
      />
      <Label
        padding={{ default: 6 }}
        color={color}
        htmlFor={'username'}
        label={{
          text: `Username${usernameError ? ': (required)' : ''}`,
          size: 'body-med',
          fontWeight: 'medium'
        }}
        error={!!usernameError}
      />
      <Input
        padding={{ default: 2 }}
        color={color}
        placeholder={'Username'}
        id={'username'}
        error={!!usernameError}
        {...register('username', { required: true })}
      />
      <Label
        padding={{ default: 6 }}
        color={color}
        htmlFor={'password'}
        label={{
          text: `Password${passwordError ? ': (required)' : ''}`,
          size: 'body-med',
          fontWeight: 'medium'
        }}
        error={!!passwordError}
      />
      <Input
        padding={{ default: 2 }}
        color={color}
        type={'password'}
        placeholder={'Password'}
        id={'password'}
        error={!!passwordError}
        {...register('password', { required: true })}
      />
      <Label
        padding={{ default: 6 }}
        color={color}
        htmlFor={'yellow'}
        label={{
          text: `Select Color${colorsError ? ': (required)' : ''}`,
          size: 'body-med',
          fontWeight: 'medium'
        }}
        error={!!colorsError}
      />
      <Radio
        padding={{ default: 2 }}
        color={color}
        htmlFor={'yellow'}
        id={'yellow'}
        value={'yellow'}
        label={{
          text: 'Yellow',
          size: 'body-med'
        }}
        error={!!colorsError}
        {...register('colors', { required: true })}
      />
      <Radio
        padding={{ default: 2 }}
        color={color}
        htmlFor={'blue'}
        id={'blue'}
        value={'blue'}
        label={{
          text: 'Blue',
          size: 'body-med'
        }}
        error={!!colorsError}
        {...register('colors', { required: true })}
      />
      <Radio
        padding={{ default: 2 }}
        color={color}
        htmlFor={'green'}
        id={'green'}
        value={'green'}
        label={{
          text: 'Green',
          size: 'body-med'
        }}
        error={!!colorsError}
        {...register('colors', { required: true })}
      />
      <Label
        padding={{ default: 6 }}
        color={color}
        htmlFor={'message'}
        label={{
          text: `Message${messageError ? ': (required)' : ''}`,
          size: 'body-med',
          fontWeight: 'medium'
        }}
        error={!!messageError}
      />
      <Textarea
        padding={{ default: 2 }}
        color={color}
        placeholder={'Enter your message'}
        id={'message'}
        error={!!messageError}
        {...register('message', { required: true })}
      />
      <Label
        padding={{ default: 6 }}
        color={color}
        htmlFor={'accept'}
        label={{
          text: `Accept ${acceptError ? ': (required)' : ''}`,
          size: 'body-med',
          fontWeight: 'medium'
        }}
        error={!!acceptError}
      />
      <Checkbox
        padding={{ default: 2 }}
        color={color}
        htmlFor={'accept'}
        id={'accept'}
        value={'true'}
        label={{
          text: 'Accept',
          size: 'body-med'
        }}
        error={!!acceptError}
        {...register('accept', { required: true })}
      />
      <Typography
        tag={'p'}
        color={color}
        size={'body-sml'}
        padding={{ default: 10 }}
        richText={`<p>Watch Favourite Color: ${watch('favouriteColor') ? watch('favouriteColor') : ''}<br />
          Watch Username: ${watch('username') ? watch('username') : ''}<br />
          Watch Password: ${watch('password') ? watch('password') : ''}<br />
          Watch Colors: ${watch('colors') ? watch('colors') : ''}<br />
          Watch Message: ${watch('message') ? watch('message') : ''}<br />
          Watch Accept: ${watch('accept') ? watch('accept') : ''}</p>`}
      />
    </Form>
  )
}

export const Dark: Story = {
  render: () =>
    RenderForm({
      color: 'dark'
    })
}

export const Light: Story = {
  parameters: {
    backgrounds: {
      default: 'Dark'
    }
  },
  render: () =>
    RenderForm({
      color: 'light'
    })
}
