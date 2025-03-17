import type { KeyboardEvent } from 'react'

export const useEscape = () => {
  const handleEscape = (event: KeyboardEvent, action: () => void) => {
    const { key } = event

    event.stopPropagation()

    if (key === 'Escape') action()
  }

  return handleEscape
}
