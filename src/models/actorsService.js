const fs = require ('fs');
const path = require ('path');
const products = require ('./movies.json');
const actors = require('./actors.json')

let actorsService = {

    actors:actors,

    editActor: function (id){
        this.actors.find(actor => actor.id == id)
    }
}

module.exports = actorsService;