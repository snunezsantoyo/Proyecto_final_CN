const mongoose = require('mongoose');

//Dirección de la base de datos 
const URI = 'mongodb://localhost/mean-crud';

mongoose.connect(URI)
    .then(db => console.log('DB conectada'))
    .catch(err => console.error(err));
module.exports = mongoose;