const command = require('../configChannel/configChannelCommands');
const desponde = require('../configChannel/configChannelResponde');

module.exports ={
   
    commands : (channelID) => {
        return command[channelID]
    },
    
    responde : (channelID) => {
        return desponde[channelID]
    },

}