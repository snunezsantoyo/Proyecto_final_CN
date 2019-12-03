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
app.use('/api/students' ,require('./routes/estudiantes.routes'));

//Iniciado el servidor 
app.listen(3000, () =>{
    console.log('Server en el puerto', app.get('port'));
});