const fs = require("node:fs");

const lerRelatorio = (callback) => {
    fs.readFile('relatorios.json', 'utf8', (err, data) => {
        if (err) {
            callback(err)
        }
        try {
            const relatorios = JSON.parse(data)
            callback(null, relatorios)
        }
        catch (error) {
            callback(error)
        }

    })

}

module.exports = lerRelatorio