import type { Border } from '@utils/get-border/get-border.types'
import type { BreakpointTextAlign } from '@utils/get-breakpoints/get-breakpoints.types'
import type { TypographyProps } from '@foundations/Typography/Typography.types'
import type {
  GlobalBg,
  GlobalChildren,
  GlobalModifiers
} from '@global/global.types'

type TableTags = 'thead' | 'tbody' | 'tfoot' | 'tr' | 'th' | 'td'

type VerticalAlign = 'top' | 'middle' | 'bottom' | 'baseline'

type Layout = 'auto' | 'fixed'

type BorderCollapse = 'collapse' | 'separate'

type Hide = {
  hide?: boolean
}

type SharedProps = GlobalModifiers & GlobalChildren & GlobalBg & Hide & Border

export type TableProps = {
  layout?: Layout
  borderCollapse?: BorderCollapse
  verticalAlign?: VerticalAlign
} & SharedProps

export type TiProps = {
  tag?: TableTags
  sectionTitle?: string
} & SharedProps &
  BreakpointTextAlign

export type TableTitleProps = Omit<
  TypographyProps,
  'tag' | 'display' | 'richText'
>
