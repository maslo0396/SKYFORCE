import { defineConfig } from 'vite'

export default defineConfig({
  base: '/SKYFORCE/', // Важно! Имя репозитория
  // другие настройки
  build: {
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]'
      }
    }
  },
  optimizeDeps: {
    include: ['swiper']
  }
})