import { forwardRef } from 'react'
import { getBorder } from '@utils/get-border/get-border.utils'
import type { TableProps } from './Table.types'
import cs from 'classnames'
import styles from './Table.module.scss'

export const Table = forwardRef<HTMLTableElement, TableProps>(
  (
    {
      modifiers = [],
      layout,
      borderCollapse,
      verticalAlign,
      bg,
      border,
      borderColor,
      hide,
      children,
      ...rest
    },
    ref
  ) => {
    if (hide) return null

    const borders = borderColor && getBorder(border, borderColor)

    return (
      <table
        ref={ref}
        className={cs(
          styles['table'],
          bg && styles[`bg-${bg}`],
          layout && styles[`table-layout-${layout}`],
          borderCollapse && styles[`table-border-${borderCollapse}`],
          verticalAlign && styles[`vertical-align-${verticalAlign}`],
          borders && borders.map((name) => styles[name]),
          ...modifiers
        )}
        {...rest}
      >
        {children && children}
      </table>
    )
  }
)

Table.displayName = 'Table'
