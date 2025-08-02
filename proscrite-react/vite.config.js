import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './',  // ← makes all /assets/… references become relative
  plugins: [react()]
})
