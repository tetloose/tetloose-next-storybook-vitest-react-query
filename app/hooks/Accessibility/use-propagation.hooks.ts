import type { KeyboardEvent, MouseEvent } from 'react'

export const usePropagation = () => {
  const handleMousePropagation = (event: MouseEvent) => {
    event.stopPropagation()
  }

  const handleKeyboardPropagation = (event: KeyboardEvent) => {
    event.stopPropagation()
  }

  const handleMousePreventDefault = (event: MouseEvent) => {
    event.stopPropagation()
  }

  return {
    handleMousePropagation,
    handleKeyboardPropagation,
    handleMousePreventDefault
  }
}
