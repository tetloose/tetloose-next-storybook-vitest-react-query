import { forwardRef } from 'react'
import { Spacer } from '@foundations/Spacer/Spacer.component'
import { Label } from './_Label.component'
import type { RadioCheckboxProps } from './Form.types'
import cs from 'classnames'
import styles from './Form.module.scss'

export const Checkbox = forwardRef<HTMLInputElement, RadioCheckboxProps>(
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
            styles['form__checkbox'],
            color && styles[`is-${color}`],
            error ? styles['has-error'] : '',
            ...modifiers
          ]}
          color={color}
          error={error}
          label={{ ...label }}
        >
          <input
            ref={ref}
            type={'checkbox'}
            className={cs(styles['form__checkbox-input'])}
            {...rest}
          />
        </Label>
      </Spacer>
    )
  }
)

Checkbox.displayName = 'Checkbox'
