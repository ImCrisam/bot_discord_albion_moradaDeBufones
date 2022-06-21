const command = require('../configChannel/configChannelCommands');
const desponde = require('../configChannel/configChannelResponde');
const configOuput = require('../configChannel/configOuput');

module.exports = {

    getConfigCommands: (channelID) => {
        return command[channelID]
    },

    getConfigResponde: (channelID) => {
        return desponde[channelID]
    },

    getConfigOutput: (execute) => {
        return configOuput[execute]
    }

}