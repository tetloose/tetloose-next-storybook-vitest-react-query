import { forwardRef } from 'react'
import { Spacer } from '@foundations/Spacer/Spacer.component'
import type { InputProps } from './Form.types'
import cs from 'classnames'
import styles from './Form.module.scss'

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      modifiers = [],
      color = 'dark',
      type = 'text',
      padding,
      margin,
      error = false,
      ...rest
    },
    ref
  ) => {
    return (
      <Spacer display={{ default: 'block' }} padding={padding} margin={margin}>
        <input
          ref={ref}
          type={type}
          className={cs(
            styles['form__input'],
            styles[`is-${color}`],
            error && styles['has-error'],
            ...modifiers
          )}
          {...rest}
        />
      </Spacer>
    )
  }
)

Input.displayName = 'Input'
