import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@assets": "/src/assets/",
      "@components": "/src/components/",
      "@service": "/src/service/",
      "@screens": "/src/screens/",
      "@dto": "/src/dto/",
      "@theme": "/src/theme/",
    },
  },
});
