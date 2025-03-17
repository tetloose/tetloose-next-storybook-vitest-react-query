'use client'

import { useAnimate } from '@hooks/Animate/use-animate.hooks'
import { Logo } from '@components/Logo/Logo.component'
import { GridItem } from '@foundations/Grid/Grid-item.component'
import { Column } from '@foundations/Row/Column.component'
import { Row } from '@foundations/Row/Row.component'

const Header = () => {
  const animation = useAnimate()

  return (
    <GridItem
      modifiers={['animate', animation]}
      tag={'header'}
      bg={'dark'}
      rows={{ default: [1] }}
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
        justify={{ default: 'center' }}
        align={{
          default: 'center'
        }}
      >
        <Column
          width={{ default: 'auto' }}
          padding={{
            left: { default: 6 },
            right: { default: 6 }
          }}
        >
          <Logo />
        </Column>
      </Row>
    </GridItem>
  )
}

export default Header
