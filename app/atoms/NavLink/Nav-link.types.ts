import type { LinkProps } from 'next/link'
import type { TypographyProps } from '@foundations/Typography/Typography.types'
import type {
  Color,
  GlobalChildren,
  GlobalModifiers
} from '@global/global.types'

export type NavLinkProps = {
  to?: string
  rel?: string
  target?: string
  title?: string
  variant?: Color
  typography?: Omit<
    TypographyProps,
    'modifiers' | 'tag' | 'richtext' | 'color' | 'text' | 'linkVariant'
  >
} & GlobalModifiers &
  GlobalChildren &
  Omit<LinkProps, 'href'>

export type ContentLink = NavLinkProps
