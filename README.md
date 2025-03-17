# Tetloose Next Storybook Vitest React Query (WIP)

## Recommended VSCode Extensions

`cmd shift p` then type recommended.

The sidebar will open with a list of recommended extensions to be installed.

'Workspaces' is a great plugin that allows you to show hide files.

See [Workspaces](https://marketplace.visualstudio.com/items?itemName=Fooxly.workspace) docs.

## React Developer Tools

[https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en](https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)

## Features

- Next.js
- Storybook
- React Query
- ViTest
- Typescript
- SCSS modules

## Commands

- `yarn setup` - Installs packages, setup husky and runs the app in development mode.
- `yarn turbopack` - Runs next in development mode.
- `yarn dev` - Runs `turbopack` `watch:ts` `watch:styles` runs Next in dev mode and combines linting in single console instance
- `yarn build` - Builds the app for production to the `build` folder.
- `yarn test` - Launches the test runner in the interactive watch mode.
- `yarn test:coverage` - Get test runner coverage stats.
- `yarn test:clear-cache` - Clear test runner cache.
- `yarn lint` - Lint js / scss.
- `yarn lint:fix` - Lint js / scss and fix errors.
- `yarn storybook` - Runs Storybook in the development mode.
- `yarn build-storybook` - Builds Storybook for production.
- `yarn git:commit` - Commit working branch, pomps for commit message.
- `yarn gen:component` - Auto generates a component, follow steps in terminal.

## Setup

1. `git clone git@github.com:tetloose/tetloose-next-storybook-vitest-react-query.git`
2. `cmd shift p recommended` install recommended plugins
3. `yarn setup`

## Storybook

`yarn storybook` Launches Storybook in development mode.

## React

`yarn dev` Launches App in development mode.

## ViTest

`yarn test` - Launches the test runner in the interactive watch mode.

## Docs

Once the project is in Storybook mode, can view the docs here: `http://localhost:6006/`.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
