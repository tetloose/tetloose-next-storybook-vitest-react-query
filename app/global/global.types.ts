import type { ReactNode } from 'react'
import type { Size } from '@utils/get-breakpoints/get-breakpoints.types'

export type GlobalModifiers = {
  modifiers?: string[]
}

export type GlobalChildren = {
  children?: ReactNode | ReactNode[]
}

export type GlobalFontSize = {
  size?: Size
}

export type Color = 'dark' | 'light' | 'grey'

export type GlobalColor = {
  color?: Color
}

export type GlobalBg = {
  bg?: Color
}

export type Tags =
  | 'main'
  | 'div'
  | 'span'
  | 'section'
  | 'article'
  | 'footer'
  | 'header'
  | 'aside'

export type GlobalHtmlTag = {
  tag?: Tags
}

export type Directions = 'top' | 'right' | 'bottom' | 'left'
