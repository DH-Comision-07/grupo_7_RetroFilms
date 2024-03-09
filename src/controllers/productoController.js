let productos = require('../models/productos.js');
const path = require('path');

const productoController = { 
    detalleProducto: (req, res) => res.render("./products/detalleProducto"),
    carritoCompras: (req, res) => res.render("./products/carritoCompras")
}

module.exports = productoController;