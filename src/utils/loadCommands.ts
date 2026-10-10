import { readdir } from "node:fs/promises";
import { join } from "node:path";
import type { Command } from "@/types/discord";

export async function loadCommands(
	projectRoot: string,
	exec: (command: Command) => void | Promise<void>,
) {
	const basePath = join(projectRoot, "commands");
	const commandFiles = (await readdir(join(projectRoot, "commands"))).filter(
		(file) => file.endsWith(".js"),
	);

	await Promise.all(
		commandFiles.map(async (file) => {
			const obj = await import(join(basePath, file));
			if ("command" in obj) {
				exec(obj.command);
			}
		}),
	);
}
