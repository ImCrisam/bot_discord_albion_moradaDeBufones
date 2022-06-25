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

		let rolesUser =  await discordjs.getRolesById(Client, user.id);
		
		confiReaction.roles.forEach((rol) => {
			if(rolesUser.includes(rol)){
				actions[confiReaction.action](interaction, user, Client)
				return;
			}
		})
	},

}