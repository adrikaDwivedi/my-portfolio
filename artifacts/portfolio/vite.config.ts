import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import path from "path";

const isProduction = process.env.NODE_ENV === "production";

export default defineConfig({
  base: isProduction ? "/my-portfolio/" : "/",

  plugins: [
    react(),
    tailwindcss(),
    runtimeErrorOverlay(),
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@assets": path.resolve(__dirname, "../../attached_assets"),
    },
  },

  build: {
    outDir: "dist",
    emptyOutDir: true,
  },

  server: {
    host: "0.0.0.0",
    port: 5173,
  },

  preview: {
    host: "0.0.0.0",
    port: 4173,
  },
});