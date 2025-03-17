import { forwardRef } from 'react'
import { getBorder } from '@utils/get-border/get-border.utils'
import { getBreakpoints } from '@utils/get-breakpoints/get-breakpoints.utils'
import { getPadding } from '@utils/get-padding/get-padding.utils'
import type { RowProps } from './Row.types'
import cs from 'classnames'
import styles from './Row.module.scss'

export const Row = forwardRef<HTMLDivElement, RowProps>(
  (
    {
      modifiers = [],
      tag = 'div',
      bg,
      border,
      borderColor,
      display = { default: 'flex' },
      align,
      direction,
      justify,
      wrap = { default: 'wrap' },
      padding,
      height,
      children,
      ...rest
    },
    ref
  ) => {
    const Element = tag
    const borders = borderColor && getBorder(border, borderColor)
    const displays = getBreakpoints('display', display)
    const aligns = getBreakpoints('align', align)
    const directions = getBreakpoints('direction', direction)
    const justifys = getBreakpoints('justify', justify)
    const wraps = getBreakpoints('wrap', wrap)
    const heights = getBreakpoints('height', height)
    const paddings = getPadding(padding)

    return (
      <Element
        ref={ref}
        className={cs(
          styles['row'],
          bg && styles[`bg-${bg}`],
          ...((borders && borders.map((border) => styles[border])) || []),
          ...(displays.map((display) => styles[display]) || []),
          ...(aligns.map((align) => styles[align]) || []),
          ...(directions.map((direction) => styles[direction]) || []),
          ...(wraps.map((wrap) => styles[wrap]) || []),
          ...(justifys.map((justify) => styles[justify]) || []),
          ...(heights.map((height) => styles[height]) || []),
          ...(paddings.map((padding) => styles[padding]) || []),
          ...modifiers
        )}
        {...rest}
      >
        {children && children}
      </Element>
    )
  }
)

Row.displayName = 'Row'
