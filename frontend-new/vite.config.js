import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL(".", import.meta.url)),
      "next/image": fileURLToPath(new URL("./src/shims/next-image.jsx", import.meta.url)),
      "next/link": fileURLToPath(new URL("./src/shims/next-link.jsx", import.meta.url)),
      "next/navigation": fileURLToPath(new URL("./src/shims/next-navigation.js", import.meta.url)),
    },
  },
});
