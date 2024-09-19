import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { ghPages } from 'vite-plugin-gh-pages'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), ghPages()],
  server: {
    port: 7500
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
