//link invite https://discord.com/api/oauth2/authorize?client_id=977893992006045806&permissions=8&scope=bot
require('dotenv').config()
const commands = require('./src/commands/commands');
const autoResponde = require('./src/autoResponde/autoresponde');

const prefix = process.env.PREFIX


const { Client, Intents, Guild } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS, , Intents.FLAGS.GUILD_MESSAGE_REACTIONS] });


client.once('ready', (bot) => {
	console.log(bot.presence.status);
	client.user.setActivity(' ', { type: 'WATCHING' });
	client.user.setStatus('online');
});


client.on("messageCreate", (msg) => {

	//Commands with prefix
	if (msg.content.startsWith(prefix) && msg.content.indexOf(" ") === prefix.length) {

		const param = msg.content.slice(prefix.length).trim().split(/ +/);
		const command = param.shift().toLocaleLowerCase();

		try {
			commands[command](msg, param)
			
		} catch (error) {
			console.log(`comando '${command}' no existe`);
		}
	//AutoResponde no commands prefix
	} else if (!msg.author.bot) {
		
		autoResponde.init(msg);


	//msg by bots 
	} else {
		console.log(msg.content);
		console.log("bot");
	}


})

client.login(process.env.DISCORD_TOKEN); 