const mongoose = require('mongoose');
const {Schema} = mongoose;

const StudentSchema = new Schema({
    nua: {type: Int, required: true},
    nombre: {type: String, required: true},
    apellidos: {type: String, required: true},
    materia: {type: String, required: true}
});

module.exports = mongoose.model('estudiante', StudentSchema);