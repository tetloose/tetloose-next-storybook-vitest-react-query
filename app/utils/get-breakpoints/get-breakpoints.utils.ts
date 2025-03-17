import { breakpoints } from '@global/global.constants'

export const getBreakpoints = <T>(attribute: string, values: T): string[] =>
  values && breakpoints
    ? breakpoints.flatMap((breakpoint) =>
        values[breakpoint as keyof T] !== undefined
          ? [`${breakpoint}-${attribute}-${values[breakpoint as keyof T]}`]
          : []
      )
    : []
