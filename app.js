const express = require("express");
const app = express();
const path = require("path")
const publicPath = path.resolve(__dirname, "./public")
<<<<<<< HEAD









app.listen(3030, () => 
console.log("servidor corriendo en puerto "))

=======
>>>>>>> develop
app.use(express.static(publicPath));

app.listen(3060, () => {
console.log("servidor corriendo en puerto 3060");
});

app.get("/", function(req, res){
    res.sendFile(path.resolve(__dirname, "./views/home.html"));
})

app.get("/detalleProducto", function(req, res){
    res.sendFile(path.resolve(__dirname, "./views/detalleProducto.html"))
})

<<<<<<< HEAD

=======
app.get("/carritoCompras", function(req, res){
    res.sendFile(path.resolve(__dirname, "./views/carritoCompras.html"))
})
>>>>>>> develop

