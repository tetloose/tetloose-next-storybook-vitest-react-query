export type Row = (number | string)[]

export type Column = number[]

export type RowProps = {
  default?: Row
  sml?: Row
  med?: Row
  lrg?: Row
  xlrg?: Row
  xxlrg?: Row
}

export type ColumnProps = {
  default?: Column
  sml?: Column
  med?: Column
  lrg?: Column
  xlrg?: Column
  xxlrg?: Column
}

export type GetStyles = {
  className: string
  rows?: RowProps
  columns?: ColumnProps
  template: boolean
}
