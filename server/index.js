const express = require('express');
const morgan = require('morgan');
const app = express();

const {mongoose} = require('./database');

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares 
app.use(morgan('dev')); //Registra las peticiones 
app.use(express.json()); //Entender codigo Json

//Routes 

//Iniciado el servidor 
app.listen(3000, () =>{
    console.log('Server en el puerto', app.get('port'));
});