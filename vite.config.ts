import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",  // Важное изменение: используем корневой путь
  build: {
    outDir: "dist",  // Папка для сборки
    rollupOptions: {
      external: [],
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 3000, // Локальный сервер на 3000 порту
  },
  define: {
    "process.env": {},  // Для устранения ошибок с process.env
  },
});
