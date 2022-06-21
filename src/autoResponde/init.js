const utils = require('../utils/discordjs');
const config = require('../services/configChannel');
const answers = require('./answers');

module.exports ={
    init : (msg) => {
		const configChannel = config.getConfigResponde(msg.channelId);
		if(!configChannel) return;
		
        const content = msg.content;
		const firstWord = content.slice(0,content.indexOf(" ") != -1 ? content.indexOf(" "): undefined).replace(',', '').toLowerCase();
		const response = configChannel.answers[firstWord]
		if(!response) return;
		
		let executed = [];		
		utils.getRoles_msg(msg).forEach(rol => {
			if (answers.hasOwnProperty(response[rol]) && !executed.includes(response[rol])) {
				answers[response[rol]](msg)
				executed.push(response[rol])
			}
		});

		
    },

}