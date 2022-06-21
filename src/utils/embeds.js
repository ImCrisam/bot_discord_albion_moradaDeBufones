module.exports = {

    infoPlayer: (user, infoPlayer, isBanAlli) => {
        return { embeds: [{
            color: isBanAlli? "ff0000":"00bb2D",
            author: {
                name: user.username,
                icon_url: user.avatarURL()
            },
            thumbnail: {
              url: user.avatarURL()
            },
            
            title: "Aplicacion de "+ infoPlayer.Name,
            description: "Guild: "+infoPlayer.GuildName,
            fields: [{
              name: "Baneado de la alianza :",
              value: isBanAlli? "SI":"NO",
              inline: false
            },
            {
              name: "Inline fields",
              value: "They can have different fields with small headlines, and you can inline them.",
              inline: true
            },
            {
              name: "Masked links",
              value: "You can put [masked links](https://discord.js.org/#/docs/main/master/class/MessageEmbed) inside of rich embeds.",
              inline: true
            },
            {
              name: "Markdown",
              value: "You can put all the *usual* **__Markdown__** inside of them.",
              inline: true
            },
            {
              name: "\u200b",
              value:"\u200b"
            }],
            timestamp: new Date(),
            footer: {
              text: "This is the footer text, it can hold 2048 characters"
            }
          }]};
    },

   

}