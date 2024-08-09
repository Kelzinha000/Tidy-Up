const express = require('express');
const app = express();
const cors = require('cors')
const routes = require('./routes.js')


app.use(express.json());
app.use(cors())
app.use(routes);


app.get('lerRelatorios', (request, response)=>{
    
})

app.post('/', (request, response) => {
});

app.post('/cadastrar', (request, response)=>{
})

app.post('/relatorio', (request, response)=>{
})

app.listen(3000, ()=>{
    console.log('Port 3000 ON')
});