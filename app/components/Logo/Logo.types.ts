import type { ImageProps } from '@atoms/Image/Image.types'
import type { NavLinkProps } from '@atoms/NavLink/Nav-link.types'
import type { GlobalModifiers } from '@global/global.types'

export type LogoProps = GlobalModifiers

export type LogoContent = Omit<ImageProps, 'children'> &
  Pick<NavLinkProps, 'to'>
