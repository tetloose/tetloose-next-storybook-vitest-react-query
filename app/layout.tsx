import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import {
  queryClient,
  QueryClientProvider
} from '@hooks/Query/query-client.hooks'
import { Notification } from '@components/Notification/Notification.component'
import { Grid } from '@foundations/Grid/Grid.component'
import type { GlobalChildren } from '@global/global.types'
import '@styles/app.scss'

const Header = dynamic(() => import('@layouts/Header/Header.component'))
const Footer = dynamic(() => import('@layouts/Footer/Footer.component'))

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout({ children }: GlobalChildren) {
  return (
    <html lang='en'>
      <body>
        <QueryClientProvider client={queryClient}>
          <Notification />
          <Grid
            height={{ default: 'viewport-fullscreen' }}
            rows={{ default: ['auto', 1, 'auto'] }}
            columns={{ default: [1] }}
          >
            <Header />
            {children && children}
            <Footer />
          </Grid>
          <ReactQueryDevtools position={'bottom'} initialIsOpen={false} />
        </QueryClientProvider>
      </body>
    </html>
  )
}
