import { calcGrid } from './calc-grid.utils'
import type {
  Column,
  ColumnProps,
  GetStyles,
  Row,
  RowProps
} from './get-styles.types'
import { mediaQueries } from '@global/global.constants'

export const getStyles = ({
  className,
  rows,
  columns,
  template
}: GetStyles): string => {
  const rowStyles = rows
    ? (Object.entries(rows) as [keyof RowProps, Row | undefined][]).map(
        ([key, value]) =>
          key && value
            ? key === 'default'
              ? template
                ? `grid-template-rows: ${calcGrid({ rows: value, template })};`
                : `grid-row: ${calcGrid({ rows: value, template })};`
              : template
                ? `@media only screen and (min-width: ${mediaQueries[key]}) { grid-template-rows: ${calcGrid({ rows: value, template })}; }`
                : `@media only screen and (min-width: ${mediaQueries[key]}) { grid-row: ${calcGrid({ rows: value, template })}; }`
            : []
      )
    : []

  const columnStyles = columns
    ? (
        Object.entries(columns) as [keyof ColumnProps, Column | undefined][]
      ).map(([key, value]) =>
        key && value
          ? key === 'default'
            ? template
              ? `grid-template-columns: ${calcGrid({ columns: value, template })};`
              : `grid-column: ${calcGrid({ columns: value, template })};`
            : template
              ? `@media only screen and (min-width: ${mediaQueries[key]}) { grid-template-columns: ${calcGrid({ columns: value, template })}; }`
              : `@media only screen and (min-width: ${mediaQueries[key]}) { grid-column: ${calcGrid({ columns: value, template })}; }`
          : []
      )
    : []

  return `
    .${className} {
      ${rowStyles && rowStyles.length > 0 && rowStyles.join('\n')}
      ${columnStyles && columnStyles.length > 0 && columnStyles.join('\n')}
    }
  `
}
