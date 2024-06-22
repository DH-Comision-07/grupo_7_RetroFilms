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

    newActor: async function (body) {

        try {           
            console.log('estos son los datos del actor:', body);  

            // let newMovie = await db.Movie.create({

            //     name: body.name,
            //     price: parseFloat(body.price),
            //     length: parseInt(body.length),
            //     description: body.description,
            //     genre: body.genre,
            //     release_date: body.release_date,
            //     top_movie: body.top_movie == 'on' ? 1 : 0,
            //     is_carrousell: body.is_carrousell == 'on' ? 1 : 0

            // } , {
            //         include: [
            //             { association: "genres" },
            //             { association: "actors" },
            //             { association: "images" },
            //         ]
            //     }
            // )
            // //console.log(newMovie);
            // return newMovie // añadir association
            return "ola"
        } catch (error) {
            console.log(error)
            return "Error. el actor no se ha creado"
        }
    },

    editActor: function (id){
        this.actors.find(actor => actor.id == id)
    }
}

module.exports = actorsService;