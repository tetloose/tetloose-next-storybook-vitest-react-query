import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { AppProvider } from '@context/App/App.context'
import {
  queryClient,
  QueryClientProvider
} from '@hooks/Query/query-client.hooks'
import { Card } from './Card.component'
import Desktop from '@images/test/desktop.jpg'

describe('Card component', () => {
  it('renders Card component with a modifier', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <AppProvider>
          <Card
            data-testid='element'
            modifiers={['test-modifier']}
            image={{ src: Desktop.src }}
            title={'Title'}
            body={'body'}
            loading={false}
          />
        </AppProvider>
      </QueryClientProvider>
    )

    const element = screen.getByTestId('element')
    const { classList } = element

    expect(classList.contains('test-modifier')).toBe(true)
  })
})
