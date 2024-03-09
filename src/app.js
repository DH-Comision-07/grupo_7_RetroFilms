const express = require("express");
const app = express();
const path = require("path")
const publicPath = path.resolve(__dirname, "./public")
const port = 3000
const indexRouter = require("./routes/index.routes")


app.listen(3000, () => 
console.log('https://localhost:'+ port));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "/views"));

app.use(express.static(publicPath));

/* app.use('/', indexRouter); */


app.get('/', (req, res) =>{
    res.sendFile(path.resolve(__dirname, './views/index.html'))
});

app.get("/detalleProducto", function(req, res){
    res.sendFile(path.resolve(__dirname, "./views/detalleProducto.html"))
})

app.get("/carritoCompras", function(req, res){
    res.sendFile(path.resolve(__dirname, "./views/carritoCompras.html"))
})

app.get("/register", function(req, res){
    res.sendFile(path.resolve(__dirname, "./views/formularioRegistro.html"))
})

app.get("/login", function(req, res){
    res.sendFile(path.resolve(__dirname, "./views/login.html"))
})

app.post("/register", function(req, res){
    res.send("Se registró con exito")
})