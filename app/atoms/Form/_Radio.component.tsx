import { forwardRef } from 'react'
import { Spacer } from '@foundations/Spacer/Spacer.component'
import { Label } from './_Label.component'
import type { RadioCheckboxProps } from './Form.types'
import cs from 'classnames'
import styles from './Form.module.scss'

export const Radio = forwardRef<HTMLInputElement, RadioCheckboxProps>(
  (
    {
      modifiers = [],
      color = 'dark',
      label,
      padding,
      margin,
      error = false,
      ...rest
    },
    ref
  ) => {
    return (
      <Spacer display={{ default: 'block' }} padding={padding} margin={margin}>
        <Label
          modifiers={[
            styles['form__radio'],
            styles[`is-${color}`],
            error ? styles['has-error'] : '',
            ...modifiers
          ]}
          color={color}
          error={error}
          label={{ ...label }}
        >
          <input
            ref={ref}
            type={'radio'}
            className={cs(styles['form__radio-input'])}
            {...rest}
          />
        </Label>
      </Spacer>
    )
  }
)

Radio.displayName = 'Radio'
