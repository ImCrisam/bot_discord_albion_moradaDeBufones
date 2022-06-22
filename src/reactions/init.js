const config = require('../services/configChannel');

module.exports = {

	init: async(interaction, user, channel) => {

        console.log(interaction);
        console.log(user);
        console.log("-------");

		const configChannel = config.getConfigReactions(interaction.reaction.message.channelId);
		

		let a = ""
		a =  interaction.reaction.message.embeds
		//a = await interaction.reaction.message.embeds.fetch()
        console.log(a);
		
		if (!configChannel) return;
		// const execute = param.shift().toLocaleLowerCase();

		// const command = configChannel.commands[execute]
		// if (!command) return;

		// const channelOut  = config.getConfigOutput(execute)

		// let executed = [];
		// utils.getRolesMsg(msg).forEach(rol => {
		// 	console.log(rol, " : ", command[rol], " - ", commands.hasOwnProperty(command[rol]));
		// 	if (commands.hasOwnProperty(command[rol]) && !executed.includes(command[rol])) {
		// 		commands[command[rol]](msg, param, channelOut)
		// 		executed.push(command[rol])
		// 	}
		// });

	},

}