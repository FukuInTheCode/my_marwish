//! bin/node.js 

// Header todo :)

const { Client } = require('discord.js');
const fs = require('fs.js');
const path = require('path.js');
const { TOKEN } = require('../config.json');

// creating the client for the bot 
const client = new Client({
    intents: [
        Discord.GatewayIntentBits.Guilds,
        Discord.GatewayIntentBits.GuildMessages
    ]
}
);
client.commands = new Discord.Collection();

// create the command handling

const commandsPath = path.join(__dirname, 'commands');



// check the client is on
client.once('ready', c => {
    console.log(`Logged in as ${c.user.tag}!`);
});

client.on('messageCreate', msg=>{

    console.log(msg);

});


// log the client
client.login(TOKEN);