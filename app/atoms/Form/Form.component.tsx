import { forwardRef } from 'react'
import { Column } from '@foundations/Row/Column.component'
import { Row } from '@foundations/Row/Row.component'
import { Button } from '@atoms/Button/Button.component'
import type { FormProps } from './Form.types'
import cs from 'classnames'
import styles from './Form.module.scss'

export const Form = forwardRef<HTMLFormElement, FormProps>(
  ({ modifiers = [], inputs, children, ...rest }, ref) => {
    const { columnOptions, submitButton, resetButton } = inputs || {}

    return (
      <form ref={ref} className={cs(styles['form'], ...modifiers)} {...rest}>
        {children && children}
        {inputs && (
          <Row tag={'span'}>
            <Column tag={'span'} {...columnOptions}>
              {submitButton && <Button {...submitButton} type={'submit'} />}
              {resetButton && <Button {...resetButton} type={'reset'} />}
            </Column>
          </Row>
        )}
      </form>
    )
  }
)

Form.displayName = 'Form'
