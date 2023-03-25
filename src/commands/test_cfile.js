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
        // URL of the c file
		const url = interaction.options.getAttachment('file').url;

		https.get(url,(res) => {
			// C file downloading
			const path = `${__dirname}/../../dumpC/my_put_nbr.c`; 
			const filePath = fs.createWriteStream(path);
			res.pipe(filePath);
			filePath.on('finish',() => {
				filePath.close();
				interaction.reply('Step 1/4: Download Completed!'); 
				// Run the .c file
				run(path);
			})
		}) 
	},
};


// run the c file
const run = (path, interaction) => {
	let paths = [path];
	// compile the c file
	exec(`gcc -o main ${`${__dirname}/../../dumpC/main.c`} ${path}`, (err, stdout, stderr) => {
		if (err) {
		console.error(err);
		return;
		}
		// move the .exe
		fs.rename(`${__dirname}/../../main.exe`, `${__dirname}/../../dumpC/main.exe`, function (err) {
			if (err) throw err

			// test the c code
			test(`${__dirname}/../../main.exe`, interaction);

		  })
	});
};

const test = (path) => {
	return;
}

// delete the c file 
const deletefile = (paths) => {
	return;
} 