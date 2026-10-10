import { defineConfig } from "tsup";

export default defineConfig({
	entry: ["src/index.ts"],
	outDir: "dist",
	platform: "node",
	target: "node",
	format: "esm",
	sourcemap: true,
});
