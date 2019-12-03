const Estudiante = require('../models/student');

const studentCtrl = {};

studentCtrl.getStudents = async (req, res) =>{
   const estudiantes = await Estudiante.find();
   res.json(estudiantes);
};

studentCtrl.createStudent = async (req, res) =>{ 
   const estudiante = new Estudiante(req.Body);
   await estudiante.save();
   res.json({
      'status': 'Estudiante registrado'
   });
};

studentCtrl.getStudent = async (req, res) =>{
   const estudiante = await Estudiante.findById(req.params.id);
   res.json(estudiante);
};

studentCtrl.editStudent = (req, res) =>{
   const estudiante ={
      nua: req.body.nua,
      nombre: req.body.nombre,
      apellidos: req.body.apellidos,
      materia: req.body.materia
   };
   Estudiante.findByIdAndUpdate(req.params.id, {$set: estudiante}, {new: true});
   res.json({status: 'Actualizado'});
};

studentCtrl.deleteStudent = async (req, res) =>{
   await Estudiante.findByIdAndRemove(req.params.id);
   res.json({status: 'Eliminado'});
};

module.exports = studentCtrl;