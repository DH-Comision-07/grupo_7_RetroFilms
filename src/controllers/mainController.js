let products = require('../models/productos.js');

const mainController = { 
    index: (req, res) => res.render("index", {productos: products.getAll()}),
}

module.exports = mainController;