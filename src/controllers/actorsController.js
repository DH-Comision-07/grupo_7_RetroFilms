let actorsService = require('../services/actorsService');
let productService = require('../services/productService');
const path = require('path');
const { update } = require('./productController');


const actorsController = { 

        view: async function(req,res) {
                try {
                        let actors = await actorsService.getAll()
                        return res.render("actors/actorsList", {actors:actors})
                } catch (error) {
                        console.log(error)
                        res.send("Ha ocurrido un error al mostrar los actores")
                }
        },

        detail: async function(req,res) {
                try {
                        let actor = await actorsService.getOne(req.params.id)
                        return res.render("actors/actorDetail", {actor:actor})
                } catch (error) {
                        console.log(error)
                        res.send("Ha ocurrido un error al mostrar el actor")
                }
        },

        create: async function(req, res) {
                try {
                        let movies = await productService.findAll();
                        let selectedMovies = req.body.moviesPlayedAt || [];
                        return res.render("actors/actorsCreation", { movies: movies, selectedMovies: selectedMovies });
                } catch (error) {
                        console.log(error);
                        res.send("Ha ocurrido un error al mostrar los actores");
                }
        },

        processCreate: async function(req, res) {
                try {
                        console.log(req.body)
                        console.log(req.file);
                        await actorsService.newActor(req.body, req.file);
                        return res.redirect("/actors");
                } catch (error) {
                        console.log(error);
                        res.send("el actor no pudo crearse");
                }
        },

        edit: async function(req,res) {
                try {
                        let movies = await productService.findAll();
                        let selectedMovies = req.body.moviesPlayedAt || [];
                        let actor = await actorsService.editOne(req.params.id)
                        return res.render("actors/actorsEdition", {actor:actor, movies: movies, selectedMovies: selectedMovies})
                } catch (error) {
                        console.log(error)
                        res.send("Ha ocurrido un error al editar el actor")
                }
        },

        update: async function(req, res) {
                try {
                        let body = await req.body
                        console.log(body)
                        let updatedActor = await actorsService.updateOne(req.params.id, req.body, req.file)
                //         let updatedMovie = await productService.updateOne(req.params.id, req.body, req.files)

                
                
                //                         let imagesInput = [];
                        
                //                 if (req.files && req.files.poster) {
                //                         req.files.poster.forEach(element => {
                //                                 imagesInput.splice({
                //                                 name_URL: element.filename,
                //                                 Movies_id: updatedMovie.id,
                //                                 categoria_tipo: "portada"
                //                                 });
                //                         });
                //                         }
                        
                //                         if (req.files && req.files.imagesMovie) {
                //                         req.files.imagesMovie.forEach(element => {
                //                                 imagesInput.splice({
                //                                 name_URL: element.filename,
                //                                 Movies_id: updatedMovie.id,
                //                                 categoria_tipo: "imagen"
                //                                 });
                //                         });
                //                         }
                        
                //                         if (imagesInput.length > 0) {
                //                         await imageService.newImages(imagesInput);
                //                         }
                        
                //                         let movieSaved = await productService.getOne(updatedMovie.id);
                        
                //                         console.log("edited movie", movieSaved);

                //                         res.redirect("/products/productDetail/" + req.params.id)
                //                         return movieSaved;
                        return updatedActor
                } catch (error) {
                        console.log(error)
                        res.send("Ha ocurrido un error al editar el actor")
                }
        }
}

module.exports = actorsController;