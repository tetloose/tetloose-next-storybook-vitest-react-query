import type { Border } from './get-border.types'
import { breakpoints, directions } from '@global/global.constants'
import type { Color } from '@global/global.types'

export const getBorder = (border: Border['border'], color: Color): string[] =>
  border && directions && breakpoints
    ? directions.flatMap((direction) =>
        border[direction]
          ? breakpoints.flatMap((breakpoint) =>
              border[direction] && border[direction][breakpoint]
                ? [
                    `${breakpoint}-border-${direction}`,
                    `border-${direction}-${color}`
                  ]
                : border[direction] &&
                    border[direction][breakpoint] !== undefined
                  ? [`${breakpoint}-border-${direction}-none`]
                  : []
            )
          : []
      )
    : []
