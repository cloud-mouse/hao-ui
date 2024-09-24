import { defineConfig } from 'vite'
import { readdirSync,  } from "fs";
import {  filter, map, includes } from "lodash-es";
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import dts from "vite-plugin-dts"

function getDirectoriesSync(basePath: string) {
  const entries = readdirSync(basePath, { withFileTypes: true });

  return map(
    filter(entries, (entry) => entry.isDirectory()),
    (entry) => entry.name
  );
}

export default defineConfig({
  plugins: [
    vue(),
    dts({
      tsconfigPath: "../../tsconfig.build.json",
      outDir: "dist/types",
    })
  ],
  build: {
    outDir: 'dist/es',
    lib: {
      entry: resolve(__dirname, '../index.ts'),
      name: 'HaoUI',
      fileName: 'index',
      formats: ['es']
    },
    rollupOptions: {
      external: [
        'vue',
        "@fortawesome/fontawesome-svg-core",
        "@fortawesome/free-solid-svg-icons",
        "@fortawesome/vue-fontawesome",
        "@popperjs/core",
        "async-validator"
      ], // 防止将 vue 打包进最终的 bundle 中
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') return 'index.css'
          return assetInfo.name as string
        }, // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        manualChunks(id) { 
          if (includes(id, "node_modules")) return 'vender'
          if (includes(id, "/packages/hooks"))  return 'hooks'
          if (id.includes('/packages/utils') ||
            includes(id, "plugin-vue:export-helper")) {
            return 'utils'
          }
          for (const item of getDirectoriesSync("../components")) {
            if (includes(id, `/packages/components/${item}`)) return item;
          }
        } // 将特定的依赖打包进单独的 chunk 中
      }
    }
  }
})