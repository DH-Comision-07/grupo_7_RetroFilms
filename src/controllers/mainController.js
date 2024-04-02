const productService = require('../models/productService.js')

const mainController = { 
    index: (req, res) => res.render("index", {
        carrousellMovies: productService.getCarrousell(),
        movieGridMovies: productService.getMovieGrid(), 
        topMovies: productService.getTopMovies()
    })
}



module.exports = mainController;