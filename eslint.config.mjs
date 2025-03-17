// eslint.config.js
import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'
import pluginQuery from '@tanstack/eslint-plugin-query'
import typescriptEslint from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import prettier from 'eslint-plugin-prettier'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import unusedImports from 'eslint-plugin-unused-imports'
import globals from 'globals'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
})

const ignoreConfig = {
  ignores: [
    '**/.husky/**',
    '**/.scripts/**',
    '**/.vscode/**',
    '**/node_modules/**',
    '**/public/**',
    '**/build/**',
    '**/storybook-static/**',
    '**/coverage/**'
  ]
}

const mainConfig = {
  plugins: {
    react,
    '@typescript-eslint': typescriptEslint,
    'simple-import-sort': simpleImportSort,
    'react-hooks': reactHooks,
    'unused-imports': unusedImports,
    ...pluginQuery.configs['flat/recommended'],
    prettier
  },
  languageOptions: {
    globals: { ...globals.browser },
    parser: tsParser,
    ecmaVersion: 2020,
    sourceType: 'module',
    parserOptions: {
      ecmaFeatures: { jsx: true }
    }
  },
  settings: { react: { version: 'detect' } },
  rules: {
    'unused-imports/no-unused-imports': 'error',
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' }
    ],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'comma-spacing': ['error', { before: false, after: true }],
    'no-console': 'warn',
    'no-debugger': 'warn',
    'react/display-name': 'error',
    'react/jsx-no-useless-fragment': 'error',
    'react/react-in-jsx-scope': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    '@typescript-eslint/consistent-type-imports': 'error',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          [
            '^react',
            '^@?\\w',
            '^\\u0000',
            '^@context',
            '^@hooks',
            '^@routes',
            '^@crud',
            '^@utils',
            '^@components',
            '^@foundations',
            '^@atoms',
            '^@layouts',
            '^\\.\\.(?!/?$)',
            '^\\.\\./?$',
            '^\\./(?=.*/)(?!/?$)',
            '^\\.(?!/?$)',
            '^\\./?$',
            '^@global',
            '^.*\\.types$',
            '^@?\\w\\.types$',
            '^.+\\.(svg|png|jpe?g|gif|webp|avif|ico|bmp|tiff?)$',
            '^classnames',
            '^.*\\.module\\.scss$',
            '^.+\\.s?css$'
          ]
        ]
      }
    ]
  }
}

const eslintConfig = [
  ignoreConfig,
  ...compat.extends(
    'next/core-web-vitals',
    'next/typescript',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ),
  mainConfig
]

export default eslintConfig
