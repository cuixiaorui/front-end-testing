import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    setupFiles: "./vitest.setup.ts",
  },
  plugins: [vue()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:8000", // 目标服务器地址
        changeOrigin: true, // 修改请求头中的 Host 为目标服务器地址
      },
    },
  },
});
