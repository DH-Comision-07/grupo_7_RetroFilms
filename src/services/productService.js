const fs = require('fs');
const path = require('path');
const products = require('../database/json/movies.json');
const imageService = require('../services/imageService');
const genreService = require ('../services/genreService');
const actorsService = require ('../services/actorsService');
const db = require("../database/models")


// ------------- METODOS CON DB ------------- //

let productService = {

    findAll: async function () {
        try {
            let movies = db.Movie.findAll();           
            return movies
        } catch (error) {
            console.error("error al buscar las imagenes:", error);
            throw error;
        }
    },

    findMovieGrid: async function () {
        try {
            let movieGrid = db.Movie.findAll({
                where: {
                    top_movie: 0,
                    is_carrousell: 0

                },
                include: [
                    { association: "images" },
                    { association: "genres" },
                    { association: "actors" }
                ]
            });           
            return movieGrid
        } catch (error) {
            console.error('Error fetching movies grid:', error);
            throw error;
        }

    },
    findTopMovie: async function () {
        try {
            let topMovies = await db.Movie.findAll({
                where: {
                    top_movie: 1,
                    is_carrousell: 0
                },
                include: [ 
                    { association: "images" },
                    { association: "genres" },
                    { association: "actors" }
                ]
            })
            
            return topMovies
        } catch (error) {
            console.error('Error fetching top movies:', error);
            throw error;
        }

    },

    findIsCarrousell: async function () {
        try {
            let carrousell = await db.Movie.findAll({
                where: {
                    top_movie: 0,
                    is_carrousell: 1
                },
                include: [ 
                    { association: "images" },
                    { association: "genres" },
                    { association: "actors" }
                ]
            })
            
            return carrousell
        } catch (error) {
            console.error('Error fetching carrousell movies:', error); 
            throw error;
        }

    },
    newMovieData: async function (body) {
        
        try {           

            let newMovie = await db.Movie.create({

                name: body.name,
                price: parseFloat(body.price),
                length: parseInt(body.length),
                description: body.description,
                genre: body.genre,
                release_date: body.release_date,
                top_movie: body.top_movie == 'on' ? 1 : 0,
                is_carrousell: body.is_carrousell == 'on' ? 1 : 0

            } , {
                    include: [
                        { association: "genres" },
                        { association: "actors" },
                        { association: "images" },
                    ]
                }
            )
            console.log('Cual es el genero:',body.genre);

            console.log(newMovie.id);
            let registerSaved = await genreService.newMovieGenreRegister(newMovie.id, body)

            return newMovie 
        } catch (error) {
            console.log(error)
            return "Error. La pelicula no se ha creado"
        }
    },

    getOne: async function (id) {
        try {
            let oneMovie = await db.Movie.findByPk(id, {
                include: [
                    { association: "genres" },
                    { association: "actors" },
                    { association: "images" },
                ]
            })
            
            return oneMovie
        } catch (error) {
            console.log(error)
            return ("Error. La pelicula no se ha encontrado")
        }
    },

    updateOne: async function (id, body, files) {
        try {
            const updatedMovieData = {
                name: body.name,
                price: parseFloat(body.price),
                length: parseInt(body.length),
                description: body.description,
                genre: body.genre,
                release_date: body.release_date,
                poster: files.poster,
                imagesMovie: files.imagesMovie,
                top_movie: body.top_movie === 'on' ? 1 : 0,
                is_carrousell: body.is_carrousell === 'on' ? 1 : 0
            };

            await db.Movie.update(updatedMovieData, { where: { id: id } });

            let updatedMovie = await this.getOne(id);

            return updatedMovie;

        } catch (error) {
            console.log(error)
            return "Error. La pelicula no se ha actualizado"
        }
    },

    deleteMovie: async function (Movies_id){
        try {
            await imageService.deleteImage(Movies_id);

            await genreService.deleteRegister (Movies_id);

            await actorsService.deleteRegisterByDeleteMovie(Movies_id);

            await db.Movie.destroy({
                where:{
                    id: Movies_id
                }
            })
    
        } catch (error) {
            console.log('la pelicula no se eliminó', error);
            
        }
    }

}


module.exports = productService;