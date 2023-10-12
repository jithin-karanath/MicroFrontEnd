import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'
import {dependencies, devDependencies} from './package.json'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    federation({
      name: "appRedux",
      filename: "remoteEntry.js",
      exposes: {
        './Sample': './src/components/SampleWithStore'
      },
      shared: { ...dependencies }
        // [...Object.keys(dependencies)]
    })],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  }
})
