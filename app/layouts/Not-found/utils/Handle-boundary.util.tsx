import { lazy } from 'react'

const NotFound = lazy(() => import('@layouts/Not-found/Not-found.component'))

export const HandleBoundary = ({ error }: { error: Error }) => (
  <NotFound error={error} />
)
