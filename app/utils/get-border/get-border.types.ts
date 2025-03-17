import type { Breakpoints } from '@utils/get-breakpoints/get-breakpoints.types'
import type { Color } from '@global/global.types'

export type BreakpointBorders = {
  [key in Breakpoints]?: boolean
}

export type Border = {
  border?: {
    top?: BreakpointBorders
    right?: BreakpointBorders
    bottom?: BreakpointBorders
    left?: BreakpointBorders
  }
  borderColor?: Color
}
