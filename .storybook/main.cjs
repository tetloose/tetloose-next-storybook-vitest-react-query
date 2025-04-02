const path = require('path');

/** @type {import('@storybook/nextjs').StorybookConfig} */
const config = {
  stories: [
    path.resolve(__dirname, '../docs/**/*.mdx'),
    path.resolve(__dirname, '../app/**/*.mdx'),
    path.resolve(__dirname, '../app/**/*.stories.@(ts|tsx)')
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
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@styles': path.resolve(__dirname, '../app/styles')
    };

    return config;
  }
};

module.exports = config;
