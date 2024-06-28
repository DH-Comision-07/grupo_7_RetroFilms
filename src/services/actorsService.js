const fs = require ('fs');
const path = require ('path');
const products = require ('../database/json/movies.json');
const actors = require('../database/json/actors.json')
const db = require("../database/models");
const { body } = require('express-validator');


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

    newActor: async function (body, file) {

        try {           
            console.log('estos son los datos del actor:', body);  
            console.log(file);
            let newActor = await db.Actor.create ({
                full_name: body.full_name,
                bio: body.bio,
                profile_pic: file.filename
            }, {
                include: [
                    {association: "movies"}]
        });

            console.log(newActor)

            let registerSaved = await this.newActorMovieRegister(newActor.id, body)


            return newActor;


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
            
        } catch (error) {
            console.log(error)
            return "Error. el actor no se ha creado"
        }
    },

    newActorMovieRegister: async function (id, body) {

        try {           
            
            let actorMovieRegisters = body.moviesPlayedAt.map(movieId => ({
                Actors_id: id,
                Movies_id: movieId
            }));

            let ActorMovieRegister = await db.ActorMovie.bulkCreate(actorMovieRegisters);
            
            return ActorMovieRegister;
            
        } catch (error) {
            console.log(error)
            return "Error. la relacion no se ha creado"
        }
    },

    editOne: async function (id) {
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

    updateOne: async function (id, body, file) {
        try {           
            console.log('estos son los datos del actor:', body);  
            console.log(file);

            let updatedActor = await db.Actor.update ({
                full_name: body.full_name,
                bio: body.bio,
                profile_pic: file.filename
            }, {
                include: [
                    {association: "movies"}]
        });

            console.log(updatedActor)

            let registerSaved = await this.updatedActorMovieRegister(newActor.id, body)

            return newActor;
        } catch (error) {
            console.log(error)
            return "Error. El actor no se ha actualizado"
        }
    },

    updatedActorMovieRegister: async function (id, body) {

        try {
            let destroyActorMovieRegister = await db.ActorMovie.destroy({
                where: { Actors_id: id }
            });

            console.log("esto se trae el destroy:")
            console.log(destroyActorMovieRegister);
            
            let actorMovieRegisters = body.moviesPlayedAt.map(movieId => ({
                Actors_id: id,
                Movies_id: movieId
            }));

            let ActorMovieRegister = await db.ActorMovie.bulkCreate(actorMovieRegisters);
            
            return ActorMovieRegister;
            
        } catch (error) {
            console.log(error)
            return "Error. la relacion no se ha creado"
        }
    },
}

module.exports = actorsService;