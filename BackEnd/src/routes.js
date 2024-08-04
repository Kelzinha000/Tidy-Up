const express = require("express");
const fs = require("node:fs");
const lerRelatorio = require("./lerRelatorio.js")
const { v4: uuidv4 } = require("uuid");


const routes = express.Router();
const users = [
  {
    id: 1,
    name: "Duda",
    cpf: "0000000000",
    password: "123456",
  },
];

routes.post("/", (request, response) => {
  const { cpf, password } = request.body;
  const user = users.find(
    (user) => user.cpf === cpf && user.password === password
  );
  //validacao
  if (user) {
    return response.status(200).json({ cpf, password });
  }
    return response.status(401).json({ message: "Usuário ou senha incorretos" });
});


//cadastrar relatorios

routes.post("/relatorio", (request, response)=>{
  let body = request.body
  const { ambiente, data, hora } = request.body

  if(!ambiente){
    return response.status(401).json({ message: "Ambiente invalido" });
  }
  if(!data){
    return response.status(401).json({ message: "Data invalida" });
  }
  if(!hora){
    return response.status(401).json({ message: "Hora invalida" });
  }
  const novoRelatorio = body
  lerRelatorio((err, relatorios)=>{
    if(err){
      response.writeHead(500 ,{"Content-Type":"application/json"})
      response.end(JSON.stringify({message:"Erro ao ler relatorio"}))
      return
  }
  
  novoRelatorio.id = uuidv4()
  relatorios.push(novoRelatorio)

  fs.writeFile("relatorios.json", JSON.stringify(relatorios, null, 2), (err)=>{
    if(err){
      response.writeHead(500, {'Content-Type':'application/json'})
      response,end(JSON({message:'Erro interno no Servidor'}))
      return
    }
    response.writeHead(201, { "Content-Type": "application/json" });
    response.end(JSON.stringify(novoRelatorio));
    return
    })

  })

})



//cadastro
// routes.post("/cadastrar", (request, response) => {
//   let body = "";
//   request.on('data', (chunk)=>{
//     body += chunk
//   })
//   request.on('end', ()=>{
//     if(!body){
//         response.status(400).json({ message: "Corpo da apliação vazio" })
//         return;
//     }
//     const novoFuncionario = JSON.parse(body)
//     lerNovofuncionario((err, funcionarios)=>{
//         if(err){
//             response.status(500).json({ message: "Erro ao ler o funcionario" })
//             return
//         }
//         novoFuncionario.id = uuidv4()
//         funcionarios.push(novoFuncionario)

//         fs.writeFile('funcionarios.json', JSON.stringify(funcionarios, null, 2), ()=>{
//             if(err){
//                 response.status(500).json({ message: "Erro ao ler os dados de funcionarios" })
//                 return
//             }
            
//         })
//         response.status(201).json(novoFuncionario)
//         return
//     })
//   })
// });

module.exports = routes;
