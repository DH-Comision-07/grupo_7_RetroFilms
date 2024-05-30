const fs = require ('fs');
const path = require ('path');
const products = require ('../database/json/movies.json');
const actors = require('../database/json/actors.json')

let actorsService = {

    actors:actors,

    editActor: function (id){
        this.actors.find(actor => actor.id == id)
    }
}

module.exports = actorsService;