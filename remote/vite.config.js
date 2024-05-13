import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "remote_app",
      filename: "remoteEntry.js",
      exposes: {
        './A': {
            import: './src/components/A',
            dontAppendStylesToHead: false
        },
        './B': {
            import: './src/components/B',
            dontAppendStylesToHead: false
        }
      },
      shared: ['react','react-dom']
    })
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: true
  }
})
