const utils = require('../utils/discordjs');
const albion = require('../services/tools4Albion');
const { getAllInfoPlayerID } = require('../services/tools4Albion');
module.exports = {

    help: (msg, param) => {
        msg.reply("re1s")
    },

    apply: async (msg, params) => {
        if (params.length == 0) return

        const nick = params[0];
        const playersInfo = await albion.getInfoPlayerName(nick);

        if (!playersInfo || playersInfo[0].Name !== nick) {
            let res = "no se encontro nick: " + nick;
            if (playersInfo) {
                res += ".  encontrado: ";
                playersInfo.forEach(element => {
                    res += element.Name+", "
                });
            }
            return msg.reply(res)
        } else {
            const allInfoPlayer = await getAllInfoPlayerID(playersInfo[0].Id)
            
        }

        //utils.changeNickName(msg, "[Aplico] "+params[0])
    },

}