import type { ApiUrlProps } from '@crud/Api/api-url.types'

export type UseReadProps = {
  queryKey?: string
  queryRefetch?: number | false
  enableQuery?: boolean
} & Pick<ApiUrlProps, 'url' | 'resource' | 'params'>
