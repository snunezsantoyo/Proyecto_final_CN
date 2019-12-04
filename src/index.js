const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const methodOverride = require('method-override');
const session = require('express-session');
const flash = require('connect-flash');
//const Serialport = require ('serialport');    
//const Readline = Serialport.parsers.Readline;
//const parser = new Readline();

// Initializations
const app = express();
require('./database');

  /*    const mySerial = new Serialport('/COM5',{     //Se le indica el puerto y la velocidad de transmisión
      baudRate : 57600
      });

      mySerial.on('open', function(){           //Manda este msj a consola cuando el puerto serial está activo
      console.log('Opened Serialport');
      });*/

/*mySerial.on('data', function (data){      //Recibe los datos y los imprime en consola
      
      console.log(data.toString());
    
      });
mySerial.write('E', (err) => {
        if(err) {
          console.log('error on write', err.message);
        }
        console.log('mensaje eviado');

      }); */

app.set('port', process.env.PORT || 3000);

app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  layoutsDir: path.join(app.get('views'), 'layouts'),
  partialsDir: path.join(app.get('views'), 'partials'),
  extname: '.hbs'
}))
app.set('view engine', '.hbs');

// middlewares
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));

app.use(flash());

// Global Variables
app.use((req, res, next) => {
  res.locals.success_node = req.flash('success_node');
  res.locals.error_node = req.flash('error_node');
  res.locals.alumno = req.alumno || null;
  next();
});

// routes
app.use(require('./routes'));
app.use(require('./routes/alumno'));
app.use(require('./routes/profesor'));

// static files
app.use(express.static(path.join(__dirname, 'public')));

// Server is listening
app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'));
});
