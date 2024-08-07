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
                        
                        res.redirect("/actors/" + req.params.id)
                        return updatedActor
                } catch (error) {
                        console.log(error)
                        res.send("Ha ocurrido un error al editar el actor")
                }
        }, 

        delete: async function (req, res){
        try{
                await actorsService.deleteActor(req.params.id)
                res.redirect("/actors")
        } catch (error) {
                console.log(error, 'No se eliminó la pelicula');
        }
        }
}

module.exports = actorsController;