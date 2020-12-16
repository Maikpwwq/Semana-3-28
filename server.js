const express = require('express');
// const db = require('./models');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const apiRouter = require('./routes/index');
const cors = require('cors');

// instancia de express actualiza los cambios en el servidor
const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // "http://localhost:3000"
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    // res.header("Access-Control-Allow-Methods: GET, POST, PUT, HEAD, OPTIONS");
    //res.header("Access-Control-Allow-Credentials", "true");
    next();
});

// middleware de las peticiones tiny combine common dev
app.use(morgan('dev'));
app.use(cors()); //{origin: '*', optionsSuccessStatus: 200}
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')))

// Ruta inicial que imprime en el navegador
app.get('/', function(req, res) {
    console.log("Estructura base del proyecto backend");
    res.send("Estructura base del proyecto backend");
});

// API ENDPOINTS
app.use('/api', apiRouter);

const port = 3000;
app.set('PORT', process.env.PORT || port);

app.listen(app.get('PORT'), () => {
    console.log('Server up');
    console.log(`Running on http://localhost:`+ app.get('PORT'))
});

module.exports = app;