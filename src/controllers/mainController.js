const productService = require('../models/productService.js')
const carrousellService = require( '../models/carrousellService.js');

const mainController = { 
    index: (req, res) => res.render("index", {
        carrousell: carrousellService.getCarrousell(),
        movieGridMovies: productService.getMovieGrid(), 
        topMovies: productService.getTopMovies()
    })
}



module.exports = mainController;