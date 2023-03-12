//! bin/node.js

// Header todo :)

const Discord = require('discord.js');
const { TOKEN } = require('../config.json');

// creating the client for the bot 
const client = new Discord.Client({
    intents: [
        Discord.GatewayIntentBits.Guilds,
        Discord.GatewayIntentBits.GuildMessages
    ]
}
);

// check the client is on
client.on('ready', c => {
    console.log(`Logged in as ${c.user.tag}!`);
});


// log the client
client.login(TOKEN);