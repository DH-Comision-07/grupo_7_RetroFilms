let productos = require('../models/productos.js');
const path = require('path');

const usersController = { 
    login: (req, res) => res.render("login"),
    register: (req, res) => res.render("formularioRegistro")
}

module.exports = usersController;