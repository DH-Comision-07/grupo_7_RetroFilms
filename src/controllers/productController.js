let productService = require('../services/productService');
let imageService = require('../services/imageService');
let genreService = require('../services/genreService');


// ------------- DB ------------- //
const productController = { 
        detail: async function(req,res) {
                try {
                        let movieDetail = await productService.getOne(req.params.id)
                        console.log(movieDetail.genres);
                        return res.render("products/productDetail", {movieDetail:movieDetail})
                } catch (error) {
                        console.log(error)
                        res.send("Ha ocurrido un error al buscar la pelicula")
                }

        },

        add: async function(req,res) {
                try {

                        let newMovie = await productService.newMovieData(req.body);

                        let imagesInput = [];

                        req.files.poster.forEach(element => {
                                imagesInput.push({
                                        name_URL: element.filename,
                                        Movies_id: newMovie.id,
                                        categoria_tipo: "portada"
                                });

                        });

                        req.files.imagesMovie.forEach(element => {
                                imagesInput.push({
                                        name_URL: element.filename,
                                        Movies_id: newMovie.id,
                                        categoria_tipo: "imagen"
                                });
                        });

                        console.log(imagesInput);
                        await imageService.newImages(imagesInput);


                        let movieSaved = await productService.getOne(newMovie.id);

                        console.log("full movie",movieSaved)

                        res.redirect("/");
                        return (movieSaved)
                
                } catch (error) {
                        console.log(error)
                        res.send("Ha ocurrido un error al crear la pelicula")
                }
        },

        create: (req,res) => res.render('creation'),

        edit: async function (req,res) { 
                try {
                        await productService.getOne(req.params.id)
                        .then(function(movie){
                                res.render("edition", {movie:movie})
                        }) 
                } catch (error) {
                        console.log(error)
                        res.send("Ha ocurrido un error al buscar la pelicula")
                }
        },

        update: async function(req, res) {
                try {
                        let updatedMovie = await productService.updateOne(req.params.id, req.body, req.files)
                
                        let imagesInput = [];

                        req.files.poster.forEach(element => {
                                imagesInput.push({
                                        name_URL: element.filename,
                                        Movies_id: updatedMovie.id,
                                        categoria_tipo: "portada"
                                });

                        });

                        req.files.imagesMovie.forEach(element => {
                                imagesInput.push({
                                        name_URL: element.filename,
                                        Movies_id: updatedMovie.id,
                                        categoria_tipo: "imagen"
                                });
                        });

                        if (imagesInput.length > 0) {
                                await imageService.deleteImage(updatedMovie.id)
                                await imageService.newImages(imagesInput);
                        }
        
                        let movieSaved = await productService.getOne(updatedMovie.id);
        
                        console.log("edited movie", movieSaved);

                        res.redirect("/products/productDetail/" + req.params.id)
                        return movieSaved;
                } catch (error) {
                        console.log(error)
                        res.send("Ha ocurrido un error al buscar la pelicula")
                }
        },

        delete: async function(req, res) {
                try {

                        const Movies_id = req.params.id;

                        await productService.deleteMovie(Movies_id)
                     
                        res.redirect("/")
                } catch (error) {
                        console.log(error, 'No se eliminó la pelicula');
                }
        }

}

module.exports = productController;