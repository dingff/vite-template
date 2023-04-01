import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react-swc'
import mpa from 'vite-plugin-react-mpa'

export default defineConfig({
  base: '/test/',
  appType: 'mpa',
  plugins: [
    react(),
    mpa(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 5173,
    open: 'http://localhost:5173/',
  },
})
