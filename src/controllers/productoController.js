let productoService = require('../models/productoService.js');
const path = require('path');


const productoController = { 
    detalleProducto: (req, res) => res.render("detalleProducto"),
    carritoCompras: (req, res) => res.render("carritoCompras"),
    idProducto: (req,res) => res.render('detalleProducto'), // falta el objeto literal para llamar el :id
    crear: (req, res) => res.render('creacion'),
    editar:(req, res) => res.render('edicion'),
    guardar: (req, res) => res.send('quedó guardado'),
    agregar: (req, res) => res.send('quedó guardado') //incorrecto-corregir
}

module.exports = productoController;