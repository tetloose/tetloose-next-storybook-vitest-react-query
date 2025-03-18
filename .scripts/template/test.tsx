import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { AppProvider } from '@context/App/App.context'
import {
  queryClient,
  QueryClientProvider
} from '@hooks/Query/query-client.hooks'
import { EXPORT_NAME } from './COMPONENT_NAME.component'

describe('EXPORT_NAME component', () => {
  it('renders EXPORT_NAME component with a modifier', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <AppProvider>
          <EXPORT_NAME data-testid='element' modifiers={['test-modifier']} />
        </AppProvider>
      </QueryClientProvider>
    )

    const element = screen.getByTestId('element')
    const { classList } = element

    expect(classList.contains('test-modifier')).toBe(true)
  })
})
