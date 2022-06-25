const config = require('../services/configChannel');
const discordjs = require('../utils/discordjs');
const actions = require('./actions');

module.exports = {

	init: async (interaction, user, Client) => {

		const channelID = interaction.message.channelId

		const configChannel = config.getConfigReactions(channelID);
		if (!configChannel) return;

		const channel = await Client.channels.cache.get(channelID);

		const msg = await channel.messages.fetch(interaction.message.id)

		const confiReaction = msg.content ? configChannel[msg.content.toLowerCase()][interaction._emoji.name] : undefined
		if (!confiReaction) return;

		if (!actions.hasOwnProperty(confiReaction.action)) return;

		let rolesUser = discordjs.getRolesById(Client, user.id);
		
		confiReaction.roles.forEach((rol) => {
			if(rolesUser.includes(rol)){
				console.log("rol necesario");
				return;
			}
		})


		//---------------
		
		//const newUser = await msg.guild.members.cache.get(interaction._emoji.reaction.message.embeds[0].author.name)
		//const newUser = await Client.guilds.cache.get("819930498553217044").members.fetch("")
		// const newUser = await Client.guilds.cache.get("819930498553217044").members.fetch(interaction._emoji.reaction.message.embeds[0].author.name)
		
		
		//console.log(interaction._emoji.reaction.message.embeds);
		// console.log(interaction._emoji.reaction.message.embeds[0].author.name);
		// const isaddRol = discordjs.addRolesMsg(msg, interaction._emoji.reaction.message.embeds[0].author.name, "985984547411873944");
		// console.log(isaddRol ? "rol add" : "erro");
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