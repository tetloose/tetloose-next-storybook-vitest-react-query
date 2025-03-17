import type { Border } from '@utils/get-border/get-border.types'
import type {
  BreakpointDirection,
  BreakpointDisplay,
  BreakpointFlexAlign,
  BreakpointFlexWrap,
  BreakpointGap,
  BreakpointHeight,
  BreakpointJustify,
  BreakpointWidth
} from '@utils/get-breakpoints/get-breakpoints.types'
import type { Padding } from '@utils/get-padding/get-padding.types'
import type {
  GlobalBg,
  GlobalChildren,
  GlobalHtmlTag,
  GlobalModifiers
} from '@global/global.types'

type SharedProps = GlobalChildren &
  GlobalModifiers &
  Padding &
  BreakpointHeight &
  GlobalHtmlTag &
  GlobalBg &
  Border &
  BreakpointDisplay &
  BreakpointFlexAlign &
  BreakpointJustify &
  BreakpointFlexWrap &
  BreakpointDirection

export type RowProps = SharedProps

export type ColumnProps = SharedProps & BreakpointGap & BreakpointWidth
