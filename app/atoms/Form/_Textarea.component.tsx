import { forwardRef } from 'react'
import { Spacer } from '@foundations/Spacer/Spacer.component'
import type { TextareaProps } from './Form.types'
import cs from 'classnames'
import styles from './Form.module.scss'

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    { modifiers = [], color = 'dark', padding, margin, error = false, ...rest },
    ref
  ) => {
    return (
      <Spacer display={{ default: 'block' }} padding={padding} margin={margin}>
        <textarea
          ref={ref}
          className={cs(
            styles['form__input'],
            styles['is-textarea'],
            styles[`is-${color}`],
            error && styles['has-error'],
            ...modifiers
          )}
          {...rest}
        />
      </Spacer>
    )
  }
)

Textarea.displayName = 'Textarea'
