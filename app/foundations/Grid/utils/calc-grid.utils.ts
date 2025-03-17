import type { CalcGrid } from './calc-grid.types'

export const calcGrid = ({ rows, columns, template }: CalcGrid): string =>
  rows
    ? template
      ? rows
          .map((row) => (typeof row === 'string' ? row : `${row}fr`))
          .join(' ')
      : rows
          .map((row, rowIndex) => (rowIndex > 0 ? `/ ${row}` : `${row}`))
          .join(' ')
    : columns
      ? template
        ? columns.map((column) => `${column}fr`).join(' ')
        : columns
            .map((column, columnIndex) =>
              columnIndex > 0 ? `/ ${column}` : `${column}`
            )
            .join(' ')
      : ''
