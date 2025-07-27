import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      src: "/src",
      hooks: "/src/hooks/",
      assets: "/src/assets/",
    },
  },
  server: {
    proxy: {
      "/api/lots": {
        target: "https://sttrafficplatformassets.blob.core.windows.net",
        changeOrigin: true,
        rewrite: (path) =>
          path.replace(/^\/api\/lots/, "/traffic-assets/lots.json"),
      },
    },
  },
});
