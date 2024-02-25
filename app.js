const express = require("express");
const app = express();
const path = require("path")
const publicPath = path.resolve(__dirname, "./public")









app.listen(3030, () => 
console.log("servidor corriendo en puerto "))

app.use(express.static(publicPath));

app.get("/", function(req, res){
    res.sendFile(path.resolve(__dirname, "./views/home.html"));
})

app.get("/detalleProducto", function(req, res){
    res.sendFile(path.resolve(__dirname, "./views/detalleProducto.html"))
})



