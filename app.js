const express = require("express");
const app = express();
const path = require("path")
const publicPath = path.resolve(__dirname, "./public")

app.listen(3030, () => 
console.log("servidor corriendo en puerto "));


app.use(express.static(publicPath));

app.listen(3030, () => {
console.log("servidor corriendo en puerto 3060");
});

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

app.post("/register", function(req, res){
    res.send("Se registró con exito")
})