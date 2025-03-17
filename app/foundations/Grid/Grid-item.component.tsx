'use client'

import type { WheelEvent } from 'react'
import { useEffect, useId, useMemo, useState } from 'react'
import { createPortal } from 'react-dom'
import { useHorizontalScroll } from '@hooks/Scroll/use-horizontal-scroll.hooks'
import { getClassName } from './utils/get-class-name.utils'
import { getStyles } from './utils/get-styles.utils'
import type { GridProps } from './Grid.types'
import cs from 'classnames'
import styles from './Grid.module.scss'

export const GridItem = ({
  modifiers = [],
  tag = 'section',
  rows,
  columns,
  bg,
  horizontalScroll,
  onWheelHandler,
  children,
  ...rest
}: GridProps) => {
  const id = useId()
  const Element = tag
  const handleHorizontalScroll = useHorizontalScroll()
  const className = getClassName(styles['grid__item'], id)
  const [mounted, setMounted] = useState(false)

  const inlineStyles = useMemo(
    () =>
      getStyles({
        className,
        rows,
        columns,
        template: false
      }),
    [rows, columns, className]
  )

  const handleOnWheel = (event: WheelEvent<HTMLDivElement>) => {
    if (horizontalScroll) handleHorizontalScroll(event)

    if (onWheelHandler) onWheelHandler(event)
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      {mounted && createPortal(<style>{inlineStyles}</style>, document.body)}
      <Element
        className={cs(
          styles['grid__item'],
          bg && styles[`bg-${bg}`],
          className,
          ...modifiers
        )}
        onWheel={handleOnWheel}
        {...rest}
      >
        {children}
      </Element>
    </>
  )
}
