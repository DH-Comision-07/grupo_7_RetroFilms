let productService = require('../models/productService');
const path = require('path');


const productController = {
        shoppingCart: (req, res) => res.render("products/shoppingCart"), 
        id: (req, res) => res.render('products/productDetail', { movieDetails: productService.getOneBy(req.params.id) }), 
        create: (req, res) => res.render('creation'),
        add: (req, res) => {
                productService.addMovie(req.body,req.imagePaths);
                res.redirect('/')
        },
        edit: (req, res) => res.render('edition',{movie : productService.getOneBy(req.params.id)}),
        save:(req, res) => {
                        const { id } = req.params;
                        const updatedMovieInfo = req.body;
                        try { //basado en documentacion-busqueda online
                                const updatedMovie = productService.editMovie(id, updatedMovieInfo);
                                //res.json(updatedMovie); // Devuelve la película actualizada en formato JSON
                                res.redirect('/');
                        } catch (error) {
                                res.status(500).json({ message: error.message });
                }
        },
        find:  (req, res) => res.send ('se eliminó con exito'),
        delete:(req,res)=>{
                const { id } = req.params;
                try { 
                const updatedJSON = productService.deleteMovie(id);
                res.redirect('/');
                } catch (error) {
                res.status(500).json({ message: error.message });       
                }
        }
        
};

module.exports = productController;