const utils = require('../utils/discordjs');
const config = require('./config');




module.exports ={
    init : (msg) => {
		const configChannel = config[msg.channelId];
		if(!configChannel) return;
		

        const content = msg.content;
		const firstWord = content.slice(0,content.indexOf(" ") != -1 ? content.indexOf(" "): undefined).replace(',', '').toLowerCase();
		const command = configChannel.answers[firstWord]
		if(!command) return;
		
		console.log(command);
		const roles = utils.roles_msg(msg)
		console.log(roles);


		
		
    },

}