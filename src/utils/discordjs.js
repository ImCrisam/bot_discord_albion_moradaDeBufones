 const getMemberById = async  (client, idMember) => {
    let myGuild = client.guilds.cache.get("819930498553217044")
    if(!myGuild) myGuild =  await client.guilds.fetch('819930498553217044');
    if (!myGuild) return undefined;

    let member = myGuild.members.cache.get(idMember);
    if(!member) member =  await myGuild.members.fetch(idMember);
    return member
};

module.exports = { getMemberById,

    getRolesByMsg: (msg) => {
        if (!msg) return;
        let roles = []
        msg.member.roles.cache.map((rol) => {
            roles.push(rol.id)
        })
        return roles.length === 1 ? ["none"] : roles;
    },

    getRolesById: async (client, idMember) => {

        const user = await getMemberById(client, idMember);
        if (!user) return [];
        let roles = []
        user.roles.cache.map((rol) => {
            roles.push(rol.id)
        })
        return roles.length === 1 ? ["none"] : roles;
    },

    addRolesMsg: async(member, idRol) => {

        if(member.roles.cache.has(idRol)) console.log("usuario con roles");
        try {
            member.roles.add(idRol);
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