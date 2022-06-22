const config = require('../services/configChannel');

module.exports = {

	init: async(interaction, user, client) => {

		const channelID = interaction.message.channelId

		const configChannel = config.getConfigReactions(channelID);
		if (!configChannel) return;

		const channel =  await client.channels.cache.get(channelID);

		const msg = await channel.messages.fetch(interaction.message.id)

		const confiReaction = configChannel[msg.content.toLowerCase()]
		if(!confiReaction) return
		
		console.log(interaction._emoji.reaction.message.embeds);


		//answers.hasOwnProperty(response[rol])
		//a = await interaction.reaction.message.embeds.fetch()
        
		


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