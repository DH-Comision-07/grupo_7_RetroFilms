const productService = require('../services/productService.js');
const carrousellService = require( '../services/carrousellService.js');
const db = require("../database/models");

const mainController = { 
    index: (req, res) => res.render("index", {
        allMovies:productService.getAll(),
        topMovies:productService.getTopMovies(),
        movieGrid:productService.getMovieGrid(),
        carrousell:carrousellService.getCarrousell()
        
    })
}

module.exports = mainController;


// ------------- DB ------------- //
const mainController2 = { 
    index: (req, res) => 
        db.Movie.findAll()
            .then(function(movies){
                res.render("index", {movies: movies})
            })
}