import { forwardRef } from 'react'
import { getBreakpoints } from '@utils/get-breakpoints/get-breakpoints.utils'
import { Spacer } from '@foundations/Spacer/Spacer.component'
import type { RichTextProps } from './Typography.types'
import styles from './Typography.module.scss'

export const RichText = forwardRef<HTMLElement, RichTextProps>(
  (
    {
      modifiers = [],
      padding,
      margin,
      linkVariant,
      color,
      display = { default: 'block' },
      textAlign,
      richText,
      ...rest
    },
    ref
  ) => {
    const textAligns = getBreakpoints('text-align', textAlign)

    return (
      <Spacer
        ref={ref}
        modifiers={[
          styles['typography'],
          styles['is-rich-text'],
          styles[`link-color-${linkVariant}`],
          color ? styles[`color-${color}`] : '',
          ...(textAligns.map((textAlign) => styles[textAlign]) || []),
          ...modifiers
        ]}
        display={display}
        padding={padding}
        margin={margin}
        {...(richText && {
          dangerouslySetInnerHTML: { __html: richText }
        })}
        {...rest}
      />
    )
  }
)

RichText.displayName = 'RichText'
