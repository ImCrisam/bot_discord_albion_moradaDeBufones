module.exports ={

   
    roles_msg : (msg) => {
        let roles = []
        msg.member.roles.cache.map((rol) => {
            roles.push(rol.id)
        })
        return roles
    },

    addguild : (msg, params) => {
        return `parametros ${params}`
    },

}