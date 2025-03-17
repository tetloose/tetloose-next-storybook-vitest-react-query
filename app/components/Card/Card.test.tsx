import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { AppProvider } from '@context/App/App.context'
import { Card } from './Card.component'
import Desktop from '@images/test/desktop.jpg'

describe('Card component', () => {
  it('renders Card component with a modifier', () => {
    render(
      <AppProvider>
        <Card
          data-testid='element'
          modifiers={['test-modifier']}
          image={{ src: Desktop }}
          title={'Title'}
          body={'body'}
          loading={false}
        />
      </AppProvider>
    )

    const element = screen.getByTestId('element')
    const { classList } = element

    expect(classList.contains('test-modifier')).toBe(true)
  })
})
