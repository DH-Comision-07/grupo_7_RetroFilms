const fs = require ('fs');
const path = require ('path');
const products = require ('../database/json/movies.json');
const actors = require('../database/json/actors.json')
const db = require("../database/models")


let actorsService = {

    actors:actors,

    getAll: async function(){
        try {
            let actors = db.Actor.findAll({
                include: [
                    { association: "movies" },
                ]
            });           
            return actors;
        } catch (error) {
            console.error(error);
            throw error;
        }
    },

    getOne: async function (id) {
        try {
            let actor = await db.Actor.findByPk(id, {
                include: [
                    { association: "movies" },
                ]
            })
            return actor
        } catch (error) {
            console.log(error)
            return ("El actor no se ha encontrado")
        }
    },

    editActor: function (id){
        this.actors.find(actor => actor.id == id)
    }
}

module.exports = actorsService;