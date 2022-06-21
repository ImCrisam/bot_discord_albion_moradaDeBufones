module.exports = {


    getRolesMsg: (msg) => {

        let roles = []
        msg.member.roles.cache.map((rol) => {
            roles.push(rol.id)
        })
        return roles.length === 1 ? ["none"] : roles;
    },

    changeNickName: (msg, nickname) => {
        
        try {
            msg.member.setNickname(nickname);
            
        } catch (error) {
            console.log(error);
        }
    },

    addReactionYesNo:(msg)=>{
        msg.react('✅');
        msg.react('❌');
    },
    addReactionNo:(msg)=>{
        msg.react('❌');
    },
    addReactionYes:(msg)=>{
        msg.react('✅');
    }

}