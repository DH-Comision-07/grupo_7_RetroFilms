let actorsService = require('../services/actorsService');
const path = require('path');


const actorsController = { 
    
    view: (req, res) => res.render("actors"),

    edit: (req, res) => res.render("actorsEdition",{editActor:actorsService.editActor(req.params.id)}),
    
    create: (req, res) => res.render("actorsCreation"),
    createFinished: (req, res) => res.send("perfil creado con exito!"),
}

module.exports = actorsController;