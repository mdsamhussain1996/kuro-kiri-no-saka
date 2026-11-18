import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  root: './',
  css: {
    postcss: {
      plugins: []
    }
  },
  server: {
    port: 3000,
    open: false,
    host: true,
  },
  build: {
    target: 'esnext',
    outDir: 'dist',
    assetsInlineLimit: 0,
  }
});
