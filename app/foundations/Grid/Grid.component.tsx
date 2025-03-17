'use client'

import { useEffect, useId, useMemo, useState } from 'react'
import { createPortal } from 'react-dom'
import { getBreakpoints } from '@utils/get-breakpoints/get-breakpoints.utils'
import { getClassName } from './utils/get-class-name.utils'
import { getStyles } from './utils/get-styles.utils'
import type { GridProps } from './Grid.types'
import cs from 'classnames'
import styles from './Grid.module.scss'

export const Grid = ({
  modifiers = [],
  tag = 'main',
  bg,
  height,
  rows,
  columns,
  children,
  ...rest
}: GridProps) => {
  const id = useId()
  const Element = tag
  const className = getClassName(styles['grid'], id)
  const heights = getBreakpoints('height', height)
  const [mounted, setMounted] = useState(false)

  const inlineStyles = useMemo(
    () =>
      getStyles({
        className,
        rows,
        columns,
        template: true
      }),
    [rows, columns, className]
  )

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      {mounted && createPortal(<style>{inlineStyles}</style>, document.body)}

      <Element
        className={cs(
          styles['grid'],
          bg && styles[`bg-${bg}`],
          heights &&
            heights.length > 0 &&
            heights.map((height) => styles[height]),
          className,
          ...modifiers
        )}
        {...rest}
      >
        {children}
      </Element>
    </>
  )
}
