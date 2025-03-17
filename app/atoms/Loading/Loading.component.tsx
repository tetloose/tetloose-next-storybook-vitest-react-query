import { forwardRef } from 'react'
import type { LoadingProps } from './Loading.types'
import cs from 'classnames'
import styles from './Loading.module.scss'

export const Loading = forwardRef<HTMLElement, LoadingProps>(
  ({ modifiers = [], color = 'dark', center, ...rest }, ref) => {
    return (
      <span
        ref={ref}
        className={cs(
          styles['loading'],
          styles[`color-${color}`],
          center && styles['is-center'],
          ...modifiers
        )}
        {...rest}
      />
    )
  }
)

Loading.displayName = 'Loading'
