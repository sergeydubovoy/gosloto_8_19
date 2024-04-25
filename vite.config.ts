import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./",
  build: {
    outDir: "./docs",
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      api: "/src/api",
      assets: "/src/assets",
      components: "/src/components",
      shared: "/src/shared",
      store: "/src/store",
      utils: "/src/utils",
    },
  },
});
