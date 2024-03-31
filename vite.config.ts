import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "cms",
      filename: "remoteEntry.js",
      remotes: {
        remoteApp: "http://localhost:5001/assets/remoteEntry.js",
      },
      exposes: {
        "./Footer": "./src/components/Footer",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
