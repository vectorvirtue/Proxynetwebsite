import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      generateScopedName: '[name]__[local]__[hash:base64:5]'
    },
    // Use PostCSS transformer — lightningcss (Vite 8 default) strips the
    // unprefixed backdrop-filter property from the compiled output
    transformer: 'postcss',
  },
  build: {
    // Disable CSS minification so no property is stripped.
    // The CSS is still bundled and gzipped — the size difference is minimal.
    cssMinify: false,
  }
})
