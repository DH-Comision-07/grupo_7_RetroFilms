let actorsService = require('../services/actorsService');
const path = require('path');


const actorsController = { 
    
    view: async function(req,res) {
        try {
                let actors = await actorsService.getAll()
                console.log(actors[0].dataValues.full_name)
                console.log(actors.length)
                return res.render("actors", {actors:actors})
        } catch (error) {
                console.log(error)
                res.send("Ha ocurrido un error al mostrar los actores")
        }

},

    edit: (req, res) => res.render("actorsEdition",{editActor:actorsService.editActor(req.params.id)}),
    
    create: (req, res) => res.render("actorsCreation"),
    createFinished: (req, res) => res.send("perfil creado con exito!"),
}

module.exports = actorsController;