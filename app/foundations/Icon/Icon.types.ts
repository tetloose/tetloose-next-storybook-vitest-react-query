import type { HTMLAttributes } from 'react'
import type {
  GlobalColor,
  GlobalFontSize,
  GlobalModifiers
} from '@global/global.types'

export type IconNames = 'happy' | 'angry'

export type IconProps = {
  name: IconNames
} & HTMLAttributes<HTMLSpanElement> &
  GlobalModifiers &
  GlobalColor &
  GlobalFontSize
