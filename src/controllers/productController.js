let productService = require('../services/productService');
const path = require('path');
const db = require("../database/models");


// const productController = {
//         shoppingCart: (req, res) => res.render("products/shoppingCart"), 
//         id: (req, res) => res.render('products/productDetail', { movieDetails: productService.getOneBy(req.params.id) }), 
//         create: (req, res) => res.render('creation'),
//         add: (req, res) => {
//                 console.log(req.imagePath);
//                 console.log(req.imagePaths);
//                 productService.addMovie(req.body, req.imagePath, req.imagePaths);
//                 res.redirect('/')
//         },
//         edit: (req, res) => res.render('edition',{movie : productService.getOneBy(req.params.id)}),
//         save:(req, res) => {
//                         const { id } = req.params;
//                         const updatedMovieInfo = req.body;
//                         try { //basado en documentacion-busqueda online
//                                 const updatedMovie = productService.editMovie(id, updatedMovieInfo, req.imagePath, req.imagePaths);
//                                 res.redirect('/');
//                         } catch (error) {
//                                 res.status(500).json({ message: error.message });
//                 }
//         },
//         delete:(req,res)=>{
//                 const { id } = req.params;
//                 try { 
//                 const updatedJSON = productService.deleteMovie(id);
//                 res.redirect('/');
//                 } catch (error) {
//                 res.status(500).json({ message: error.message });       
//                 }
//         }
        
// };




// ------------- DB ------------- //
const productController = { 
        detail: async function(req,res) {
                try {
                        let movieDetail = await productService.getOne(req.params.id)
                        console.log(movieDetail.genres);
                        return res.render("products/productDetail", {movieDetail:movieDetail})
                } catch (error) {
                        console.log(error)
                        res.send("Ha ocurrido un error al buscar la pelicula")
                }

        },

        add: async function(req,res) {
                try {
                        let newMovie = await productService.newMovieData(req.body);
                        //console.log(req.files);
                        //console.log(req.body);
                        // let newImages = await productService.newImage(req.files)
                        //console.log(newMovie);
                        res.redirect("/");
                        return (newMovie)
                
                } catch (error) {
                        console.log(error)
                        res.send("Ha ocurrido un error al crear la pelicula")
                }
        },

        create: (req,res) => res.render('creation'),

        edit: async function (req,res) { 
                try {
                        await productService.getOne(req.params.id)
                        .then(function(movie){
                                res.render("edition", {movie:movie})
                        }) 
                } catch (error) {
                        console.log(error)
                        res.send("Ha ocurrido un error al buscar la pelicula")
                }
        },

        update: async function(req, res) {
                try {
                        await productService.updateOne(req.params.id, req.body, req.files)
                        res.redirect("/products/productDetail/" + req.params.id)
                } catch (error) {
                        console.log(error)
                        res.send("Ha ocurrido un error al buscar la pelicula")
                }
        },

        delete: async function(req, res) {
                try {
                        
                } catch (error) {
                        
                }
        }

}

module.exports = productController;