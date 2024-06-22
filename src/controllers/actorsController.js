let actorsService = require('../services/actorsService');
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

    edit: (req, res) => res.render("actorsEdition",{editActor:actorsService.editActor(req.params.id)}),
    
    create: (req, res) => res.render("actorsCreation"),
    createFinished: (req, res) => res.send("perfil creado con exito!"),
}

module.exports = actorsController;