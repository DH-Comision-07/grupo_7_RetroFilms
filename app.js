const express = require("express");
const app = express();
const path = require("path")
const publicPath = path.resolve(__dirname, "./public")
app.use(express.static(publicPath));

app.listen(3060, () => {
console.log("servidor corriendo en puerto 3060");
});

app.get("/", function(req, res){
    res.sendFile(path.resolve(__dirname, "./views/home.html"))
})

app.get("/carritoCompras", function(req, res){
    res.sendFile(path.resolve(__dirname, "./views/carritoCompras.html"))
})

