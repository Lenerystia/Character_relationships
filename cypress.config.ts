import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    experimentalStudio: true,
    baseUrl: 'http://localhost:8080',
  },
  component: {
    devServer: {
      framework: 'svelte',
      bundler: 'vite',
    },
  },
})