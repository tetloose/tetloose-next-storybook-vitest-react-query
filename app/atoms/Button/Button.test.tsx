import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Button } from './Button.component'

describe('Button', () => {
  it('renders button with correct label', () => {
    const label = 'Click me'
    render(<Button label={label} />)

    const buttonElement = screen.getByRole('button')

    expect(buttonElement).toBeInTheDocument()
    expect(buttonElement).toHaveAttribute('type', 'button')
  })
})
