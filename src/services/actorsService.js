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

            let updatedActor = await db.Actor.update ({
                full_name: body.full_name,
                bio: body.bio,
                profile_pic: file.filename
            }, {
                where: { id: id },
                include: [
                    { association: "movies" }
                ]
            });

            let actorToEdit = await db.Actor.findByPk(id, {
                include: [
                    { association: "movies" },
                ]
            })

            await this.updatedActorMovieRegister(actorToEdit.id, body)

            return updatedActor;
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

    deleteActorMovieRegister: async function (id){
        try {
            await db.ActorMovie.destroy({
                where: { Actors_id: id }
            });
        } catch (error) {
            return 'El Actor no se eliminó'
        } 
        }, 

    deleteActor: async function (id){
        try {
            await this.deleteActorMovieRegister(id);

            await db.Actor.destroy({
                where:{
                    id: id
                }
            })
    
        } catch (error) {
            console.log('El actor no se eliminó', error);
            
        }
    },

    deleteRegisterByDeleteMovie: async function (id){
        try {
            await db.ActorMovie.destroy({
                where: { Movies_id: id }
            });
        } catch (error) {
            return 'El registro de actorMovie no se eliminó'
        }

    }
}


module.exports = actorsService;