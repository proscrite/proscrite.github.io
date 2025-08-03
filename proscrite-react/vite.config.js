import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '',
  build: {
    assetsInlineLimit: 0, // Don't inline any assets as base64
    assetsDir: 'assets', // Keep assets in the assets directory
    copyPublicDir: true,
  }
})
