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
                        let movies = await productService.findAll()
                        return res.render("actors/actorsCreation", {movie:movies}),
                } catch (error) {
                        console.log(error)
                        res.send("Ha ocurrido un error al mostrar los actores")
                }

        },

        edit: (req, res) => res.render("actorsEdition",{editActor:actorsService.editActor(req.params.id)}),

        createFinished: (req, res) => res.send("perfil creado con exito!"),
        }

module.exports = actorsController;