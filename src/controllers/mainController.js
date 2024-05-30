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
    index: async function (req, res) {
        try {
            //console.log('Fetching movies, top movies, and carrousell movies...');
            const [movies, topMovie, carrousell] = await Promise.all([
                db.Movie.findAll({
                    include: [
                        { association: "images" },
                    ]
                }),
                productService.findTopMovie(),
                productService.findIsCarrousell()
            ]);

           
            //console.log(topMovie);
            //console.log('Carrousell Movies:', carrousell);

            res.render("index", {
                movies: movies,
                topMovie: topMovie || [],
                carrousell: carrousell || []
            });
        } catch (error) {
            console.error('Error in controller:', error);
            res.status(500).send("Error al cargar las películas.");
        }
}
}


module.exports = mainController;