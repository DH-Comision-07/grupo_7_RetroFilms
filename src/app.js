const express = require("express");
const app = express();
const path = require("path");
const port = 8080;
const methodOverride = require ('method-override');
const bodyParser = require ('body-parser');
const indexRouter = require("./routes/index.routes");
const session = require ('express-session');
const cookies = require('cookie-parser')

app.use(methodOverride('_method')) // middleware para habilitar

const loggedUserMid = require ('./middlewares/loggedUserMid');

// Middleware body-parser para analizar los datos del cuerpo de las solicitudes HTTP
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({
    secret:'es un secretoooo',
    resave:false,
    saveUninitialized:false
}))

app.use(cookies());

app.use(loggedUserMid); //middleware para el usuario logueado en el inde



app.listen(port, () => 
console.log('http://localhost:'+ port));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "/views"));

app.use(express.static('public'));

app.use(express.urlencoded( { extended: false } )); //permite que los campos de formularios se capturen via post en "req.body"     
app.use(express.json());

app.use('/', indexRouter);

