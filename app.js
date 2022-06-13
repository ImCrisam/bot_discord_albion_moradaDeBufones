//link invite https://discord.com/api/oauth2/authorize?client_id=977893992006045806&permissions=8&scope=bot
require('dotenv').config()
const commands = require('./src/commands/commands');

const prefix = process.env.PREFIX


const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.once('ready', (bot) => {
	console.log(bot.presence.status);
	client.user.setActivity(' ', { type: 'WATCHING' });
	client.user.setStatus('online');
});

client.on("messageCreate", (msg) => {

	if (msg.content.startsWith(prefix) && msg.content.indexOf(" ") === prefix.length) {

		const param = msg.content.slice(prefix.length).trim().split(/ +/);
		const command = param.shift().toLocaleLowerCase();

		console.log(param);
		console.log(command);
		try {
			re1s = commands[command](msg, param)
			console.log(re1s);
			return msg.reply(re1s)
			
		} catch (error) {
			console.log(`comando '${command}' no existe`);
		}

	}


})

client.login(process.env.DISCORD_TOKEN); 