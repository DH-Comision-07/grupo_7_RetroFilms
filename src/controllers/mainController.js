const productoService = require('../models/productoService.js')

const mainController = { 
    index: (req, res) => res.render("index", {carrousellMovies: productoService.getCarrousell(),movieGridMovies: productoService.getMovieGrid(), topMovies: productoService.getTopMovies()}),
}

module.exports = mainController;