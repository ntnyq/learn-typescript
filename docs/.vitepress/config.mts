import { defineConfig } from 'vitepress'

export default defineConfig({
  title: `ntnyq's typescript note`,

  vite: {
    server: {
      open: true,
      host: true,
    },
  },
})
