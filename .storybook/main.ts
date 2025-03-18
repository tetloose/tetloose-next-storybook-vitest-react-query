import type { StorybookConfig } from '@storybook/nextjs'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const app = resolve(__dirname, '../app')
const docs = resolve(__dirname, '../docs')

const config: StorybookConfig = {
  stories: [
    `${docs}/**/*.mdx`,
    `${app}/**/*.mdx`,
    `${app}/**/*.stories.@(ts|tsx)`
  ],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    '@storybook/addon-designs'
  ],
  core: {
    disableWhatsNewNotifications: true,
    disableTelemetry: true
  },
  framework: {
    name: '@storybook/nextjs',
    options: {}
  },
  staticDirs: ['../public'],
  typescript: {
    reactDocgen: false
  },
  docs: {
    autodocs: true
  },
  webpackFinal: async (config) => {
    config.resolve = config.resolve || {}
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@styles': resolve(__dirname, '../app/styles')
    }

    return config
  }
}

export default config
