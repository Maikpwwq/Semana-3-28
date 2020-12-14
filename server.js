const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const apiRouter = require('./routes');

// instancia de express actualiza los cambios en el servidor
const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods: GET, POST");
    next();
});

// middleware de las peticiones tiny combine common dev
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API ENDPOINTS
app.use('/api', apiRouter);

// Ruta inicial que imprime en el navegador
app.get('/', function(req, res) {
    console.log("Estructura base del proyecto backend");
    res.send("Estructura base del proyecto backend");
});

/*
const controller = require('./controllers/AuthController.js');
const db = require('./models');

app.get('/api/users', (req, res) => {
    db.user.findAll().then(users => res.json(users))
});
app.post('/api/auth/signin', controller.signin);
*/

const port = 3000;
app.set('PORT', process.env.PORT || port);

app.listen(app.get('PORT'), () => {
    console.log('Server up');
    console.log(`Running on http://localhost:${port}`)
});

module.exports = app;