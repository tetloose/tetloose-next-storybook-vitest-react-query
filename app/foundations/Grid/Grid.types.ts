import type { WheelEventHandler } from 'react'
import type { BreakpointHeight } from '@utils/get-breakpoints/get-breakpoints.types'
import type { ColumnProps, RowProps } from './utils/get-styles.types'
import type {
  GlobalBg,
  GlobalChildren,
  GlobalModifiers,
  Tags
} from '@global/global.types'

export type GridProps = {
  tag?: Tags
  rows: RowProps
  columns: ColumnProps
  horizontalScroll?: boolean
  onWheelHandler?: WheelEventHandler<HTMLDivElement>
} & GlobalModifiers &
  GlobalBg &
  BreakpointHeight &
  GlobalChildren
