const command = require('../configChannel/configChannelCommands');
const desponde = require('../configChannel/configChannelResponde');
const configOuput = require('../configChannel/configOuput');
const configReaction = require('../configChannel/configChannelReactions');

module.exports = {

    getConfigCommands: (channelID) => {
        return command[channelID]
    },

    getConfigResponde: (channelID) => {
        return desponde[channelID]
    },

    getConfigOutput: (channelID) => {
        return configOuput[channelID]
    },
    getConfigReactions: (channelID) => {
        return configReaction[channelID]
    }

}