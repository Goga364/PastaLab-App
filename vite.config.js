import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true, // or '0.0.0.0' → this exposes to your local network
    port: 5173, // optional, default is 5173
  },
  base: "/", // ensure relative base path
});
