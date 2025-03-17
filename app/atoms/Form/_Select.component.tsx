import { forwardRef } from 'react'
import { Spacer } from '@foundations/Spacer/Spacer.component'
import type { SelectProps } from './Form.types'
import cs from 'classnames'
import styles from './Form.module.scss'

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      modifiers = [],
      color = 'dark',
      options,
      padding,
      margin,
      error = false,
      ...rest
    },
    ref
  ) => {
    if (!options) return

    return (
      <Spacer display={{ default: 'block' }} padding={padding} margin={margin}>
        <span className={cs(styles['form__select'], styles[`is-${color}`])}>
          <select
            ref={ref}
            className={cs(
              styles['form__input'],
              color && styles[`is-${color}`],
              error && styles['has-error'],
              ...modifiers
            )}
            {...rest}
          >
            {options.map(({ text, ...restOptions }, optionIndex) => (
              <option key={optionIndex} {...restOptions}>
                {text}
              </option>
            ))}
          </select>
        </span>
      </Spacer>
    )
  }
)

Select.displayName = 'Select'
