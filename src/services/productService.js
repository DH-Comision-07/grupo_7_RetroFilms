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

    findTopMovie : async function(){
        try {
            let topMovies= await db.Movie.findAll({
                where: {
                    top_movie:1
                }
            })
            //console.log('Top Movies:', topMovies);
            return topMovies
        } catch (error) {
            console.error('Error fetching top movies:', error); 
            throw error;
        }
            
    },

    findIsCarrousell: async function(){
        try {
            let carrousell= await db.Movie.findAll({
                where: {
                    is_carrousell:1 
                }
            })
            //console.log('Carrousell Movies:', carrousell);
            return carrousell
        } catch (error) {
            console.error('Error fetching carrousell movies:', error); // Log de error
            throw error;
        }
        
    },
    newImage: async function (files){
        console.log(db.Image);
        console.log(files.imagesMovie[0]);
        try {
            let newImage = await db.Image.bulkCreate([
                {
                    name_URL : files.poster.filename,
                    categoria_tipo : files.poster.fieldname
                },
                { 
                    name_URL : files.imagesMovie[0].filename ? files.imagesMovie[0].filename : "",
                    categoria_tipo : files.imagesMovie[0].fieldname ? files.imagesMovie[0].fieldname : ""
                },
                {
                    name_URL : files.imagesMovie[1].filename ? files.imagesMovie[1].filename : "",
                    categoria_tipo : files.imagesMovie[1].fieldname ? files.imagesMovie[1].fieldname : ""
                },
                {
                    name_URL : files.imagesMovie[2].filename ? files.imagesMovie[2].filename : "",
                    categoria_tipo : files.imagesMovie[2].fieldname? files.imagesMovie[2].fieldname: ""
                },
                {
                    name_URL : files.imagesMovie[3].filename? files.imagesMovie[3].filename : "",
                    categoria_tipo : files.imagesMovie[3].fieldname? files.imagesMovie[3].fieldname : ""
                }]
            ) 
            console.log(newImage);
            return newImage
        } catch (error) {
            console.log(error)
            return "Error. La pelicula no se ha creado"
        }
    },

    newMovieData: async function(body) {
        try {
            //console.log(Movie);
            console.log(body);
            //console.log(files);

            let newMovie = await db.Movie.create(

                name = body.name,
                price = parseFloat(body.price),
                length = parseInt(body.length),
                description = body.description,
                genre = body.genre,
                release_date = parseInt(body.release_date),
                top_movie = body.top_movie == 'on',
                is_carrousell = body.is_carrousell == 'on'
            
                , {
            include:[
                {association : 'images'}
            ]
        }
        )
            console.log(newMovie);
            return newMovie // añadir association
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
            console.log(oneMovie.images[1].name_URL);
            return oneMovie
        } catch (error) {
            console.log(error)
            return ("Error. La pelicula no se ha encontrado")
        }
    }, 

    updateOne: async function(id, body, files) {
        try {
            let movie = new Movie(body, files);
            //console.log(movie);
            await db.Movie.update(movie, {where: {id: id}})
        } catch (error) {
            console.log(error)
            return "Error. La pelicula no se ha actualizado"
        }
    }

}


// function Movie(name, price, length, description, genre, release_date, top_movie, is_carrousell) {
//     this.name = name.join("");
//     this.price = parseFloat(price);
//     this.length = parseInt(length);
//     this.description = description;
//     this.genre =  genre;
//     this.release_date = parseInt(release_date);
//     this.top_movie = top_movie == 'on';
//     this.is_carrousell = is_carrousell == 'on';
// }


module.exports = productService;