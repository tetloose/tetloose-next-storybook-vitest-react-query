'use client'

import { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useNotification } from '@hooks/Notification/use-notification.hooks'
import { apiUrl } from '@crud/Api/api-url.crud'
import { apiQueryKey } from '@crud/Api/api-urls'
import { request } from '@crud/Request/request.crud'
import type { UseReadProps } from './use-read.types'

export const useRead = ({
  url,
  resource,
  params,
  queryKey,
  queryRefetch = false,
  enableQuery
}: UseReadProps) => {
  const notify = useNotification()

  const { data, isPending, isFetching, isSuccess, error, refetch } = useQuery({
    queryKey: [queryKey || apiQueryKey[url]],
    queryFn: async () => {
      return await request({
        url: apiUrl({
          url,
          resource,
          params
        }) as string,
        method: 'GET'
      })
    },
    refetchInterval: queryRefetch,
    enabled: enableQuery
  })

  useEffect(() => {
    if (error) notify(error, 'error')
  }, [error, notify])

  return {
    data,
    isPending,
    isFetching,
    isSuccess,
    error,
    refetch
  }
}
