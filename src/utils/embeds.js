const { formatFame} = require('./format');
const { shortFameForSite} = require('./tools4Albion');
module.exports = {

    infoPlayer: (user, infoPlayer, isBanAlli) => {
        const ffarm = infoPlayer.LifetimeStatistics.Gathering.All.Total + infoPlayer.LifetimeStatistics.FarmingFame + infoPlayer.LifetimeStatistics.FishingFame;
        return {
            embeds: [{
                color: isBanAlli ? "ff0000" : "00bb2D",
                author: {
                    name: user.username,
                    icon_url: user.avatarURL(),
                    id: infoPlayer.Id + ""
                },
                thumbnail: {
                    url: user.avatarURL()
                },

                title: "Aplicacion de " + infoPlayer.Name,
                description: "Guild: " + infoPlayer.GuildName + (infoPlayer.AllianceName?` [${infoPlayer.AllianceName}]`:""),
                fields: [
                    //---- general
                    {
                        name: "BlackList:",
                        value: isBanAlli ? "Si" : "No",
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
                        name: "PvP Fame",
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
                    //-----6 pve
                    lineOfTreeFameArry(shortFameForSite(infoPlayer.LifetimeStatistics.PvE), "PvE"),
                    
                    //---9 farm
                    lineOfTreeFameArry(shortFameForSite(infoPlayer.LifetimeStatistics.Gathering.All), "Farm"),
                    //---12 other
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
                    {
                        name: "FishingFame",
                        value: formatFame(infoPlayer.LifetimeStatistics.FishingFame),
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

function lineOfTreeFameArry(arry, type) {
    let result =[]
    for (const item of arry) {
        result.push({
            name: item[0]=="Outlands"?"Black":item[0],
            value: formatFame(item[1]),
            inline: true
        },)
        if(result.length>2) break

    }
    result[0].name = result[0].name+" " +type
    return result

    
}