const express = require('express');
const app = express();
const cors = require('cors')
const routes = require('./routes.js')


app.use(express.json());
app.use(cors())
app.use(routes);



app.post('/', (request, response) => {
    response.send('Hello World!');	
});

app.post('/cadastrar', (request, response)=>{
    response.send("FOIII")
})

app.listen(3000, ()=>{
    console.log('Port 3000 ON')
});