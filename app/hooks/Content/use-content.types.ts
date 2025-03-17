import type { QueryObserverResult } from '@tanstack/react-query'
import type { CardContent } from '@components/Card/Card.types'
import type { LogoContent } from '@components/Logo/Logo.types'
import type { NotFoundContent } from '@layouts/Not-found/Not-found.types'

export type Content = {
  homepage: CardContent[]
  logo: LogoContent
  notFound: NotFoundContent
}

export type ContentProps<T, K extends keyof T> = K extends keyof T
  ? T[K]
  : never

export type ContentReturn<K extends keyof Content> = {
  content: ContentProps<Content, K> | null
  contentPending: boolean
  contentFetching: boolean
  contentSuccess: boolean
  contentError: Error | null
  contentRefetch: () => Promise<QueryObserverResult<void, Error>>
}
