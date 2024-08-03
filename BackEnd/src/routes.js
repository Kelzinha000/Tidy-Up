const express = require("express");
const fs = require("node:fs");
const lerNovofuncionario = "./lerNovofuncionario.js";
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

  // if(!cpf){
  //   return response.status(400).json({ message: "O CPF é obrigatório" });
  //  }

  //  if(!password){
  //   return response.status(400).json({ message: "A senha é obrigatória" });
  //  }
  
  const user = users.find(
    (user) => user.cpf === cpf && user.password === password
  );

  //validacao
  if (user) {
    return response.status(200).json({ cpf, password });
  }



  return response.status(401).json({ message: "Usuário ou senha incorretos" });
});


//cadastro
routes.post("/cadastrar", (request, response) => {
  let body = "";
  request.on('data', (chunk)=>{
    body += chunk
  })
  request.on('end', ()=>{
    if(!body){
        response.status(400).json({ message: "Corpo da apliação vazio" })
        return;
    }
    const novoFuncionario = JSON.parse(body)
    lerNovofuncionario((err, funcionarios)=>{
        if(err){
            response.status(500).json({ message: "Erro ao ler o funcionario" })
            return
        }
        novoFuncionario.id = uuidv4()
        funcionarios.push(novoFuncionario)

        fs.writeFile('funcionarios.json', JSON.stringify(funcionarios, null, 2), ()=>{
            if(err){
                response.status(500).json({ message: "Erro ao ler os dados de funcionarios" })
                return
            }
            
        })
        response.status(201).json(novoFuncionario)
        return
    })
  })
});

module.exports = routes;
