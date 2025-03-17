import type { Ref } from 'react'
import { forwardRef } from 'react'
import Link from 'next/link'
import { getBreakpoints } from '@utils/get-breakpoints/get-breakpoints.utils'
import type { ButtonProps } from './Button.types'
import cs from 'classnames'
import styles from './Button.module.scss'

export const Button = forwardRef<HTMLElement, ButtonProps>(
  (
    {
      modifiers = [],
      variant,
      align,
      justify,
      width,
      to,
      rel,
      target,
      label,
      type = 'button',
      children,
      ...rest
    },
    ref
  ) => {
    const aligns = getBreakpoints('align', align)
    const justifys = getBreakpoints('justify', justify)
    const widths = getBreakpoints('width', width)

    const classNames = [
      styles['button'],
      variant && styles[`is-${variant}`],
      ...(aligns.map((align) => styles[align]) || []),
      ...(justifys.map((justify) => styles[justify]) || []),
      ...(widths.map((width) => styles[width]) || []),
      ...modifiers
    ]

    if (to) {
      return (
        <Link
          ref={ref as Ref<HTMLAnchorElement>}
          href={to}
          rel={rel ? rel : 'noreferrer'}
          target={target ? target : '_self'}
          className={cs(...classNames)}
          {...rest}
        >
          {label && label}
          {children && children}
        </Link>
      )
    } else {
      return (
        <button
          ref={ref as Ref<HTMLButtonElement>}
          className={cs(...classNames)}
          type={type}
          {...rest}
        >
          {label && label}
          {children && children}
        </button>
      )
    }
  }
)

Button.displayName = 'Button'
