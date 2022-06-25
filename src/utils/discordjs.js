module.exports = {


    getRolesByMsg: (msg) => {

        let roles = []
        msg.member.roles.cache.map((rol) => {
            roles.push(rol.id)
        })
        return roles.length === 1 ? ["none"] : roles;
    },

    getRolesById: (client, idMember) => {

        const myGuild = client.guilds.cache.get('819930498553217044');
        const user = myGuild.members.cache.get(idMember)
        let roles = []
        user.roles.cache.map((rol) => {
            roles.push(rol.id)
        })
        return roles.length === 1 ? ["none"] : roles;
    },

    addRolesMsg: async(msg, idUser, idRol) => {

        const user = await msg.guild.members.cache.get(idUser);
        //console.log(user);

        if(msg.member.roles.cache.has(idRol)) console.log("usuario con roles");
        try {
            msg.member.roles.add(idRol);
            return true
        } catch (error) {
            return false
        }
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