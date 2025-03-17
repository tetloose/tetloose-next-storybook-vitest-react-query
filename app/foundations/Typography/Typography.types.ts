import type {
  BreakpointDisplay,
  BreakpointTextAlign,
  BreakpointWhiteSpace
} from '@utils/get-breakpoints/get-breakpoints.types'
import type { Spacers } from '@foundations/Spacer/Spacer.types'
import type {
  Color,
  GlobalChildren,
  GlobalColor,
  GlobalModifiers
} from '@global/global.types'

export type FontStyles = {
  linkVariant?: Color
  fontWeight?: 'light' | 'regular' | 'medium' | 'bold'
  textTransform?: 'capitalize' | 'uppercase' | 'lowercase'
  fontStyle?: 'italic' | 'oblique'
}

export type TypographyTags =
  | 'span'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'em'
  | 'label'
  | 'time'
  | 'ul'
  | 'ol'
  | 'li'

type Size =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'body-xxlrg'
  | 'body-xlrg'
  | 'body-lrg'
  | 'body-med'
  | 'body-sml'

type SharedProps = {
  richText?: string
} & GlobalModifiers &
  GlobalColor &
  BreakpointWhiteSpace &
  BreakpointTextAlign &
  BreakpointDisplay &
  Spacers &
  FontStyles

export type TypographyProps = {
  tag?: TypographyTags
  size?: Size
  text?: string
} & GlobalChildren &
  SharedProps

export type RichTextProps = Omit<
  SharedProps,
  'fontWeight' | 'fontStyle' | 'textTransform' | 'whiteSpace'
>
