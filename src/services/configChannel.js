const command = require('../configChannel/configChannelCommands');
const desponde = require('../configChannel/configChannelResponde');

module.exports ={
   
    getConfigCommands : (channelID) => {
        return command[channelID]
    },
    
    getConfigResponde : (channelID) => {
        return desponde[channelID]
    },

}