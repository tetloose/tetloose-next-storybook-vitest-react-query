import type { KeyboardEvent } from 'react'

export const useTab = () => {
  const handleTab = (
    direction: 'forwards' | 'backwards',
    event: KeyboardEvent,
    action: () => void
  ) => {
    const { key, shiftKey } = event

    event.stopPropagation()

    if (
      (direction === 'forwards' && key === 'Tab' && !shiftKey) ||
      (direction === 'backwards' && key === 'Tab' && shiftKey)
    ) {
      action()
    }
  }

  return handleTab
}
