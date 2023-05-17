import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@src": path.resolve(__dirname, "./src"),
      "@UserCard": path.resolve(__dirname, "./src/components/UserCard"),
      "@UserList": path.resolve(__dirname, "./src/components/UserList"),
    },
  },
  plugins: [react()],
});
