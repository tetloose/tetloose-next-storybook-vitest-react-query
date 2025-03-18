import { addons } from '@storybook/manager-api'
import { create } from '@storybook/theming'
import logo from '../public/assets/images/logo.svg'

const brandTheme = create({
  base: 'dark',
  brandTitle: 'Tetloose React TS Vite Storybook',
  brandUrl:
    'https://github.com/tetloose/tetloose-next-storybook-vitest-react-query.git',
  brandImage: logo,
  brandTarget: '_blank'
})

addons.setConfig({
  theme: brandTheme
})
