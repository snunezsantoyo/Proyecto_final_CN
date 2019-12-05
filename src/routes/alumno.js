const router = require('express').Router();
const Serialport = require ('serialport');    
const Readline = Serialport.parsers.Readline;
const parser = new Readline();

// Models
//const mySerial = require('../index.js');
const Alumno = require('../models/alumno');

router.get('/alumno/signin', (req, res) => {
  res.render('alumno/signin');
});

router.post('/alumno/signin', async (req, res) => {     //controla el boton de Buscar en el signin
  
  const  {nua}  = req.body;

  const nua_Alumno = await Alumno.findOne({nua: nua});  //Busca NUA en la base de datos
    
    if(nua_Alumno) {
    
      const mySerial = new Serialport('/COM5',{     //Se le indica el puerto y la velocidad de transmisión
      baudRate : 57600
      });

      const parser = mySerial.pipe(new Readline({ delimiter: '\r\n'}));

      mySerial.on('open', function(){           //Manda este msj a consola cuando el puerto serial está activo
      console.log('Opened Serialport');
      });   

      mySerial.on('readable', function(){
       let arduino_msg = (mySerial.read().toString());
        console.log(arduino_msg);
       mySerial.write(nua_Alumno.id_huella);
      }); 

      req.flash('success_node', 'El NUA está registrado.');
      res.redirect('/alumno/signin');

    } else {
      req.flash('error_node', 'El NUA NO está registrado.');
      res.redirect('/alumno/signin');
    }


  
});

module.exports = router;
