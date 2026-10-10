import { SlashCommandBuilder } from "discord.js";
import type { Command } from "@/types/discord";

export const command: Command = {
	data: new SlashCommandBuilder()
		.setName("ping")
		.setDescription("Reply with pong!"),

	execute: async (interaction) => {
		interaction.reply("Pong!");
	},
};
