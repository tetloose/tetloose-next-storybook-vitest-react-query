// import { MemoryRouter } from 'react-router-dom'
import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { AppProvider } from '@context/App/App.context'
import {
  queryClient,
  QueryClientProvider
} from '@hooks/Query/query-client.hooks'
import { Logo } from './Logo.component'

describe('Logo component', () => {
  it('renders Logo component with a modifier', () => {
    const { container } = render(
      <QueryClientProvider client={queryClient}>
        {/* <MemoryRouter> */}
        <AppProvider>
          <Logo modifiers={['test-modifier']} />
        </AppProvider>
        {/* </MemoryRouter> */}
      </QueryClientProvider>
    )

    const element = container.querySelector('.test-modifier')

    expect(element?.classList.contains('test-modifier')).toBe(true)
  })
})
