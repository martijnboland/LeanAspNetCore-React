import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

export default defineConfig({
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
    reactRefresh()
  ],
  server: {
    hmr: {
      protocol: 'ws'
    }
  }
})