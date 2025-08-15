import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // 使用相对路径，这样构建后的文件可以在本地直接打开
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
