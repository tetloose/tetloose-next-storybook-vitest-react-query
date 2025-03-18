import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['.vitest/vitest.setup.ts'],
    include: ['./app/**/*.test.{ts,tsx}'],
    exclude: [
      '.git',
      '.husky',
      '.scripts',
      '.vscode',
      'node_modules',
      'public',
      'build',
      'storybook-static',
      'coverage'
    ]
  }
})
