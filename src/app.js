const express = require("express");
const app = express();
const path = require("path");
const port = 8085;
const methodOverride = require ('method-override')
const indexRouter = require("./routes/index.routes")

app.use(methodOverride('_method')) // middleware para habilitar
app.listen(port, () => 
console.log('https://localhost:'+ port));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "/views"));

app.use(express.static('public'));

app.use(express.urlencoded( { extended: false } ));//permite que los campos de formularios se env    
app.use(express.json())

app.use('/', indexRouter);

