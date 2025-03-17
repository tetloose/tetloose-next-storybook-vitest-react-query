import type { GlobalChildren, GlobalModifiers } from '@global/global.types'

type Variants = 'variant-1' | 'variant-2'

export type EXPORT_NAMEProps = {
  variants?: Variants[]
} & GlobalChildren &
  GlobalModifiers
