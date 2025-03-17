import type { ContentButton } from '@atoms/Button/Button.types'

export type NotFoundProps = {
  error?: {
    message?: string
    name?: string
    stack?: string
  }
}

export type NotFoundContent = {
  title: string
  subtitle: string
  homeLink: ContentButton
  errorButton: ContentButton
}
