const http = require('http')
const url = "http://2mc.top:23412"

module.exports = {

    isBlackListAlli: async (nick) => {
        return new Promise(function (resolve, reject) {

            http.get(url + "/searchBlackList?name=" + nick, res => {
                let data = '';
                res.on('data', chunk => {
                    data += chunk;
                });
                res.on('end', () => {
                    data = JSON.parse(data);
                    resolve(data.players);

                })
            }).on('error', err => {
                reject(err);
            })

        });


    },
    

}