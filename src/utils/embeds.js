const {formatFama} = require('./format');
module.exports = {

    infoPlayer: (user, infoPlayer, isBanAlli) => {
        return {
            embeds: [{
                color: isBanAlli ? "ff0000" : "00bb2D",
                author: {
                    name: user.username,
                    icon_url: user.avatarURL()
                },
                thumbnail: {
                    url: user.avatarURL()
                },

                title: "Aplicacion de " + infoPlayer.Name,
                description: "Guild: " + infoPlayer.GuildName + ` [${infoPlayer.AllianceName}]`,
                fields: [{
                    name: "Baneado de la alianza :",
                    value: isBanAlli ? "SI" : "NO",
                    inline: false
                },
                {
                    name: "Fama pve Total",
                    value: formatFama(infoPlayer.LifetimeStatistics.PvE.Total),
                    inline: true
                },
                {
                    name: "Fama pve Royal",
                    value: formatFama(infoPlayer.LifetimeStatistics.PvE.Royal),
                    inline: true
                },
                {
                    name: "Fama pve Negra",
                    value: formatFama(infoPlayer.LifetimeStatistics.PvE.Outlands),
                    inline: true
                },
                {
                    name: "Fama pve Avalon",
                    value: formatFama(infoPlayer.LifetimeStatistics.PvE.Avalon),
                    inline: true
                },
                
                ],
                timestamp: new Date(),
                footer: {
                    text: infoPlayer.Id+""
                }
            }]
        };
    },



}