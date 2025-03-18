import React from 'react'
import type { Preview } from '@storybook/react'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Notification } from '../app/components/Notification/Notification.component'
import { AppProvider } from '../app/context/App/App.context'
import {
  clearQueryCache,
  queryClient,
  QueryClientProvider
} from '../app/hooks/Query/query-client.hooks'
import '../app/styles/app.scss'

const preview: Preview = {
  decorators: [
    (Story) => {
      clearQueryCache()

      return (
        <QueryClientProvider client={queryClient}>
          <Notification />
          <AppProvider>
            <Story />
          </AppProvider>
          <ReactQueryDevtools position={'bottom'} initialIsOpen={false} />
        </QueryClientProvider>
      )
    }
  ],
  parameters: {
    options: {
      storySort: {
        order: [
          'Documentation',
          [
            'Introduction',
            'CRUD',
            'Best Practices',
            'Architecture',
            'Workflow',
            'Component Generation',
            'Git Commit',
            'Styles',
            'Variables',
            'Colors',
            'Typography',
            'Fluid Sizing',
            'Notification'
          ],
          'Foundations',
          'Atoms',
          'Components',
          'Layouts'
        ]
      }
    },
    backgrounds: {
      default: 'Light',
      values: [
        {
          name: 'Light',
          value: '#fff'
        },
        {
          name: 'Dark',
          value: '#000'
        }
      ]
    }
  }
}

export default preview
