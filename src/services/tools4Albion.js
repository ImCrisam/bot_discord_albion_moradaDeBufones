const https = require('https')
url = "https://gameinfo.albiononline.com/api/gameinfo"

module.exports = {

    getInfoPlayerName: async (nick) => {

        return new Promise(function (resolve, reject) {

            https.get(url + "/search?q=" + nick, res => {
                let data = '';
                res.on('data', chunk => {
                    data += chunk;
                });
                res.on('end', () => {
                    data = JSON.parse(data);
                    data = data.players;
                    resolve(data)

                })
            }).on('error', err => {
                reject(err);
            })

        });


    },

    getAllInfoPlayerID: async (idPlayer) => {

        return new Promise(function (resolve, reject) {

            https.get(url + "/players/" + idPlayer, res => {
                let data = '';
                res.on('data', chunk => {
                    data += chunk;
                });
                res.on('end', () => {
                    data = JSON.parse(data);
                    resolve(data)

                })
            }).on('error', err => {
                console.log(err.message);
                reject(err);
            })
        })
    },



}