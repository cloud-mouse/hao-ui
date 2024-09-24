// build/vite.es.config.ts
import { defineConfig } from "file:///H:/open-source/Hao-UI/node_modules/.pnpm/vite@5.4.7_@types+node@20.11.20_terser@5.33.0/node_modules/vite/dist/node/index.js";
import { readdirSync } from "fs";
import { filter, map, includes } from "file:///H:/open-source/Hao-UI/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/lodash.js";
import vue from "file:///H:/open-source/Hao-UI/node_modules/.pnpm/@vitejs+plugin-vue@5.1.4_vite@5.4.7_@types+node@20.11.20_terser@5.33.0__vue@3.5.8_typescript@5.6.2_/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import { resolve } from "path";
import dts from "file:///H:/open-source/Hao-UI/node_modules/.pnpm/vite-plugin-dts@3.9.1_@types+node@20.11.20_rollup@4.22.4_typescript@5.6.2_vite@5.4.7_@types+node@20.11.20_terser@5.33.0_/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_dirname = "H:\\open-source\\Hao-UI\\packages\\core\\build";
function getDirectoriesSync(basePath) {
  const entries = readdirSync(basePath, { withFileTypes: true });
  return map(
    filter(entries, (entry) => entry.isDirectory()),
    (entry) => entry.name
  );
}
var vite_es_config_default = defineConfig({
  plugins: [
    vue(),
    dts({
      tsconfigPath: "../../tsconfig.build.json",
      outDir: "dist/types"
    })
  ],
  build: {
    outDir: "dist/es",
    lib: {
      entry: resolve(__vite_injected_original_dirname, "./index.ts"),
      name: "HaoUI",
      fileName: "index",
      formats: ["es"]
    },
    rollupOptions: {
      external: [
        "vue",
        "@fortawesome/fontawesome-svg-core",
        "@fortawesome/free-solid-svg-icons",
        "@fortawesome/vue-fontawesome",
        "@popperjs/core",
        "async-validator"
      ],
      // 防止将 vue 打包进最终的 bundle 中
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === "style.css") return "index.css";
          return assetInfo.name;
        },
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        manualChunks(id) {
          if (includes(id, "node_modules")) return "vender";
          if (includes(id, "/packages/hooks")) return "hooks";
          if (id.includes("/packages/utils") || includes(id, "plugin-vue:export-helper")) {
            return "utils";
          }
          for (const item of getDirectoriesSync("../components")) {
            if (includes(id, `/packages/components/${item}`)) return item;
          }
        }
        // 将特定的依赖打包进单独的 chunk 中
      }
    }
  }
});
export {
  vite_es_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiYnVpbGQvdml0ZS5lcy5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJIOlxcXFxvcGVuLXNvdXJjZVxcXFxIYW8tVUlcXFxccGFja2FnZXNcXFxcY29yZVxcXFxidWlsZFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiSDpcXFxcb3Blbi1zb3VyY2VcXFxcSGFvLVVJXFxcXHBhY2thZ2VzXFxcXGNvcmVcXFxcYnVpbGRcXFxcdml0ZS5lcy5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0g6L29wZW4tc291cmNlL0hhby1VSS9wYWNrYWdlcy9jb3JlL2J1aWxkL3ZpdGUuZXMuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHsgcmVhZGRpclN5bmMsICB9IGZyb20gXCJmc1wiO1xyXG5pbXBvcnQgeyAgZmlsdGVyLCBtYXAsIGluY2x1ZGVzIH0gZnJvbSBcImxvZGFzaC1lc1wiO1xyXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcclxuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ3BhdGgnXHJcbmltcG9ydCBkdHMgZnJvbSBcInZpdGUtcGx1Z2luLWR0c1wiXHJcblxyXG5mdW5jdGlvbiBnZXREaXJlY3Rvcmllc1N5bmMoYmFzZVBhdGg6IHN0cmluZykge1xyXG4gIGNvbnN0IGVudHJpZXMgPSByZWFkZGlyU3luYyhiYXNlUGF0aCwgeyB3aXRoRmlsZVR5cGVzOiB0cnVlIH0pO1xyXG5cclxuICByZXR1cm4gbWFwKFxyXG4gICAgZmlsdGVyKGVudHJpZXMsIChlbnRyeSkgPT4gZW50cnkuaXNEaXJlY3RvcnkoKSksXHJcbiAgICAoZW50cnkpID0+IGVudHJ5Lm5hbWVcclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHBsdWdpbnM6IFtcclxuICAgIHZ1ZSgpLFxyXG4gICAgZHRzKHtcclxuICAgICAgdHNjb25maWdQYXRoOiBcIi4uLy4uL3RzY29uZmlnLmJ1aWxkLmpzb25cIixcclxuICAgICAgb3V0RGlyOiBcImRpc3QvdHlwZXNcIixcclxuICAgIH0pXHJcbiAgXSxcclxuICBidWlsZDoge1xyXG4gICAgb3V0RGlyOiAnZGlzdC9lcycsXHJcbiAgICBsaWI6IHtcclxuICAgICAgZW50cnk6IHJlc29sdmUoX19kaXJuYW1lLCAnLi9pbmRleC50cycpLFxyXG4gICAgICBuYW1lOiAnSGFvVUknLFxyXG4gICAgICBmaWxlTmFtZTogJ2luZGV4JyxcclxuICAgICAgZm9ybWF0czogWydlcyddXHJcbiAgICB9LFxyXG4gICAgcm9sbHVwT3B0aW9uczoge1xyXG4gICAgICBleHRlcm5hbDogW1xyXG4gICAgICAgICd2dWUnLFxyXG4gICAgICAgIFwiQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlXCIsXHJcbiAgICAgICAgXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIixcclxuICAgICAgICBcIkBmb3J0YXdlc29tZS92dWUtZm9udGF3ZXNvbWVcIixcclxuICAgICAgICBcIkBwb3BwZXJqcy9jb3JlXCIsXHJcbiAgICAgICAgXCJhc3luYy12YWxpZGF0b3JcIlxyXG4gICAgICBdLCAvLyBcdTk2MzJcdTZCNjJcdTVDMDYgdnVlIFx1NjI1M1x1NTMwNVx1OEZEQlx1NjcwMFx1N0VDOFx1NzY4NCBidW5kbGUgXHU0RTJEXHJcbiAgICAgIG91dHB1dDoge1xyXG4gICAgICAgIGFzc2V0RmlsZU5hbWVzOiAoYXNzZXRJbmZvKSA9PiB7XHJcbiAgICAgICAgICBpZiAoYXNzZXRJbmZvLm5hbWUgPT09ICdzdHlsZS5jc3MnKSByZXR1cm4gJ2luZGV4LmNzcydcclxuICAgICAgICAgIHJldHVybiBhc3NldEluZm8ubmFtZSBhcyBzdHJpbmdcclxuICAgICAgICB9LCAvLyBcdTU3MjggVU1EIFx1Njc4NFx1NUVGQVx1NkEyMVx1NUYwRlx1NEUwQlx1NEUzQVx1OEZEOVx1NEU5Qlx1NTkxNlx1OTBFOFx1NTMxNlx1NzY4NFx1NEY5RFx1OEQ1Nlx1NjNEMFx1NEY5Qlx1NEUwMFx1NEUyQVx1NTE2OFx1NUM0MFx1NTNEOFx1OTFDRlxyXG4gICAgICAgIG1hbnVhbENodW5rcyhpZCkgeyBcclxuICAgICAgICAgIGlmIChpbmNsdWRlcyhpZCwgXCJub2RlX21vZHVsZXNcIikpIHJldHVybiAndmVuZGVyJ1xyXG4gICAgICAgICAgaWYgKGluY2x1ZGVzKGlkLCBcIi9wYWNrYWdlcy9ob29rc1wiKSkgIHJldHVybiAnaG9va3MnXHJcbiAgICAgICAgICBpZiAoaWQuaW5jbHVkZXMoJy9wYWNrYWdlcy91dGlscycpIHx8XHJcbiAgICAgICAgICAgIGluY2x1ZGVzKGlkLCBcInBsdWdpbi12dWU6ZXhwb3J0LWhlbHBlclwiKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gJ3V0aWxzJ1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGdldERpcmVjdG9yaWVzU3luYyhcIi4uL2NvbXBvbmVudHNcIikpIHtcclxuICAgICAgICAgICAgaWYgKGluY2x1ZGVzKGlkLCBgL3BhY2thZ2VzL2NvbXBvbmVudHMvJHtpdGVtfWApKSByZXR1cm4gaXRlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IC8vIFx1NUMwNlx1NzI3OVx1NUI5QVx1NzY4NFx1NEY5RFx1OEQ1Nlx1NjI1M1x1NTMwNVx1OEZEQlx1NTM1NVx1NzJFQ1x1NzY4NCBjaHVuayBcdTRFMkRcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufSkiXSwKICAibWFwcGluZ3MiOiAiO0FBQStULFNBQVMsb0JBQW9CO0FBQzVWLFNBQVMsbUJBQXFCO0FBQzlCLFNBQVUsUUFBUSxLQUFLLGdCQUFnQjtBQUN2QyxPQUFPLFNBQVM7QUFDaEIsU0FBUyxlQUFlO0FBQ3hCLE9BQU8sU0FBUztBQUxoQixJQUFNLG1DQUFtQztBQU96QyxTQUFTLG1CQUFtQixVQUFrQjtBQUM1QyxRQUFNLFVBQVUsWUFBWSxVQUFVLEVBQUUsZUFBZSxLQUFLLENBQUM7QUFFN0QsU0FBTztBQUFBLElBQ0wsT0FBTyxTQUFTLENBQUMsVUFBVSxNQUFNLFlBQVksQ0FBQztBQUFBLElBQzlDLENBQUMsVUFBVSxNQUFNO0FBQUEsRUFDbkI7QUFDRjtBQUVBLElBQU8seUJBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLElBQUk7QUFBQSxJQUNKLElBQUk7QUFBQSxNQUNGLGNBQWM7QUFBQSxNQUNkLFFBQVE7QUFBQSxJQUNWLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxRQUFRO0FBQUEsSUFDUixLQUFLO0FBQUEsTUFDSCxPQUFPLFFBQVEsa0NBQVcsWUFBWTtBQUFBLE1BQ3RDLE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQSxNQUNWLFNBQVMsQ0FBQyxJQUFJO0FBQUEsSUFDaEI7QUFBQSxJQUNBLGVBQWU7QUFBQSxNQUNiLFVBQVU7QUFBQSxRQUNSO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUE7QUFBQSxNQUNBLFFBQVE7QUFBQSxRQUNOLGdCQUFnQixDQUFDLGNBQWM7QUFDN0IsY0FBSSxVQUFVLFNBQVMsWUFBYSxRQUFPO0FBQzNDLGlCQUFPLFVBQVU7QUFBQSxRQUNuQjtBQUFBO0FBQUEsUUFDQSxhQUFhLElBQUk7QUFDZixjQUFJLFNBQVMsSUFBSSxjQUFjLEVBQUcsUUFBTztBQUN6QyxjQUFJLFNBQVMsSUFBSSxpQkFBaUIsRUFBSSxRQUFPO0FBQzdDLGNBQUksR0FBRyxTQUFTLGlCQUFpQixLQUMvQixTQUFTLElBQUksMEJBQTBCLEdBQUc7QUFDMUMsbUJBQU87QUFBQSxVQUNUO0FBQ0EscUJBQVcsUUFBUSxtQkFBbUIsZUFBZSxHQUFHO0FBQ3RELGdCQUFJLFNBQVMsSUFBSSx3QkFBd0IsSUFBSSxFQUFFLEVBQUcsUUFBTztBQUFBLFVBQzNEO0FBQUEsUUFDRjtBQUFBO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
