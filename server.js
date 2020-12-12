/*en caso de  hacer uso con el directorio controlador se 
debe importar como se observa en la siguiente linea, con el nombre del archivo js
que contiene la logica */
//const controller = require('./controller/nombredelcontrollador.js');
const express = require('express');
const app = express();
const apiRouter = require('./routes'); // index.js
const morgan = require('morgan');

const bodyParser = require('body-parser');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods: GET, POST");
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// middleware de las peticiones tiny combine common dev
app.use(morgan('dev'));

// API ENDPOINTS
app.use('/api', apiRouter);

// Ruta inicial que imprime en el navegador
app.get('/', function(req, res) {
    console.log("Estructura base del proyecto backend");
    res.send("Estructura base del proyecto backend");
});

const port = '3000';
app.set('PORT', process.env.PORT || 3000);

app.listen(app.get('PORT'), () => {
    console.log('Server up');
    console.log(`Running on http://localhost:${port}`)
});

module.exports = app;