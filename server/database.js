const mongoose = require('mongoose');

//Dirección de la base de datos 
//const URI = 'mongodb://mongo:27017/mean-crud';

const URI = 'mongodb://localhost:27017/mean-crud';

mongoose.connect(URI)
    .then(db => console.log('DB conectada'))
    .catch(err => console.error(err));
module.exports = mongoose;