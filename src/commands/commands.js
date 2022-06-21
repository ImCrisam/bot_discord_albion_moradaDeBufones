const utils = require('../utils/discordjs');
const albion = require('../services/tools4Albion');
module.exports ={
   
    help : (msg, param) => {
        msg.reply("re1s")
    },

    apply : async (msg, params) => {
        if(params.length == 0) return

        const playerInfo = await albion.getInfoPlayerName(params[0])
        console.log(playerInfo);

        //utils.changeNickName(msg, "[Aplico] "+params[0])
    },

}