const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ohio')
		.setDescription('Ohio'),
	async execute(interaction) {
		// interaction.user is the object representing the User who ran the command
		// interaction.member is the GuildMember object, which represents the user in the specific guild
		await interaction.reply(`Ohio https://cdn.discordapp.com/attachments/736717234612731917/1056262704760889405/ohio-university-1024x683.png`);
	},
};