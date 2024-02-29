const express = require("express");
const app = express();
const path = require("path")
const publicPath = path.resolve(__dirname, "./public")

app.listen(3030, () => 
console.log("servidor corriendo en puerto "));

app.get("/detalleProducto", function(req, res){
    res.sendFile(path.resolve(__dirname, "./views/detalleProducto.html"))
})

app.use(express.static(publicPath));

app.listen(3030, () => {
console.log("servidor corriendo en puerto 3060");
});

app.get("/carritoCompras", function(req, res){
    res.sendFile(path.resolve(__dirname, "./views/carritoCompras.html"))
})

