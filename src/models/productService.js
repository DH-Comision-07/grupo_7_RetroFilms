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
            return this.products.find(product => product.id == id);
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
        console.log("creating movie",newMovie)
        this.products.push(newMovie);
        let moviesJSON= JSON.stringify(this.products);
        fs.writeFileSync(path.resolve(__dirname, "../models/movies.json"),moviesJSON);
        }
    }




module.exports = productService;
