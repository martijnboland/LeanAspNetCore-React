import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/dist/',
  build: {
    outDir: '../wwwroot/dist',
    emptyOutDir: true,
    manifest: true,
    rollupOptions: {
      input: {
        main: './js/main.js',
        'classic-jquery': './js/classic-jquery.js',
        'react-notes': './js/react-notes.tsx'
      }
    }
  },
  plugins: [
    react()
  ]
})