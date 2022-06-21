const { formatFame} = require('./format');
const { shortFameForSite: Max3FameForSite} = require('./tools4Albion');
module.exports = {

    infoPlayer: (user, infoPlayer, isBanAlli) => {
        const ffarm = infoPlayer.LifetimeStatistics.Gathering.All.Total + infoPlayer.LifetimeStatistics.FarmingFame + infoPlayer.LifetimeStatistics.FishingFame;
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
                fields: [
                    //---- general
                    {
                        name: "BlackList:",
                        value: isBanAlli ? "SI" : "NO",
                        inline: true
                    },
                    {
                        name: '\u200b',
                        value: '\u200b',
                        inline: true,
                    },
                    {
                        name: "Fama Total",
                        value: formatFame(infoPlayer.LifetimeStatistics.PvE.Total + infoPlayer.KillFame + infoPlayer.LifetimeStatistics.Crafting.Total + ffarm),
                        inline: true
                    },
                    //----3 pvp
                    {
                        name: "Kill Fame",
                        value: formatFame(infoPlayer.KillFame),
                        inline: true
                    },
                    {
                        name: "Death Fame",
                        value: formatFame(infoPlayer.DeathFame),
                        inline: true
                    },
                    {
                        name: "Ratio PVP ",
                        value: formatFame(infoPlayer.FameRatio),
                        inline: true
                    },
                    //-----4 pve
                    Max3FameForSite(infoPlayer.LifetimeStatistics.PvE),
                    {
                        name: "PVE Total",
                        value: formatFame(infoPlayer.LifetimeStatistics.PvE.Total),
                        inline: false
                    },
                    {
                        name: "as",
                        value: "±" + formatFame(ffarm),
                        inline: true
                    },
                    //---
                    {
                        name: "Farm",
                        value: "±" + formatFame(ffarm),
                        inline: true
                    },
                    {
                        name: "Craft",
                        value: formatFame(infoPlayer.LifetimeStatistics.Crafting.Total),
                        inline: true
                    },
                    {
                        name: "CrystalLeague",
                        value: formatFame(infoPlayer.LifetimeStatistics.CrystalLeague),
                        inline: true
                    },


                ],
                timestamp: new Date(),
                footer: {
                    text: infoPlayer.Id + ""
                }
            }]
        };
    },



}