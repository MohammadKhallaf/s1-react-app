import react from "@vitejs/plugin-react-swc";
import path from "node:path";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@/atoms": path.resolve(__dirname, "./src/components/atoms"),
			"@": path.resolve(__dirname, "./src"),
		},
	},
});
