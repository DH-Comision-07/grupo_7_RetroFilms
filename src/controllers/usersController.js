let products = require('../models/productService.js');
const path = require('path');

const usersController = { 
    login: (req, res) => res.render("./users/login"),
    register: (req, res) => res.render("./users/formularioRegistro")
}

module.exports = usersController;