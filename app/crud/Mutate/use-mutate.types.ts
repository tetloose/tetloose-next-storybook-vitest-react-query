import type { ApiUrls } from '@crud/Api/api-url.types'
import type { Methods } from '@crud/Request/request.types'

export type UseMutateProps = {
  url: ApiUrls
  resource?: string
  params?: string
  method: Methods
  queryKey?: string
}

export type HttpStatus = {
  status: number
  message: string
}
