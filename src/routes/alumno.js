const router = require('express').Router();
// Models
//const mySerial = require('../index.js');
const Alumno = require('../models/alumno');

router.get('/alumno/signin', (req, res) => {
  res.render('alumno/signin');
});

router.post('/alumno/signin', async (req, res) => {     //controla el boton de Buscar en el signin
  let mensaje_arduino = [];
  const { NUA } = req.body;   //Guarda el valor NUA que fue escrito en la pagina 

  const nua_Alumno = await Alumno.findOne({NUA: NUA});  //Busca NUA en la base de datos
  
    if(nua_Alumno) {

      //Comunicacion serial con arduino
      req.flash('success_node', 'El NUA está registrado.');
      res.redirect('/alumno/signin');


    } else {
      req.flash('error_node', 'El NUA NO está registrado.');
      res.redirect('/alumno/signin');
      console.log(error_node);
    }
  
});

module.exports = router;
