const fs = require("node:fs");

const escreverRelatorio = (callback)=>{
    fs.writeFile('relatorios.json', (err)=>{
        if(err){
            callback(err)
            
        }try{
            JSON.stringify(jsonData, null, 2)
        }catch(error){
            callback(error)
        }
    })
}

export default escreverRelatorio