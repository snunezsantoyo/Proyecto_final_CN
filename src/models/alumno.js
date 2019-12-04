const mongoose = require('mongoose');
const { Schema } = mongoose;

const AlumnoSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  nua: {type: String, required: true},
  id_huella: {type: String, required: true},
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Alumno', AlumnoSchema);
