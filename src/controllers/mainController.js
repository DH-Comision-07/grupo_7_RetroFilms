const productService = require('../models/productService.js')

const mainController = { 
    index: (req, res) => res.render("index", {
        carrousell: productService.getCarrousell(),
        movieGridMovies: productService.getMovieGrid(), 
        topMovies: productService.getTopMovies()
    })
}



module.exports = mainController;