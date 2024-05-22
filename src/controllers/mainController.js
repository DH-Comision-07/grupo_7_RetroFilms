const productService = require('../services/productService.js')
const carrousellService = require( '../services/carrousellService.js');

const mainController = { 
    index: (req, res) => res.render("index", {
        allMovies:productService.getAll(),
        topMovies:productService.getTopMovies(),
        movieGrid:productService.getMovieGrid(),
        carrousell:carrousellService.getCarrousell()
        
    })
}



module.exports = mainController;