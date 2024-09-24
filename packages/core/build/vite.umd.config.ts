import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: 'dist/umd',
    lib: {
      entry: resolve(__dirname, '../index.ts'),
      name: 'HaoUI',
      fileName: 'index',
      formats: ['umd']
    },
    rollupOptions: {
      external: ['vue'], // 防止将 vue 打包进最终的 bundle 中
      output: {
        exports: 'named', // 防止将所有内容打包成一个对象
        globals: {
          vue: 'Vue'
        }, // 将 vue 替换为 Vue
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') return 'index.css'
          return assetInfo.name as string
         }
      }
    }
  }
})