const fs = require ('fs');
const path = require ('path');
const products = require ('../database/json/movies.json');
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

    newMovie: async function() {
        try {
            await db.Movie.create(new Movie)
        } catch (error) {
            console.log(error)
            return "Error. La pelicula no se ha creado"
        }
    },

    getOne: async function(id) {
        try {
            let oneMovie = await db.Movie.findByPk(id, {
                include: [
                    {association: "genres"},
                    {association: "actors"},
                    {association: "images"},
                ]
            })
            return oneMovie
        } catch (error) {
            console.log(error)
            return ("Error. La pelicula no se ha encontrado")
        }
    }, 

    updateOne: async function(id, body) {
        try {
            let movie = new Movie(body);
            await db.Movie.update(movie, {where: {id: id}})
        } catch (error) {
            console.log(error)
            return "Error. La pelicula no se ha actualizado"
        }
    }

}


function Movie(name, price, description, genre, year, poster, imagesMovie, category, carrousell) {
    this.name = name;
    this.price = price;
    this.description = description;
    this.genre = genre;
    this.year = year;
    this.poster = poster;
    this.imagesMovie = imagesMovie;
    this.category = category;
    this.carrousell = carrousell;
}


module.exports = productService;