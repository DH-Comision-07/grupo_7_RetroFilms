const fs = require ('fs');
const path = require ('path');
const products = require ('./movies.json');


let productService = {
    products: products, 

    getAll: function() {
        return this.products;
    },
    getTopMovies: function() {
        return this.products.filter(movie=>movie.topNewMovies === true);
    },
    getMovieGrid: function() {
        return this.products.filter(movie=>movie.topNewMovies === false);
    },
    getOneBy: function (id) {
            let movieById=this.products.find(product => product.id == id);
            return movieById;
    },
    
    addMovie: function(movie,imagePaths){           
        let maxId = 0;
        for (let i=0; i < this.products.length; i++){
            if(this.products[i].id > maxId){
                maxId = this.products[i].id;
            };
        }

        let newMovie = {
            id:(maxId +1),
            name:movie.name,
            price: parseFloat(movie.price),
            description: movie.description,
            genre:[movie.genre],
            year: parseInt(movie.year),
            imagesMovie:imagePaths,
            topNewMovies:movie.topNewMovies === "on",
            cast: []        
        }

        this.products.push(newMovie);
        let moviesJSON= JSON.stringify(this.products);
        fs.writeFileSync(path.resolve(__dirname, "../models/movies.json"),moviesJSON);
    },

    editMovie:(id,editedMovie) => {
            const moviesFilePath = path.resolve(__dirname, '../models/movies.json'); //Definimos la ruta al json
            const moviesINFO = JSON.parse(fs.readFileSync(moviesFilePath, 'utf-8')); //leemos el json
            

            const movieIndex = moviesINFO.findIndex(movie => movie.id == id); // creamos la variable MovieIndex para encontrar la posicion en el array de peliculas que pertenezca a la pelicula que estamos buscando para editar
            if (movieIndex === -1) {
            throw new Error('Película no encontrada'); //condicional donde verificamos si la posición y por ende la pelicula, existe en el array (si arrojara -1, significa que la pelicula no existe y devuelve el error)
            }

            editedMovie.topNewMovies = editedMovie.topNewMovies === "on";
            editedMovie.price = parseFloat(editedMovie.price);
            editedMovie.year = parseInt(editedMovie.year);
            moviesINFO[movieIndex] = {   //Acá accedemos a la posicion en el index de la pelicula encontrada por id
                ...moviesINFO[movieIndex],  //hacemos una copia del objeto literal de esa pelicula(id) con spread operator
                ...editedMovie // Actualiza las propiedades cambiadas o editadas y las lleva a la copia anterior
            };
            fs.writeFileSync(moviesFilePath, JSON.stringify(moviesINFO)); //escribimos en el json el objeto modificado

            return moviesINFO[movieIndex] // nos muestra el objeto modificado
            
    }, 

    deleteMovie: (id)=>{
        const moviesFilePath = path.resolve(__dirname, '../models/movies.json'); //Definimos la ruta al json
        const moviesINFO = JSON.parse(fs.readFileSync(moviesFilePath, 'utf-8'));

        const movieIndex = moviesINFO.findIndex(movie => movie.id == id); // creamos la variable MovieIndex para encontrar la posicion en el array de peliculas que pertenezca a la pelicula que estamos buscando para editar
            if (movieIndex === -1) {
            throw new Error('Película no encontrada'); //condicional donde verificamos si la posición y por ende la pelicula, existe en el array (si arrojara -1, significa que la pelicula no existe y devuelve el error)
            } 
            moviesINFO.splice(movieIndex,1); // elimina 1 elemento  a partir de la posicion indicada por movieIndex
            fs.writeFileSync(moviesFilePath, JSON.stringify(moviesINFO)); //escribimos en el json el objeto modificado

            return moviesINFO 
    }
}




module.exports = productService;
