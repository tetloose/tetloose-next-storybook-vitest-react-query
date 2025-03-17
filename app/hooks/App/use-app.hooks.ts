import { useAppContext } from '@context/App/App.context'

export const useApp = () => {
  const { app, updateApp } = useAppContext()
  const { welcome = '' } = app || {}

  return {
    app,
    updateApp,
    welcome
  }
}
