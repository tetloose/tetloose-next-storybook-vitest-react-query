import type { ApiUrls } from '@crud/Api/api-url.types'
import type { RequestMethod } from '@crud/Request/request.types'

export type UsePaginationProps = {
  url: ApiUrls
  method?: RequestMethod
  resource?: string
  params?: string
  pages?: number
  queryKey?: string
  queryRefetch?: number
  enabled?: boolean
}
