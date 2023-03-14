const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('filelook')
		.setDescription('Look at a file in attachment!')
        .addAttachmentOption(option => option.setName('file').setRequired(true).setDescription('The file input.'))
        ,
	async execute(interaction) {
        const attachment = interaction.options.getAttachment('file')
        console.log(attachment);
		await interaction.reply('Check!');
	},
};