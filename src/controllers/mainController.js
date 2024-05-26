const productService = require('../services/productService.js');
const carrousellService = require( '../services/carrousellService.js');
const db = require("../database/models");

// const mainController = { 
//     index: (req, res) => res.render("index", {
//         allMovies:productService.getAll(),
//         topMovies:productService.getTopMovies(),
//         movieGrid:productService.getMovieGrid(),
//         carrousell:carrousellService.getCarrousell()
        
//     })
// }

//------------- DB ------------- //
const mainController = { 
    index: (req, res) => 
        db.Movie.findAll({
            include: [
                {association: "images"},
            ]
        })
            .then(function(movies){
                res.render("index", {
                    movies: movies,
                } )
            })
}


module.exports = mainController;