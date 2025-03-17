import type { ButtonHTMLAttributes } from 'react'
import type { NavLinkProps } from 'react-router-dom'
import type {
  BreakpointFlexAlign,
  BreakpointJustify,
  Breakpoints
} from '@utils/get-breakpoints/get-breakpoints.types'
import type { GlobalChildren, GlobalModifiers } from '@global/global.types'

type ButtonVariant = 'primary' | 'secondary'

type ButtonType = 'button' | 'submit' | 'reset'

type Width = 'auto' | 'full'

export type ButtonWidth = {
  width?: {
    [key in Breakpoints]?: Width
  }
}

export type ButtonProps = {
  variant?: ButtonVariant
  type?: ButtonType
  label?: string
  to?: string
} & ButtonHTMLAttributes<HTMLElement> &
  Omit<NavLinkProps, 'title' | 'to'> &
  BreakpointFlexAlign &
  BreakpointJustify &
  GlobalModifiers &
  ButtonWidth &
  GlobalChildren

export type ContentButton = ButtonProps
