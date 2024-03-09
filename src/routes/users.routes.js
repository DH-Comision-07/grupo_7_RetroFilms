const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const routes = require('./index.routes');

router.get("/login", usersController.login)
router.get("/register", usersController.register)

/*app.get("/register", function(req, res){
    res.sendFile(path.resolve(__dirname, "./views/formularioRegistro.html"))
})

app.get("/login", function(req, res){
    res.sendFile(path.resolve(__dirname, "./views/login.html"))
})

app.post("/register", function(req, res){
    res.send("Se registró con exito")
}) */

module.exports = router