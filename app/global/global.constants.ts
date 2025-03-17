import type { Breakpoints } from '@utils/get-breakpoints/get-breakpoints.types'
import type { Directions } from '@global/global.types'

export const breakpoints: Breakpoints[] = [
  'default',
  'sml',
  'med',
  'lrg',
  'xlrg',
  'xxlrg'
]

export const mediaQueries = {
  sml: '420px',
  med: '768px',
  lrg: '1080px',
  xlrg: '1440px',
  xxlrg: '1920px'
}

export const directions: Directions[] = ['top', 'right', 'bottom', 'left']

export const transitionDuration = {
  slow: 600,
  med: 400,
  fast: 200
}
