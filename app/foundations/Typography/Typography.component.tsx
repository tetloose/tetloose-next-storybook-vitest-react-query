import { createElement, forwardRef } from 'react'
import { getBreakpoints } from '@utils/get-breakpoints/get-breakpoints.utils'
import { Spacer } from '@foundations/Spacer/Spacer.component'
import { RichText } from './_Rich-text.component'
import type { TypographyProps } from './Typography.types'
import cs from 'classnames'
import styles from './Typography.module.scss'

export const Typography = forwardRef<HTMLElement, TypographyProps>(
  (
    {
      modifiers = [],
      tag = 'span',
      padding,
      margin,
      size,
      linkVariant = 'dark',
      color = 'dark',
      fontWeight,
      display,
      fontStyle,
      textTransform,
      whiteSpace,
      textAlign,
      text,
      richText,
      children,
      ...rest
    },
    ref
  ) => {
    const displays = getBreakpoints('display', display)
    const whiteSpaces = getBreakpoints('white-space', whiteSpace)
    const textAligns = getBreakpoints('text-align', textAlign)

    const element =
      !richText && tag
        ? createElement(
            tag,
            {
              className: cs(
                styles['typography'],
                !richText && tag && (tag === 'ol' || tag === 'ul')
                  ? styles[tag]
                  : '',
                !richText && size ? styles[size] : '',
                ...(displays.map((display) => styles[display]) || []),
                ...(whiteSpaces.map((whiteSpace) => styles[whiteSpace]) || []),
                ...(textAligns.map((textAlign) => styles[textAlign]) || []),
                fontWeight ? styles[`font-weight-${fontWeight}`] : '',
                fontStyle ? styles[`font-style-${fontStyle}`] : '',
                textTransform ? styles[`text-transform-${textTransform}`] : '',
                styles[`link-color-${linkVariant}`],
                styles[`color-${color}`],
                ...modifiers
              ),
              ref,
              ...rest
            },
            tag === 'ol' || tag === 'ul' ? (
              <>
                {text && text}
                {children && children}
              </>
            ) : (
              <Spacer
                display={{ default: 'inline-block' }}
                padding={padding}
                margin={margin}
              >
                {text && text}
                {children && children}
              </Spacer>
            )
          )
        : undefined

    return richText ? (
      <RichText
        ref={ref}
        modifiers={modifiers}
        padding={padding}
        margin={margin}
        linkVariant={linkVariant}
        color={color}
        display={display}
        textAlign={textAlign}
        richText={richText}
        {...rest}
      />
    ) : tag === 'ol' || tag === 'ul' ? (
      <Spacer display={{ default: 'block' }} padding={padding} margin={margin}>
        {element}
      </Spacer>
    ) : (
      element
    )
  }
)

Typography.displayName = 'Typography'
