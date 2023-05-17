import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@styled": path.resolve(__dirname, "./src/styled"),
      "@constants": path.resolve(__dirname, "./src/constants"),
      "@UserCard": path.resolve(__dirname, "./src/components/UserCard"),
      "@Navbar": path.resolve(__dirname, "./src/components/Navbar"),
      "@container": path.resolve(__dirname, "./src/container"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@CountDetails": path.resolve(__dirname, "./src/components/UserCard/CountDetails"),
      "@PlanDetails": path.resolve(__dirname, "./src/components/UserCard/PlanDetails"),
      "@UserInformation": path.resolve(__dirname, "./src/components/UserCard/UserInformation"),
      "@UserList": path.resolve(__dirname, "./src/components/UserList"),
    },
  },
  plugins: [react()],
});
