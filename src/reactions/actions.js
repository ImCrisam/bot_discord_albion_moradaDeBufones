const discordjs = require('../utils/discordjs');


module.exports = {

    apply: async (interaction, user, Client) => {
        const nickNewPlayer =interaction.message.embeds[0].author.name;
        const member = await discordjs.getMemberById(Client, nickNewPlayer)
        discordjs.addRolesMsg(member,"985984547411873944" )
    }

}