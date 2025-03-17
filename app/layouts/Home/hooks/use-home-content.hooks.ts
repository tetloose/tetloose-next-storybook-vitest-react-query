import { useContent } from '@hooks/Content/use-content.hooks'

export const useHomeContent = () => {
  const {
    content,
    contentPending,
    contentFetching,
    contentSuccess,
    contentError
  } = useContent('homepage')

  return {
    content,
    contentPending,
    contentFetching,
    contentSuccess,
    contentError
  }
}
