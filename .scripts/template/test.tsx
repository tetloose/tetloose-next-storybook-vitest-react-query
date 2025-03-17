import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { AppProvider } from '@context/App/App.context'
import { EXPORT_NAME } from './COMPONENT_NAME.component'

describe('EXPORT_NAME component', () => {
  it('renders EXPORT_NAME component with a modifier', () => {
    render(
      <AppProvider>
        <EXPORT_NAME data-testid='element' modifiers={['test-modifier']} />
      </AppProvider>
    )

    const element = screen.getByTestId('element')
    const { classList } = element

    expect(classList.contains('test-modifier')).toBe(true)
  })
})
