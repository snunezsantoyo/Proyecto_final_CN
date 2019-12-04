const router = require('express').Router();
const Alumno = require('../models/alumno');

router.get('/profesor/nuevoalumno', async (req, res) => {
    const alumnos = await Alumno.find();
    res.render('profesor/nuevoAlumno', {alumnos});
  });

  router.post('/addalumno', async (req, res) =>{
    const {name, email, nua, id_huella}=req.body;
    const errors=[];
    if(!name || !email || !nua || !id_huella){
        errors.push({text:'No puede dejar campos vacios'});
    }

    if(errors.length>0){ 
        res.render('profesor/nuevoAlumno', {
            errors
        });
        
    }else{
        const alum = new Alumno(req.body);
        await alum.save();
        res.redirect('profesor/nuevoAlumno');
    }
  });

  router.get('/deletealumno/:id', async (req, res) =>{
    const {id} = req.params;
    await Alumno.remove({_id: id});
    res.redirect('/profesor/nuevoAlumno');
  });

  router.get('/editalumno/:id', async (req, res) =>{
    const {id} = req.params;
    const alum = await Alumno.findById(id);
    
    res.render('profesor/editAlumno', {
        alum
    });
  });

  router.put('/edit-alumno/:id', async (req, res) =>{
    const {name, email, nua, id_huella} = req.body; 
    const {id} = req.params;
    await Alumno.findByIdAndUpdate(id, {name, email, nua, id_huella});
    res.redirect('../profesor/nuevoAlumno');
  });

  module.exports = router;