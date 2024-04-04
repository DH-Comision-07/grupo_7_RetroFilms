let productService = require('../models/productService');
const path = require('path');


const productController = {
        shoppingCart: (req, res) => res.render("products/shoppingCart"), //añadí la carpeta products que nos pidieron añadir en el sprint pasado, pues sin ella no renderisa la vista
        id: (req, res) => res.render('products/productDetail', { movieDetails: productService.getOneBy(req.params.id) }), // falta el objeto literal para llamar el :id
        create: (req, res) => res.render('creation'),
        add: (req, res) => {
                productService.addMovie(req.body,req.imagePaths);
                res.redirect('/')
        },
        edit: (req, res) => res.render('edition'),
        save:(req, res) => {
                        const { id } = req.params;
                        const updatedMovieInfo = req.body;
                        try {
                                const updatedMovie = productService.editMovie(id, updatedMovieInfo);
                                res.json(updatedMovie); // Devuelve la película actualizada en formato JSON
                        } catch (error) {
                                res.status(500).json({ message: error.message });
                }
        }
        
};

module.exports = productController;