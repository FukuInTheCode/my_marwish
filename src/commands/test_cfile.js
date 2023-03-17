//! bin/node.js

const { SlashCommandBuilder } = require('discord.js');
const fs = require('fs');
const { exec } = require("child_process");
const https = require('https');
  


module.exports = {
	data: new SlashCommandBuilder()
		.setName('run_my_put_nbr')
		.setDescription('give your my_putnbr and run it with my_marwish')
        .addAttachmentOption(option => option.setName('file').setRequired(true).setDescription('my_put_nbr.c file'))
        ,
	async execute(interaction) {
        // URL of the image
		const url = interaction.options.getAttachment('file').url;

		https.get(url,(res) => {
			// Image will be stored at this path
			const path = `${__dirname}/../../dumpC/my_put_nbr.c`; 
			const filePath = fs.createWriteStream(path);
			res.pipe(filePath);
			filePath.on('finish',() => {
				filePath.close();
				interaction.reply('Download Completed'); 
				// Run the .c file
				run(path);
			})
		}) 
	},
};

const run = (path) => {
	let paths = [path];
	exec(`gcc -o main ${`${__dirname}/../../dumpC/main.c`} ${path}`, (err, stdout, stderr) => {
		if (err) {
		console.error(err);
		return;
		}

		fs.rename(`${__dirname}/../../main.exe`, `${__dirname}/../../dumpC/main.exe`, function (err) {
			if (err) throw err
		  })
	});
};

const deletefile = (paths) => {
	return;
} 