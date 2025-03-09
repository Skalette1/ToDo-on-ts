import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";


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
  server: {
    port: 3000, // Локальный сервер на 3000 порту
  },
  define: {
    "process.env": {},  // Для устранения ошибок с process.env
  },
});
