const express = require('express');
const app = express();

app.get('/prueba',function(request,response){
    response.send('Hola mundo');
})

app.listen(66444);