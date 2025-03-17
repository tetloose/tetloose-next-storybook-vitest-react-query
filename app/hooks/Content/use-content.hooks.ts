'use client'

import { useEffect, useState } from 'react'
import { useRead } from '@crud/Read/use-read.crud'
import type { Content, ContentProps, ContentReturn } from './use-content.types'

export const useContent = <K extends keyof Content>(
  filter: K
): ContentReturn<K> => {
  const [content, setContent] = useState<ContentProps<Content, K> | null>(null)
  const {
    data,
    isPending: contentPending,
    isFetching: contentFetching,
    isSuccess: contentSuccess,
    error: contentError,
    refetch: contentRefetch
  } = useRead({
    url: 'content',
    queryKey: 'contentData'
  })

  useEffect(() => {
    if (!data) return

    if (contentSuccess) {
      if (data[filter] !== undefined) {
        setContent(data[filter] as ContentProps<Content, K>)
      }
    }
  }, [data, filter, contentSuccess])

  return {
    content,
    contentPending,
    contentFetching,
    contentSuccess,
    contentError,
    contentRefetch
  }
}
