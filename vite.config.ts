import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import svgr from "vite-plugin-svgr"
import checker from "vite-plugin-checker"
import compression from "vite-plugin-compression"
import Inspect from "vite-plugin-inspect"
import { visualizer } from "rollup-plugin-visualizer"
import terser from "@rollup/plugin-terser"

export default defineConfig(() => ({
  plugins: [
    react(),
    svgr(),
    checker({ typescript: true }),
    compression(),
    Inspect(),
    visualizer(),
  ],
  build: {
    rollupOptions: {
      plugins: [terser({
        format: { comments: false },
        compress: { drop_console: true, drop_debugger: true },
      })],
    },
  },
}))

