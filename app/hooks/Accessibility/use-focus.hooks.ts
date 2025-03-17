import type { RefObject } from 'react'

export const useFocus = () => {
  const focusElement = (element: RefObject<HTMLElement>, duration = 100) => {
    const timeout = setTimeout(() => {
      const { current } = element

      if (current) current.focus()
    }, duration)

    return () => clearTimeout(timeout)
  }

  return focusElement
}
