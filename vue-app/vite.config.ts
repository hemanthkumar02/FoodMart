import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig(() => ({
  plugins: [vue()],
  server: {
    port: 3000,
  },
  build: {
    sourcemap: true // Correct way to check mode
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
}));
