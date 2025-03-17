import type { WheelEvent } from 'react'
import { useCallback } from 'react'

export const useHorizontalScroll = () => {
  const handleHorizontalScroll = useCallback(
    (event: WheelEvent<HTMLDivElement>) => {
      const { currentTarget, deltaY } = event
      const container = currentTarget as HTMLDivElement

      container.scrollLeft += deltaY
    },
    []
  )

  return handleHorizontalScroll
}
