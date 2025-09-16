import terser from "@rollup/plugin-terser";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite"
import { visualizer } from "rollup-plugin-visualizer";
import { defineConfig } from "vite";
import checker from "vite-plugin-checker";
import compression from "vite-plugin-compression";
import Inspect from "vite-plugin-inspect";
import svgr from "vite-plugin-svgr";

export default defineConfig(() => ({
	plugins: [
    react(),
    tailwindcss(),
		svgr(),
		checker({ typescript: true }),
		compression(),
		Inspect(),
		visualizer(),
	],
	build: {
		rollupOptions: {
			plugins: [
				terser({
					format: { comments: false },
					compress: { drop_console: true, drop_debugger: true },
				}),
			],
		},
	},
}));
