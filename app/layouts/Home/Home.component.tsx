'use client'

import { useAnimate } from '@hooks/Animate/use-animate.hooks'
import { Card } from '@components/Card/Card.component'
import { GridItem } from '@foundations/Grid/Grid-item.component'
import { Column } from '@foundations/Row/Column.component'
import { Row } from '@foundations/Row/Row.component'
import { useHomeContent } from './hooks/use-home-content.hooks'

const Home = () => {
  const animation = useAnimate()
  const { content, contentFetching } = useHomeContent()

  if (!content) return

  return (
    <GridItem
      modifiers={['animate', animation]}
      tag={'section'}
      rows={{ default: [2] }}
      columns={{ default: [1] }}
    >
      <Row
        align={{
          med: 'center'
        }}
        padding={{
          bottom: { default: 10 },
          left: { default: 5 },
          right: { default: 5 }
        }}
        height={{ med: 'parent-fullscreen' }}
      >
        {content.map(({ image, title, body, link }, contentIndex) => (
          <Column
            key={contentIndex}
            width={{
              med: 4
            }}
            padding={{
              top: { default: 10 },
              left: { default: 5 },
              right: { default: 5 }
            }}
          >
            <Card
              image={image}
              title={title}
              body={body}
              link={link}
              loading={contentFetching}
            />
          </Column>
        ))}
      </Row>
    </GridItem>
  )
}

export default Home
