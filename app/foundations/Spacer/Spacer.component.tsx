import { forwardRef } from 'react'
import { getBreakpoints } from '@utils/get-breakpoints/get-breakpoints.utils'
import type { SpacerProps } from './Spacer.types'
import cs from 'classnames'
import styles from './Spacer.module.scss'

export const Spacer = forwardRef<HTMLElement, SpacerProps>(
  ({ modifiers = [], display, margin, padding, children, ...rest }, ref) => {
    const paddings = getBreakpoints('padding', padding)
    const margins = getBreakpoints('margin', margin)
    const displays = getBreakpoints('display', display)

    return (
      <span
        ref={ref}
        className={cs(
          styles['spacer'],
          ...(displays.map((display) => styles[display]) || []),
          ...((paddings && paddings.map((padding) => styles[padding])) || []),
          ...((margins && margins.map((margin) => styles[margin])) || []),
          ...modifiers
        )}
        {...rest}
      >
        {children && children}
      </span>
    )
  }
)

Spacer.displayName = 'Spacer'
