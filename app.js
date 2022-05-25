//link invite https://discord.com/api/oauth2/authorize?client_id=977893992006045806&permissions=8&scope=bot
require('dotenv').config()

const prefix = process.env.PREFIX

const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.once('ready', (bot) => {
	console.log(bot.presence.status);
});

client.on("messageCreate", (msg)=>{
	//console.log(msg);
	console.log(msg.content.startsWith(prefix));

} )

client.login(process.env.DISCORD_TOKEN); 