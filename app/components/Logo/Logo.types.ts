import type { ImageProps } from '@atoms/Image/Image.types'
import type { LinkProps } from '@atoms/NavLink/NavLink.types'
import type { GlobalModifiers } from '@global/global.types'

export type LogoProps = GlobalModifiers

export type LogoContent = Omit<ImageProps, 'children'> & Pick<LinkProps, 'to'>
