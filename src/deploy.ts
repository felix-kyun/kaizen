import { REST, Routes, type SlashCommandBuilder } from "discord.js";
import Config from "@/config";
import { loadCommands } from "@/utils/loadCommands";

const commands: Array<ReturnType<SlashCommandBuilder["toJSON"]>> = [];
await loadCommands(import.meta.dirname, (command) => {
	commands.push(command.data.toJSON());
});

const rest = new REST().setToken(Config.BOT_TOKEN);
console.log(`Refreshing ${commands.length} commands`);
try {
	const data = (await rest.put(
		Routes.applicationCommands(Config.APPLICATION_ID),
		{
			body: commands,
		},
	)) as { length: number };

	console.log(`Successfully refreshed ${data.length} commands`);
} catch (error) {
	console.error(error);
}
