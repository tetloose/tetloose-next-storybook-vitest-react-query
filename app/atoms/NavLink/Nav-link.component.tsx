import { forwardRef } from 'react'
import Link from 'next/link'
import { Typography } from '@foundations/Typography/Typography.component'
import type { NavLinkProps } from './Nav-link.types'

export const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  (
    {
      modifiers = [],
      variant = 'dark',
      to = '',
      rel = 'noreferrer',
      target = '_self',
      title,
      typography,
      children,
      ...rest
    },
    ref
  ) => {
    const { display = { default: 'inline-block' } } = typography || {}

    return (
      <Typography
        modifiers={[...modifiers]}
        tag={'span'}
        linkVariant={variant}
        {...typography}
        display={display}
      >
        <Link ref={ref} href={to} rel={rel} target={target} {...rest}>
          {title}
          {children && children}
        </Link>
      </Typography>
    )
  }
)

NavLink.displayName = 'NavLink'
