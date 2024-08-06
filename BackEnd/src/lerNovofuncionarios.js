const fs = require("node:fs");

const lerNovofuncionario = (callback) =>{
    fs.readFile('funcionarios.json', 'utf8', (err, data)=>{
        if(err){
            callback(err)
        }
        try {
            const funcionarios = JSON.parse(data)
            callback(null, funcionarios)
        }
        catch(error){
            callback(error)
        }
})

}

module.exports = lerNovofuncionario