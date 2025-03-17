import type {
  BreakpointImagePosition,
  BreakpointImageSize,
  BreakpointRatios
} from '@utils/get-breakpoints/get-breakpoints.types'
import type { GlobalModifiers } from '@global/global.types'

export type ImageProps = {
  src?: string
  desktop?: string
  tablet?: string
  mobile?: string
  placeholder?: string
  width?: number
  height?: number
  alt?: string
  blur?: boolean
} & BreakpointImageSize &
  BreakpointRatios &
  BreakpointImagePosition &
  GlobalModifiers

export type ImageContent = Omit<ImageProps, 'modifiers'>
