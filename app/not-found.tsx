import dynamic from 'next/dynamic'

const NotFound = dynamic(() => import('@layouts/Not-found/Not-found.component'))

export default function NotFoundPage() {
  return <NotFound />
}
