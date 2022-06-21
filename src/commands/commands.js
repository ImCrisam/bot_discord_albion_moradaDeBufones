const utils = require('../utils/discordjs');
module.exports ={
   
    help : (msg, param) => {
        msg.reply("re1s")
    },

    addguild : (msg, params) => {
        console.log(params.length);
        if(params.length == 0) return
        utils.changeNickName(msg, "[Aplico] "+params[0])
    },

}