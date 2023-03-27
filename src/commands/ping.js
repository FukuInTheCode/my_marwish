//! bin/node.js

// Basic ping command

const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Check the bot ping and discord API ping!'),
	async execute(interaction) {
		await interaction.reply('Calculating...');
		await interaction.fetchReply().then(reply => {
			interaction.editReply(`Bot ping: \`\`${reply.createdTimestamp - interaction.createdTimestamp}\`\` ms, API ping: \`\`${interaction.client.ws.ping}\`\` ms`)
		});
		await interaction.followUp({ content: 'Pong!', ephemeral: true });
	},
};
