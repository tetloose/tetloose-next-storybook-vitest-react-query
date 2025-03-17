import { createElement, forwardRef } from 'react'
import { getBorder } from '@utils/get-border/get-border.utils'
import { getBreakpoints } from '@utils/get-breakpoints/get-breakpoints.utils'
import type { TiProps } from './Table.types'
import cs from 'classnames'
import styles from './Table.module.scss'

export const Ti = forwardRef<HTMLElement, TiProps>(
  (
    {
      modifiers = [],
      tag = 'td',
      bg,
      border,
      borderColor,
      textAlign,
      hide,
      children,
      ...rest
    },
    ref
  ) => {
    if (hide) return null

    const textAligns = getBreakpoints('text-align', textAlign)
    const borders = borderColor && getBorder(border, borderColor)

    return createElement(
      tag,
      {
        className: cs(
          styles['ti'],
          styles[tag],
          bg && styles[`bg-${bg}`],
          ...(textAligns.map((textAlign) => styles[textAlign]) || []),
          ...((borders && borders.map((border) => styles[border])) || []),
          ...modifiers
        ),
        ref,
        ...rest
      },
      children && children
    )
  }
)

Ti.displayName = 'Ti'
