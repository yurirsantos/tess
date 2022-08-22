import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://yurirsantos.github.io/tess-site/
export default defineConfig({
  base: 'https://yurirsantos.github.io/tess-site/',
  plugins: [react()]
})
