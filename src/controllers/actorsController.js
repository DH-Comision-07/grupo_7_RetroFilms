let actorsService = require('../models/actorsService');
const path = require('path');


const actorsController = { 
    //create: (req, res) => res.render("#"),

    edit: (req, res) => res.render("actorsEdition",{editActor:actorsService.editActor(req.params.id)}),

}

module.exports = actorsController;