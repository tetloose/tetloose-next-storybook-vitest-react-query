'use client'

import { useEffect, useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { useNotification } from '@hooks/Notification/use-notification.hooks'
import { queryClient } from '@hooks/Query/query-client.hooks'
import { apiUrl } from '@crud/Api/api-url.crud'
import { apiQueryKey } from '@crud/Api/api-urls'
import { request } from '@crud/Request/request.crud'
import type { HttpStatus, UseMutateProps } from './use-mutate.types'

export const useMutate = ({
  url,
  resource,
  params,
  method,
  queryKey
}: UseMutateProps) => {
  const [errorMessage, setErrorMessage] = useState<HttpStatus>()
  const notify = useNotification()

  const mutateData = async (body: Record<string, unknown>) => {
    try {
      const response = await request({
        url: apiUrl({ url, resource, params }) as string,
        method,
        body
      })

      return response
    } catch (error) {
      setErrorMessage(error as HttpStatus)

      throw error
    }
  }

  const mutation = useMutation({
    mutationFn: mutateData,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [queryKey || apiQueryKey[url]]
      })
    },
    onError: (error: HttpStatus) => {
      setErrorMessage(error)
    }
  })

  const { isPending, isSuccess, error } = mutation

  useEffect(() => {
    if (!errorMessage) return

    const { status, message } = errorMessage

    if (status && message) notify(`${status}, ${message}`, 'error')
  }, [errorMessage, notify])

  return {
    isPending,
    isSuccess,
    error,
    mutation
  }
}
