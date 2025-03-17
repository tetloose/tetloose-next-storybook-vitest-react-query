import { useContent } from '@hooks/Content/use-content.hooks'

export const useNotFoundContent = () => {
  const {
    content,
    contentPending,
    contentFetching,
    contentSuccess,
    contentError
  } = useContent('notFound')
  const { title = '', subtitle = '', homeLink, errorButton } = content || {}

  return {
    content,
    contentPending,
    contentFetching,
    contentSuccess,
    contentError,
    title,
    subtitle,
    homeLink,
    errorButton
  }
}
