// build/vite.es.config.ts
import { defineConfig } from "file:///H:/open-source/Z-Zimo-UI/node_modules/.pnpm/vite@5.4.7_@types+node@20.11.20_sass@1.79.3_terser@5.33.0/node_modules/vite/dist/node/index.js";
import { readdirSync } from "fs";
import { filter, map, includes } from "file:///H:/open-source/Z-Zimo-UI/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/lodash.js";
import vue from "file:///H:/open-source/Z-Zimo-UI/node_modules/.pnpm/@vitejs+plugin-vue@5.1.4_vite@5.4.7_@types+node@20.11.20_sass@1.79.3_terser@5.33.0__vue@3.5.8_typescript@5.6.2_/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import { resolve } from "path";
import dts from "file:///H:/open-source/Z-Zimo-UI/node_modules/.pnpm/vite-plugin-dts@3.9.1_@types+node@20.11.20_rollup@4.22.4_typescript@5.6.2_vite@5.4.7_@types+n_dlg4df5tij5dcbzf45d5m7lw5y/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_dirname = "H:\\open-source\\Z-Zimo-UI\\packages\\core\\build";
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
      entry: resolve(__vite_injected_original_dirname, "../index.ts"),
      name: "ZZimoUI",
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiYnVpbGQvdml0ZS5lcy5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJIOlxcXFxvcGVuLXNvdXJjZVxcXFxIYW8tVUlcXFxccGFja2FnZXNcXFxcY29yZVxcXFxidWlsZFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiSDpcXFxcb3Blbi1zb3VyY2VcXFxcSGFvLVVJXFxcXHBhY2thZ2VzXFxcXGNvcmVcXFxcYnVpbGRcXFxcdml0ZS5lcy5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0g6L29wZW4tc291cmNlL0hhby1VSS9wYWNrYWdlcy9jb3JlL2J1aWxkL3ZpdGUuZXMuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHsgcmVhZGRpclN5bmMsICB9IGZyb20gXCJmc1wiO1xyXG5pbXBvcnQgeyAgZmlsdGVyLCBtYXAsIGluY2x1ZGVzIH0gZnJvbSBcImxvZGFzaC1lc1wiO1xyXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcclxuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ3BhdGgnXHJcbmltcG9ydCBkdHMgZnJvbSBcInZpdGUtcGx1Z2luLWR0c1wiXHJcblxyXG5mdW5jdGlvbiBnZXREaXJlY3Rvcmllc1N5bmMoYmFzZVBhdGg6IHN0cmluZykge1xyXG4gIGNvbnN0IGVudHJpZXMgPSByZWFkZGlyU3luYyhiYXNlUGF0aCwgeyB3aXRoRmlsZVR5cGVzOiB0cnVlIH0pO1xyXG5cclxuICByZXR1cm4gbWFwKFxyXG4gICAgZmlsdGVyKGVudHJpZXMsIChlbnRyeSkgPT4gZW50cnkuaXNEaXJlY3RvcnkoKSksXHJcbiAgICAoZW50cnkpID0+IGVudHJ5Lm5hbWVcclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHBsdWdpbnM6IFtcclxuICAgIHZ1ZSgpLFxyXG4gICAgZHRzKHtcclxuICAgICAgdHNjb25maWdQYXRoOiBcIi4uLy4uL3RzY29uZmlnLmJ1aWxkLmpzb25cIixcclxuICAgICAgb3V0RGlyOiBcImRpc3QvdHlwZXNcIixcclxuICAgIH0pXHJcbiAgXSxcclxuICBidWlsZDoge1xyXG4gICAgb3V0RGlyOiAnZGlzdC9lcycsXHJcbiAgICBsaWI6IHtcclxuICAgICAgZW50cnk6IHJlc29sdmUoX19kaXJuYW1lLCAnLi4vaW5kZXgudHMnKSxcclxuICAgICAgbmFtZTogJ0hhb1VJJyxcclxuICAgICAgZmlsZU5hbWU6ICdpbmRleCcsXHJcbiAgICAgIGZvcm1hdHM6IFsnZXMnXVxyXG4gICAgfSxcclxuICAgIHJvbGx1cE9wdGlvbnM6IHtcclxuICAgICAgZXh0ZXJuYWw6IFtcclxuICAgICAgICAndnVlJyxcclxuICAgICAgICBcIkBmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZVwiLFxyXG4gICAgICAgIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCIsXHJcbiAgICAgICAgXCJAZm9ydGF3ZXNvbWUvdnVlLWZvbnRhd2Vzb21lXCIsXHJcbiAgICAgICAgXCJAcG9wcGVyanMvY29yZVwiLFxyXG4gICAgICAgIFwiYXN5bmMtdmFsaWRhdG9yXCJcclxuICAgICAgXSwgLy8gXHU5NjMyXHU2QjYyXHU1QzA2IHZ1ZSBcdTYyNTNcdTUzMDVcdThGREJcdTY3MDBcdTdFQzhcdTc2ODQgYnVuZGxlIFx1NEUyRFxyXG4gICAgICBvdXRwdXQ6IHtcclxuICAgICAgICBhc3NldEZpbGVOYW1lczogKGFzc2V0SW5mbykgPT4ge1xyXG4gICAgICAgICAgaWYgKGFzc2V0SW5mby5uYW1lID09PSAnc3R5bGUuY3NzJykgcmV0dXJuICdpbmRleC5jc3MnXHJcbiAgICAgICAgICByZXR1cm4gYXNzZXRJbmZvLm5hbWUgYXMgc3RyaW5nXHJcbiAgICAgICAgfSwgLy8gXHU1NzI4IFVNRCBcdTY3ODRcdTVFRkFcdTZBMjFcdTVGMEZcdTRFMEJcdTRFM0FcdThGRDlcdTRFOUJcdTU5MTZcdTkwRThcdTUzMTZcdTc2ODRcdTRGOURcdThENTZcdTYzRDBcdTRGOUJcdTRFMDBcdTRFMkFcdTUxNjhcdTVDNDBcdTUzRDhcdTkxQ0ZcclxuICAgICAgICBtYW51YWxDaHVua3MoaWQpIHsgXHJcbiAgICAgICAgICBpZiAoaW5jbHVkZXMoaWQsIFwibm9kZV9tb2R1bGVzXCIpKSByZXR1cm4gJ3ZlbmRlcidcclxuICAgICAgICAgIGlmIChpbmNsdWRlcyhpZCwgXCIvcGFja2FnZXMvaG9va3NcIikpICByZXR1cm4gJ2hvb2tzJ1xyXG4gICAgICAgICAgaWYgKGlkLmluY2x1ZGVzKCcvcGFja2FnZXMvdXRpbHMnKSB8fFxyXG4gICAgICAgICAgICBpbmNsdWRlcyhpZCwgXCJwbHVnaW4tdnVlOmV4cG9ydC1oZWxwZXJcIikpIHtcclxuICAgICAgICAgICAgcmV0dXJuICd1dGlscydcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBnZXREaXJlY3Rvcmllc1N5bmMoXCIuLi9jb21wb25lbnRzXCIpKSB7XHJcbiAgICAgICAgICAgIGlmIChpbmNsdWRlcyhpZCwgYC9wYWNrYWdlcy9jb21wb25lbnRzLyR7aXRlbX1gKSkgcmV0dXJuIGl0ZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSAvLyBcdTVDMDZcdTcyNzlcdTVCOUFcdTc2ODRcdTRGOURcdThENTZcdTYyNTNcdTUzMDVcdThGREJcdTUzNTVcdTcyRUNcdTc2ODQgY2h1bmsgXHU0RTJEXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0pIl0sCiAgIm1hcHBpbmdzIjogIjtBQUErVCxTQUFTLG9CQUFvQjtBQUM1VixTQUFTLG1CQUFxQjtBQUM5QixTQUFVLFFBQVEsS0FBSyxnQkFBZ0I7QUFDdkMsT0FBTyxTQUFTO0FBQ2hCLFNBQVMsZUFBZTtBQUN4QixPQUFPLFNBQVM7QUFMaEIsSUFBTSxtQ0FBbUM7QUFPekMsU0FBUyxtQkFBbUIsVUFBa0I7QUFDNUMsUUFBTSxVQUFVLFlBQVksVUFBVSxFQUFFLGVBQWUsS0FBSyxDQUFDO0FBRTdELFNBQU87QUFBQSxJQUNMLE9BQU8sU0FBUyxDQUFDLFVBQVUsTUFBTSxZQUFZLENBQUM7QUFBQSxJQUM5QyxDQUFDLFVBQVUsTUFBTTtBQUFBLEVBQ25CO0FBQ0Y7QUFFQSxJQUFPLHlCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxJQUFJO0FBQUEsSUFDSixJQUFJO0FBQUEsTUFDRixjQUFjO0FBQUEsTUFDZCxRQUFRO0FBQUEsSUFDVixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsUUFBUTtBQUFBLElBQ1IsS0FBSztBQUFBLE1BQ0gsT0FBTyxRQUFRLGtDQUFXLGFBQWE7QUFBQSxNQUN2QyxNQUFNO0FBQUEsTUFDTixVQUFVO0FBQUEsTUFDVixTQUFTLENBQUMsSUFBSTtBQUFBLElBQ2hCO0FBQUEsSUFDQSxlQUFlO0FBQUEsTUFDYixVQUFVO0FBQUEsUUFDUjtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBO0FBQUEsTUFDQSxRQUFRO0FBQUEsUUFDTixnQkFBZ0IsQ0FBQyxjQUFjO0FBQzdCLGNBQUksVUFBVSxTQUFTLFlBQWEsUUFBTztBQUMzQyxpQkFBTyxVQUFVO0FBQUEsUUFDbkI7QUFBQTtBQUFBLFFBQ0EsYUFBYSxJQUFJO0FBQ2YsY0FBSSxTQUFTLElBQUksY0FBYyxFQUFHLFFBQU87QUFDekMsY0FBSSxTQUFTLElBQUksaUJBQWlCLEVBQUksUUFBTztBQUM3QyxjQUFJLEdBQUcsU0FBUyxpQkFBaUIsS0FDL0IsU0FBUyxJQUFJLDBCQUEwQixHQUFHO0FBQzFDLG1CQUFPO0FBQUEsVUFDVDtBQUNBLHFCQUFXLFFBQVEsbUJBQW1CLGVBQWUsR0FBRztBQUN0RCxnQkFBSSxTQUFTLElBQUksd0JBQXdCLElBQUksRUFBRSxFQUFHLFFBQU87QUFBQSxVQUMzRDtBQUFBLFFBQ0Y7QUFBQTtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
