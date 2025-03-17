import { forwardRef } from 'react'
import { Spacer } from '@foundations/Spacer/Spacer.component'
import { Typography } from '@foundations/Typography/Typography.component'
import type { LabelProps } from './Form.types'
import cs from 'classnames'
import styles from './Form.module.scss'

export const Label = forwardRef<HTMLLabelElement, LabelProps>(
  (
    {
      modifiers = [],
      color = 'dark',
      label,
      padding,
      margin,
      error = false,
      children,
      ...rest
    },
    ref
  ) => (
    <Spacer display={{ default: 'block' }} padding={padding} margin={margin}>
      <label ref={ref} className={cs(...modifiers)} {...rest}>
        {label && (
          <Typography
            modifiers={[
              styles['form__label'],
              styles[`is-${color}`],
              error ? styles['has-error'] : ''
            ]}
            tag={'span'}
            color={color}
            {...label}
          />
        )}
        {children && children}
      </label>
    </Spacer>
  )
)

Label.displayName = 'Label'
