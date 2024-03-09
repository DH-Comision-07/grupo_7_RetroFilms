let productos = require('../models/productos.js');
const path = require('path');

const productoController = { 
    detalleProducto: (req, res) => res.render("detalleProducto"),
    carritoCompras: (req, res) => res.render("carritoCompras")
}

module.exports = productoController;