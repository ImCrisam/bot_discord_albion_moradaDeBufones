const Discordjs = require('../utils/discordjs');
const Embeds = require('../utils/embeds');
const Albion = require('../services/tools4Albion');
const Other = require('../services/other');
module.exports = {

    help: (msg, param) => {
        
        console.log(msg.guild.channels.cache.get("988830945522118696").send("a"));

        msg.reply("re1s")
    },

    apply: async (msg, params, channelOut) => {
        if (params.length == 0) return
        
        const nick = params[0];
        const playersInfo = await Albion.getInfoPlayerName(nick);

        if (!playersInfo || playersInfo.length==0 || playersInfo[0].Name !== nick) {
            let res = "no se encontro nick: " + nick;
            if (playersInfo && playersInfo.length!=0) {
                res += ".  encontrado: ";
                playersInfo.forEach(element => {
                    res += element.Name + ", "
                });
            }
            return msg.reply(res)
        } else {
            const allInfoPlayer = await Albion.getAllInfoPlayerID(playersInfo[0].Id)
            const isBanAlli = await Other.isBlackListAlli(playersInfo[0].Name)
            msg.guild.channels.cache.get(channelOut).send(Embeds.infoPlayer(msg.author, allInfoPlayer, isBanAlli))

        }

        //utils.changeNickName(msg, "[Aplico] "+params[0])
    },

}