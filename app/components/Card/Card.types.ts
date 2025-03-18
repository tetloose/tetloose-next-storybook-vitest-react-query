import type { ContentButton } from '@atoms/Button/Button.types'
import type { ImageContent } from '@atoms/Image/Image.types'
import type { ContentLink } from '@atoms/NavLink/Nav-link.types'
import type { GlobalModifiers } from '@global/global.types'

export type CardProps = {
  image: ImageContent
  title: string
  body: string
  button?: ContentButton
  link?: ContentLink
  loading: boolean
} & GlobalModifiers

export type CardContent = Pick<CardProps, 'image' | 'title' | 'body' | 'link'>
