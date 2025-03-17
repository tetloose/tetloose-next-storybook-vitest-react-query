'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 300000
    }
  }
})

const clearQueryCache = () => {
  queryClient.clear()
}

export { queryClient, QueryClientProvider, clearQueryCache }
