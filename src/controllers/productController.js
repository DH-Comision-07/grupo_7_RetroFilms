let productService = require('../models/productService');
const path = require('path');


const productController = {
        shoppingCart: (req, res) => res.render("products/shoppingCart"), //añadí la carpeta products que nos pidieron añadir en el sprint pasado, pues sin ella no renderisa la vista
        id: (req, res) => res.render('products/productDetail', { movieDetails: productService.getOneBy(req.params.id) }), // falta el objeto literal para llamar el :id
        create: (req, res) => res.render('creation'),
        edit: (req, res) => res.render('edition'),
        save: (req, res) => res.send('quedó guardado'),
        add: (req, res) => {
                productService.addMovie(req.body,req.imagePaths);
                res.send('quedó guardado');
        }
}

module.exports = productController;