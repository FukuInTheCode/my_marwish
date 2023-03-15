const { SlashCommandBuilder } = require('discord.js');
const fs = require('fs');
const https = require('https');
  


module.exports = {
	data: new SlashCommandBuilder()
		.setName('filelook')
		.setDescription('Look at a file in attachment!')
        .addAttachmentOption(option => option.setName('file').setRequired(true).setDescription('The file input.'))
        ,
	async execute(interaction) {
        // URL of the image
		const url = interaction.options.getAttachment('file').url;

		https.get(url,(res) => {
			// Image will be stored at this path
			const path = `${__dirname}/main.c`; 
			const filePath = fs.createWriteStream(path);
			res.pipe(filePath);
			filePath.on('finish',() => {
				filePath.close();
				interaction.reply('Download Completed'); 
			})
}) 

		 
	},
};