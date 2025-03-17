'use client'

import { useEffect, useState } from 'react'
import {
  type QueryFunctionContext,
  useInfiniteQuery
} from '@tanstack/react-query'
import { useNotification } from '@hooks/Notification/use-notification.hooks'
import { apiUrl } from '@crud/Api/api-url.crud'
import { apiQueryKey } from '@crud/Api/api-urls'
import { request } from '@crud/Request/request.crud'
import type { UsePaginationProps } from './use-pagination.types'

export const usePagination = ({
  url,
  method = 'GET',
  resource,
  params,
  pages = 1,
  queryKey,
  queryRefetch = 0,
  enabled = true
}: UsePaginationProps) => {
  const [page, setPage] = useState(pages)
  const notify = useNotification()

  const fetchPosts = async ({
    pageParam = pages
  }: QueryFunctionContext<string[], number>) => {
    return await request({
      url: apiUrl({ url, resource, params, page: pageParam }) as string,
      method
    })
  }

  const handleNextPage = () => page < pages && setPage(page + 1)

  const {
    data,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
    error,
    refetch
  } = useInfiniteQuery({
    queryKey: [queryKey || apiQueryKey[url]],
    queryFn: fetchPosts,
    initialPageParam: 0,
    getNextPageParam: () => (page < pages ? page + 1 : undefined),
    refetchInterval: queryRefetch,
    enabled
  })

  useEffect(() => {
    fetchNextPage()
  }, [page, fetchNextPage])

  useEffect(() => {
    if (error) notify(error, 'error')
  }, [error, notify])

  return {
    data,
    hasNextPage,
    isFetchingNextPage,
    handleNextPage,
    page,
    error,
    refetch
  }
}
