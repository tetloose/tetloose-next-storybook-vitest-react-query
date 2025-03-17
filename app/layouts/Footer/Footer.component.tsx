'use client'

import { useAnimate } from '@hooks/Animate/use-animate.hooks'
import { GridItem } from '@foundations/Grid/Grid-item.component'
import { Column } from '@foundations/Row/Column.component'
import { Row } from '@foundations/Row/Row.component'
import { Typography } from '@foundations/Typography/Typography.component'

const Footer = () => {
  const animation = useAnimate()

  return (
    <GridItem
      modifiers={['animate', animation]}
      tag={'footer'}
      bg={'dark'}
      rows={{ default: [3] }}
      columns={{ default: [1] }}
    >
      <Row
        height={{ default: 'parent-fullscreen' }}
        padding={{
          top: { default: 6 },
          left: { default: 6 },
          bottom: { default: 6 },
          right: { default: 6 }
        }}
        align={{
          default: 'center'
        }}
      >
        <Column
          padding={{
            left: { default: 6 },
            right: { default: 6 }
          }}
        >
          <Typography
            tag={'span'}
            display={{ default: 'block' }}
            textAlign={{ default: 'center' }}
            size={'body-xxlrg'}
            text={'Footer'}
            color={'light'}
            fontWeight={'bold'}
          />
        </Column>
      </Row>
    </GridItem>
  )
}

export default Footer
