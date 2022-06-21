module.exports = {


    getRoles_msg: (msg) => {

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

}