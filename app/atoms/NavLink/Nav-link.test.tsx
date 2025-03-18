import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { AppProvider } from '@context/App/App.context'
import {
  queryClient,
  QueryClientProvider
} from '@hooks/Query/query-client.hooks'
import { NavLink } from './Nav-link.component'

describe('NavLink component', () => {
  it('renders NavLink component with a modifier', () => {
    const { container } = render(
      <QueryClientProvider client={queryClient}>
        <AppProvider>
          <NavLink
            modifiers={['test-modifier']}
            to={'http://google.com'}
            title={'NavLink'}
          />
        </AppProvider>
      </QueryClientProvider>
    )

    const element = container.querySelector('.test-modifier')

    expect(element?.classList.contains('test-modifier')).toBe(true)
  })
})
