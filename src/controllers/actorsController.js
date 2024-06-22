let actorsService = require('../services/actorsService');
let productService = require('../services/productService');
const path = require('path');


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
                        console.log(actor.movies[0].name)
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
                        await actorsService.newActor(req.body);
                        return res.send("el perfil se creo con exito");
                } catch (error) {
                        console.log(error);
                        res.send("el actor no pudo crearse");
                }
        },

        // edit: (req, res) => res.render("actorsEdition",{editActor:actorsService.editActor(req.params.id)}),
}
module.exports = actorsController;