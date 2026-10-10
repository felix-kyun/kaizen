import { defineConfig } from "tsup";

export default defineConfig({
	entry: ["src/index.ts", "src/commands/**/*.ts", "src/deploy.ts"],
	outDir: "dist",
	platform: "node",
	target: "node24",
	format: "esm",
	sourcemap: true,
});
