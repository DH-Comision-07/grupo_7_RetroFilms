let productService = require('../models/productService.js');
const path = require('path');


const productController = { 
    detalleProducto: (req, res) => res.render("products/detalleProduct/", {product: productService.getOneBy(req.params.id)}), //añadí la carpeta products que nos pidieron añadir en el sprint pasado, pues sin ella no renderisa la vista
    carritoCompras: (req, res) => res.render("products/carritoCompras"), //añadí la carpeta products que nos pidieron añadir en el sprint pasado, pues sin ella no renderisa la vista
    idProducto: (req,res) => res.render('detalleProduct', {product: productService.getOneBy(req.params.id)}), // falta el objeto literal para llamar el :id
    crear: (req, res) => res.render('creacion'),
    editar:(req, res) => res.render('edicion'),
    guardar: (req, res) => res.send('quedó guardado'),
    agregar: (req, res) => res.send('quedó guardado') //incorrecto-corregir
}

module.exports = productController;