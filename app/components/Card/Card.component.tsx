import { forwardRef } from 'react'
import { Column } from '@foundations/Row/Column.component'
import { Row } from '@foundations/Row/Row.component'
import { Spacer } from '@foundations/Spacer/Spacer.component'
import { Typography } from '@foundations/Typography/Typography.component'
import { Button } from '@atoms/Button/Button.component'
import { Image } from '@atoms/Image/Image.component'
import { Loading } from '@atoms/Loading/Loading.component'
import { NavLink } from '@atoms/NavLink/Nav-link.component'
import type { CardProps } from './Card.types'

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    { modifiers = [], image, title, body, button, link, loading, ...rest },
    ref
  ) => {
    return (
      <Row
        ref={ref}
        tag={'article'}
        modifiers={[...modifiers]}
        bg={'dark'}
        border={{
          top: { default: true },
          right: { default: true },
          bottom: { default: true },
          left: { default: true }
        }}
        borderColor={'light'}
        padding={{
          top: { default: 10 },
          right: { default: 10 },
          bottom: { default: 10 },
          left: { default: 10 }
        }}
        {...rest}
      >
        <Column>
          {loading ? (
            <Loading center={true} />
          ) : (
            <>
              {image && <Image {...image} alt={image.alt} />}
              {title && (
                <Typography
                  tag={'h2'}
                  size={'h2'}
                  padding={{ default: 6 }}
                  color={'light'}
                  fontWeight={'bold'}
                  text={title}
                />
              )}
              {body && (
                <Typography
                  padding={{ default: 4 }}
                  tag={'p'}
                  size={'body-med'}
                  color={'light'}
                  text={body}
                />
              )}
              {(button || link) && (
                <Spacer
                  display={{
                    default: 'block'
                  }}
                  padding={{
                    default: 6
                  }}
                >
                  {button && <Button {...button} />}
                  {link && <NavLink {...link} />}
                </Spacer>
              )}
            </>
          )}
        </Column>
      </Row>
    )
  }
)

Card.displayName = 'Card'
