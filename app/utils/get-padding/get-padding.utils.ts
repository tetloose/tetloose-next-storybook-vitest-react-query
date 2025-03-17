import type { Padding } from './get-padding.types'
import { breakpoints, directions } from '@global/global.constants'

export const getPadding = (padding: Padding['padding']): string[] =>
  padding && directions && breakpoints
    ? directions.flatMap((direction) =>
        padding[direction]
          ? breakpoints.flatMap((breakpoint) =>
              padding[direction] && padding[direction][breakpoint] !== null
                ? [
                    `${breakpoint}-padding-${direction}-${padding[direction][breakpoint]}`
                  ]
                : []
            )
          : []
      )
    : []
