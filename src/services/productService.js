const fs = require('fs');
const path = require('path');
const products = require('../database/json/movies.json');
const imageService = require('../services/imageService');
const db = require("../database/models")

// let productService = {
//     products: products, 

//     getAll: function() {
//         return this.products;
//     },
//     getTopMovies: function() {
//         return this.products.filter(movie=>movie.topNewMovies === true);
//     },
//     getMovieGrid: function() {
//         return this.products.filter(movie=>movie.topNewMovies === false);
//     },
//     getOneBy: function (id) {
//             let movieById=this.products.find(product => product.id == id);
//             return movieById;
//     },

//     addMovie: function(movie, imagePath, imagePaths){           
//         let maxId = 0;
//         for (let i=0; i < this.products.length; i++){
//             if(this.products[i].id > maxId){
//                 maxId = this.products[i].id;
//             };
//         }

//         let newMovie = {
//             id:(maxId +1),
//             name:movie.name,
//             price: parseFloat(movie.price),
//             description: movie.description,
//             genre:movie.genre,
//             year: parseInt(movie.year),
//             poster:/*[movie.poster]*/imagePath,
//             imagesMovie:/*[movie.imagesMovie]*/imagePaths,
//             cast: [],
//             topNewMovies:movie.topNewMovies === "on",
//             carrousell:movie.carrousell === "on"
//         }

//         this.products.push(newMovie);
//         let moviesJSON= JSON.stringify(this.products, null, ' ');
//         fs.writeFileSync(path.resolve(__dirname, "../database/movies.json"),moviesJSON);
//     },

//     editMovie:(id,editedMovie, imagePath, imagePaths) => {
//             const moviesFilePath = path.resolve(__dirname, '../database/movies.json'); //Definimos la ruta al json
//             const moviesINFO = JSON.parse(fs.readFileSync(moviesFilePath, 'utf-8')); //leemos el json


//             const movieIndex = moviesINFO.findIndex(movie => movie.id == id); // creamos la variable MovieIndex para encontrar la posicion en el array de peliculas que pertenezca a la pelicula que estamos buscando para editar
//             if (movieIndex === -1) {
//             throw new Error('Película no encontrada'); //condicional donde verificamos si la posición y por ende la pelicula, existe en el array (si arrojara -1, significa que la pelicula no existe y devuelve el error)
//             }


//             editedMovie.price = parseFloat(editedMovie.price);
//             editedMovie.year = parseInt(editedMovie.year);
//             editedMovie.poster = imagePath;
//             editedMovie.genre = editedMovie.genre;
//             editedMovie.imagesMovie = imagePaths;
//             editedMovie.topNewMovies = editedMovie.topNewMovies === "on";
//             editedMovie.carrousell = editedMovie.carrousell === "on";
//             moviesINFO[movieIndex] = {   //Acá accedemos a la posicion en el index de la pelicula encontrada por id
//                 ...moviesINFO[movieIndex],  //hacemos una copia del objeto literal de esa pelicula(id) con spread operator
//                 ...editedMovie // Actualiza las propiedades cambiadas o editadas y las lleva a la copia anterior
//             };
//             fs.writeFileSync(moviesFilePath, JSON.stringify(moviesINFO)); //escribimos en el json el objeto modificado

//             return moviesINFO[movieIndex] // nos muestra el objeto modificado

//     }, 

//     deleteMovie: (id)=>{
//         const moviesFilePath = path.resolve(__dirname, '../database/movies.json'); //Definimos la ruta al json
//         const moviesINFO = JSON.parse(fs.readFileSync(moviesFilePath, 'utf-8'));

//         const movieIndex = moviesINFO.findIndex(movie => movie.id == id); // creamos la variable MovieIndex para encontrar la posicion en el array de peliculas que pertenezca a la pelicula que estamos buscando para editar
//             if (movieIndex === -1) {
//             throw new Error('Película no encontrada'); //condicional donde verificamos si la posición y por ende la pelicula, existe en el array (si arrojara -1, significa que la pelicula no existe y devuelve el error)
//             } 
//             moviesINFO.splice(movieIndex,1); // elimina 1 elemento  a partir de la posicion indicada por movieIndex
//             fs.writeFileSync(moviesFilePath, JSON.stringify(moviesINFO)); //escribimos en el json el objeto modificado

//             return moviesINFO 
//     }
// }

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
                include: [ //faltaba la interaccion entre movies y peliculas, por eso no se mostraban las imagenes
                    { association: "images" },
                    { association: "genres" },
                    { association: "actors" }
                ]
            })
            //console.log('Top Movies:', topMovies);
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
                include: [ //faltaba la interaccion entre movies y peliculas, por eso no se mostraban las imagenes
                    { association: "images" },
                    { association: "genres" },
                    { association: "actors" }
                ]
            })
            //console.log('Carrousell Movies:', carrousell);
            return carrousell
        } catch (error) {
            console.error('Error fetching carrousell movies:', error); // Log de error
            throw error;
        }

    },
    newMovieData: async function (body) {
        /**
         *  name: 'Pulgarcita',
            price: '5',
            length: '152',
            description: 'ksjbfjhbgjdbhljds',
            genre: 'Acción',
            release_date: '2000',
            top_movie: 'on'
         */
        try {           
            //console.log('estos son los datos de las pelis', body);  

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
            //console.log(newMovie);
            return newMovie // añadir association
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
            //console.log(oneMovie.images[1].name_URL);
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