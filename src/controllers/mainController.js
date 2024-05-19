const productService = require('../models/productService.js')
const carrousellService = require( '../models/carrousellService.js');

const mainController = { 
    index: (req, res) => res.render("index", {
        allMovies:productService.getAll(),
        topMovies:productService.getTopMovies(),
        movieGrid:productService.getMovieGrid(),
        carrousell:carrousellService.getCarrousell()
        
    })
}



module.exports = mainController;