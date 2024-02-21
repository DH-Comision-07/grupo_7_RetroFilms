const express = require("express");
const app = express();
const path = require("path")
const publicPath = path.resolve(__dirname, "./public")
const port = 3000

app.listen(port, () => 
console.log("servidor corriendo en puerto " + port))

app.use(express.static(publicPath));

app.get("/", function(req, res){
    res.sendFile(path.resolve(__dirname, "./views/home.html"))
})

