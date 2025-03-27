import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
// import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // vueDevTools(),
  ],
  // server: {
  //   proxy: {
  //       '/v1': {
  //           target: 'http://192.168.1.30:8010', // 替换为实际的后端服务器地址
  //           changeOrigin: true,
  //           // rewrite: (path) => path.replace(/^\/v1/, '')
  //       }
  //   }
  // },
  resolve: {
    alias: {
      // "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@": path.join(__dirname, "src"),
    },
  },
});
