let productoService = require('../models/productoService.js');
const path = require('path');


const productoController = { 
    //detalleProducto: (req, res) => res.render("products/detalleProducto"),//TODO: (LAURA) cambiar el valor de 1 por el parametro del id //añadí la carpeta products que nos pidieron añadir en el sprint pasado, pues sin ella no renderisa la vista
    carritoCompras: (req, res) => res.render("products/carritoCompras"), //añadí la carpeta products que nos pidieron añadir en el sprint pasado, pues sin ella no renderisa la vista
    id:(req, res) => res.render("products/detalleProducto",{movieDetails: productoService.getOneBy(req.params.id)}),// falta el objeto literal para llamar el :id
    crear: (req, res) => res.render('creacion'),
    editar:(req, res) => res.render('edicion'),
    guardar: (req, res) => res.send('quedó guardado'),
    agregar: (req, res) => res.send('quedó guardado') //incorrecto-corregir
}

module.exports = productoController;