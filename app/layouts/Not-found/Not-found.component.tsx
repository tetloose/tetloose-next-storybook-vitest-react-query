'use client'

import { useAnimate } from '@hooks/Animate/use-animate.hooks'
import { GridItem } from '@foundations/Grid/Grid-item.component'
import { Column } from '@foundations/Row/Column.component'
import { Row } from '@foundations/Row/Row.component'
import { Typography } from '@foundations/Typography/Typography.component'
import { Button } from '@atoms/Button/Button.component'
import { Loading } from '@atoms/Loading/Loading.component'
import { useNotFoundContent } from './hooks/use-not-found-content.hooks'
import type { NotFoundProps } from './Not-found.types'

const NotFound = ({ error }: NotFoundProps) => {
  const animation = useAnimate()
  const {
    contentFetching,
    contentPending,
    title,
    subtitle,
    homeLink,
    errorButton
  } = useNotFoundContent()
  const { message = '', name = '', stack = '' } = error || {}

  const handleClick = () => {
    if (error) window.location.reload()
  }

  return (
    <GridItem
      modifiers={['animate', animation]}
      rows={{ default: [2] }}
      columns={{ default: [1] }}
    >
      <Row
        align={{
          default: 'center'
        }}
        justify={{ default: 'center' }}
        padding={{
          left: { default: 6 },
          right: { default: 6 }
        }}
        height={{
          default: error ? 'viewport-fullscreen' : 'parent-fullscreen'
        }}
      >
        <Column
          width={{
            med: error ? 8 : 6
          }}
          border={{
            top: { default: true },
            right: { default: true },
            bottom: { default: true },
            left: { default: true }
          }}
          borderColor={'dark'}
          padding={{
            top: { default: 6 },
            right: { default: 6 },
            bottom: { default: 6 },
            left: { default: 6 }
          }}
        >
          {contentFetching || contentPending ? (
            <Loading center={true} />
          ) : (
            <>
              <Typography
                textAlign={{ default: !error ? 'center' : 'left' }}
                tag={'h1'}
                size={'h1'}
                text={name ? name : title}
              />
              <Typography
                tag={'p'}
                size={'body-med'}
                textAlign={{ default: !error ? 'center' : 'left' }}
                padding={{ default: 4 }}
                text={message ? message : subtitle}
              />
              {stack && (
                <Typography
                  tag={'p'}
                  size={'body-med'}
                  fontStyle={'italic'}
                  padding={{ default: 4 }}
                  text={stack}
                />
              )}
              <Row>
                <Column
                  display={{ default: 'flex' }}
                  align={{ default: !error ? 'center' : 'flex-start' }}
                  justify={{ default: !error ? 'center' : 'flex-start' }}
                  padding={{ top: { default: 8 } }}
                >
                  {error ? (
                    <Button {...errorButton} onClick={handleClick} />
                  ) : (
                    <Button {...homeLink} />
                  )}
                </Column>
              </Row>
            </>
          )}
        </Column>
      </Row>
    </GridItem>
  )
}

export default NotFound
