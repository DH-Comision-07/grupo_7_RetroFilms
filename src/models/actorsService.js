const fs = require ('fs');
const path = require ('path');
const products = require ('../database/movies.json');
const actors = require('../database/actors.json')

let actorsService = {

    actors:actors,

    editActor: function (id){
        this.actors.find(actor => actor.id == id)
    }
}

module.exports = actorsService;