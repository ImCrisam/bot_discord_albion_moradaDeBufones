const config = require('../services/configChannel');
const commands = require('./commands');
const utils = require('../utils/discordjs');


module.exports ={

    init : (msg, param = ["none"]) => {
        
		const configChannel = config.getConfigCommands(msg.channelId);;
		if(!configChannel) return;

		const execute = param.shift().toLocaleLowerCase();

		const command = configChannel.commands[execute]
		if(!command) return;
		
		utils.getRoles_msg(msg).forEach(rol => {
			if(commands.hasOwnProperty(command[rol])) commands[command[rol]](msg, param)
			console.log(rol, " : ", command[rol], " - ", commands.hasOwnProperty(command[rol]));
		});

		
    },

   
    help : (msg, param) => {
        msg.reply("re1s")
    },

    addguild : (msg, params) => {
        return `parametros ${params}`
    },

}