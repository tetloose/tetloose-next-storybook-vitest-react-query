import type { EXPORT_NAMEProps } from './COMPONENT_NAME.types'
import cs from 'classnames'
import styles from './COMPONENT_NAME.module.scss'

export const EXPORT_NAME = ({
  variants,
  modifiers = [],
  children,
  ...rest
}: EXPORT_NAMEProps) => {
  return (
    <div
      className={cs(
        styles['CLASS_NAME'],
        variants && variants.map((variant) => styles[variant]),
        ...modifiers
      )}
      {...rest}
    >
      Happy Coding!
      {children && children}
    </div>
  )
}
