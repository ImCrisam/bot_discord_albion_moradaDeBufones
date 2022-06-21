const config = require('../services/configChannel');
const commands = require('./commands');
const utils = require('../utils/discordjs');


module.exports = {

	init: (msg, param = ["none"]) => {

		const configChannel = config.getConfigCommands(msg.channelId);;
		if (!configChannel) return;

		const execute = param.shift().toLocaleLowerCase();

		const command = configChannel.commands[execute]
		if (!command) return;

		let executed = [];
		utils.getRoles_msg(msg).forEach(rol => {
			if (commands.hasOwnProperty(command[rol]) && !executed.includes(command[rol])) {
				commands[command[rol]](msg, param)
				executed.push(command[rol])
			}
			console.log(rol, " : ", command[rol], " - ", commands.hasOwnProperty(command[rol]));
		});


	},

}