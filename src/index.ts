import { Client, Collection, Events, GatewayIntentBits } from "discord.js";
import { Config } from "@/config";
import { interactionManager } from "@/utils/interactionManager";
import { loadCommands } from "@/utils/loadCommands";

const client = new Client({
	intents: [GatewayIntentBits.Guilds],
});

client.commands = new Collection();

await loadCommands(import.meta.dirname, (command) => {
	client.commands.set(command.data.name, command);
	console.log(`Loaded cmd: ${command.data.name}`);
});

client.once(Events.ClientReady, (readyClient) => {
	console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

client.on(Events.InteractionCreate, interactionManager);

await client.login(Config.BOT_TOKEN);
