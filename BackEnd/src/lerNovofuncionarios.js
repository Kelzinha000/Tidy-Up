import fs from 'node:fs'

const lerNovofuncionario = (callback) =>{
    fs.readFile('funcionarios.json', 'utf8', (err, data)=>{
        if(err){
            callback(err)
        }
        try {
            const funcionario = JSON.parse(data)
            callback(null, funcionario)
        }
        catch(error){
            callback(error)
        }

})

}

export default lerNovofuncionario;