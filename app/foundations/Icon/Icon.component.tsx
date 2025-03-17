import { forwardRef } from 'react'
import type { IconProps } from './Icon.types'
import cs from 'classnames'
import styles from './Icon.module.scss'

export const Icon = forwardRef<HTMLElement, IconProps>(
  ({ modifiers = [], name, size = 'med', color, ...rest }, ref) => {
    return (
      <i
        ref={ref}
        className={cs(
          styles['icon'],
          styles[name],
          styles[`is-${size}`],
          color && styles[color],
          ...modifiers
        )}
        {...rest}
      />
    )
  }
)

Icon.displayName = 'Icon'
