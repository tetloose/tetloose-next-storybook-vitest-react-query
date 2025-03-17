import type { SpacerValues } from '@foundations/Spacer/Spacer.types'
export type Size = 'sml' | 'med' | 'lrg' | 'xlrg' | 'xxlrg'

export type Breakpoints = 'default' | Size

export type Width = 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

export type BreakpointWidth = {
  width?: {
    [key in Breakpoints]?: Width
  }
}

export type BreakpointSpacers = {
  [key in Breakpoints]?: SpacerValues
}

export type Display =
  | 'block'
  | 'inline'
  | 'inline-block'
  | 'flex'
  | 'inline-flex'

export type BreakpointDisplay = {
  display?: {
    [key in Breakpoints]?: Display
  }
}

export type FlexAlign =
  | 'flex-start'
  | 'center'
  | 'flex-end'
  | 'stretch'
  | 'baseline'

export type BreakpointFlexAlign = {
  align?: {
    [key in Breakpoints]?: FlexAlign
  }
}

export type Direction = 'row' | 'row-reverse' | 'column' | 'column-reverse'

export type BreakpointDirection = {
  direction?: {
    [key in Breakpoints]?: Direction
  }
}

export type Justify =
  | 'flex-start'
  | 'center'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'

export type BreakpointJustify = {
  justify?: {
    [key in Breakpoints]?: Justify
  }
}

export type Wrap = 'nowrap' | 'wrap' | 'wrap-reverse'

export type BreakpointFlexWrap = {
  wrap?: {
    [key in Breakpoints]?: Wrap
  }
}

export type Height = 'parent-fullscreen' | 'viewport-fullscreen'

export type BreakpointHeight = {
  height?: {
    [key in Breakpoints]?: Height
  }
}

export type ImageSize = 'cover' | 'contain'

export type BreakpointImageSize = {
  size?: {
    [key in Breakpoints]?: ImageSize
  }
}

export type Ratios = '1x1' | '3x2' | '16x9' | '21x9' | 'fullscreen'

export type BreakpointRatios = {
  ratio?: {
    [key in Breakpoints]?: Ratios
  }
}

export type ImagePosition =
  | 'center'
  | 'left-top'
  | 'left-center'
  | 'left-bottom'
  | 'right-top'
  | 'right-center'
  | 'right-bottom'
  | 'center-top'
  | 'center-bottom'

export type BreakpointImagePosition = {
  position?: {
    [key in Breakpoints]?: ImagePosition
  }
}

export type WhiteSpace =
  | 'nowrap'
  | 'pre'
  | 'pre-wrap'
  | 'pre-line'
  | 'break-spaces'

export type BreakpointWhiteSpace = {
  whiteSpace?: {
    [key in Breakpoints]?: WhiteSpace
  }
}

export type Align = 'left' | 'right' | 'center'

export type BreakpointTextAlign = {
  textAlign?: {
    [key in Breakpoints]?: Align
  }
}

export type BreakpointGap = {
  gap?: {
    [key in Breakpoints]?: SpacerValues
  }
}
