import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [vue()],
  server: {
    allowedHosts: ['lionfish-generous-terribly.ngrok-free.app'],
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    target: 'es2015',
    manifest: !isSsrBuild,
    copyPublicDir: !isSsrBuild,
    rollupOptions: {
      output: {
        ...(isSsrBuild ? {} : { manualChunks: { vendor: ['vue', 'vue-router', 'vue-i18n'] } }),
      },
    },
  },
}))
