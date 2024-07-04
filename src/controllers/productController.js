let productService = require('../services/productService');
let imageService = require('../services/imageService');
let genreService = require('../services/genreService');

// const productController = {
//         shoppingCart: (req, res) => res.render("products/shoppingCart"), 
//         id: (req, res) => res.render('products/productDetail', { movieDetails: productService.getOneBy(req.params.id) }), 
//         create: (req, res) => res.render('creation'),
//         add: (req, res) => {
//                 console.log(req.imagePath);
//                 console.log(req.imagePaths);
//                 productService.addMovie(req.body, req.imagePath, req.imagePaths);
//                 res.redirect('/')
//         },
//         edit: (req, res) => res.render('edition',{movie : productService.getOneBy(req.params.id)}),
//         save:(req, res) => {
//                         const { id } = req.params;
//                         const updatedMovieInfo = req.body;
//                         try { //basado en documentacion-busqueda online
//                                 const updatedMovie = productService.editMovie(id, updatedMovieInfo, req.imagePath, req.imagePaths);
//                                 res.redirect('/');
//                         } catch (error) {
//                                 res.status(500).json({ message: error.message });
//                 }
//         },
//         delete:(req,res)=>{
//                 const { id } = req.params;
//                 try { 
//                 const updatedJSON = productService.deleteMovie(id);
//                 res.redirect('/');
//                 } catch (error) {
//                 res.status(500).json({ message: error.message });       
//                 }
//         }
        
// };




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

                        //console.log("req.files",req.files)
                        /**
                         * req.files [Object: null prototype] {
                                poster: [
                                        {
                                        fieldname: 'poster',
                                        originalname: 'Bert _Lahr.jpg',
                                        encoding: '7bit',
                                        mimetype: 'image/jpeg',
                                        destination: 'C:\\Users\\laura\\OneDrive\\Desktop\\Archivos Retrofilms\\RETROFILMS\\public\\img\\posters',
                                        filename: 'poster-1718405707860-Bert _Lahr.jpg',
                                        path: 'C:\\Users\\laura\\OneDrive\\Desktop\\Archivos Retrofilms\\RETROFILMS\\public\\img\\posters\\poster-1718405707860-Bert _Lahr.jpg',
                                        size: 4970
                                        }
                                ],
                                imagesMovie: [
                                        {
                                        fieldname: 'imagesMovie',
                                        originalname: 'Lee_Van_Cleef.jpg',
                                        encoding: '7bit',
                                        mimetype: 'image/jpeg',
                                        destination: 'C:\\Users\\laura\\OneDrive\\Desktop\\Archivos Retrofilms\\RETROFILMS\\public\\img\\imagesMovies',
                                        filename: 'movieImage-1718405707861-Lee_Van_Cleef.jpg',
                                        path: 'C:\\Users\\laura\\OneDrive\\Desktop\\Archivos Retrofilms\\RETROFILMS\\public\\img\\imagesMovies\\movieImage-1718405707861-Lee_Van_Cleef.jpg',
                                        size: 6435
                                        },
                                        {
                                        fieldname: 'imagesMovie',
                                        originalname: 'Mae_Clarke.jpg',
                                        encoding: '7bit',
                                        mimetype: 'image/jpeg',
                                        destination: 'C:\\Users\\laura\\OneDrive\\Desktop\\Archivos Retrofilms\\RETROFILMS\\public\\img\\imagesMovies',
                                        filename: 'movieImage-1718405707861-Mae_Clarke.jpg',
                                        path: 'C:\\Users\\laura\\OneDrive\\Desktop\\Archivos Retrofilms\\RETROFILMS\\public\\img\\imagesMovies\\movieImage-1718405707861-Mae_Clarke.jpg',
                                        size: 5590
                                        },
                                        {
                                        fieldname: 'imagesMovie',
                                        originalname: 'Margaret_Livingston.jpg',
                                        encoding: '7bit',
                                        mimetype: 'image/jpeg',
                                        destination: 'C:\\Users\\laura\\OneDrive\\Desktop\\Archivos Retrofilms\\RETROFILMS\\public\\img\\imagesMovies',
                                        filename: 'movieImage-1718405707861-Margaret_Livingston.jpg',
                                        path: 'C:\\Users\\laura\\OneDrive\\Desktop\\Archivos Retrofilms\\RETROFILMS\\public\\img\\imagesMovies\\movieImage-1718405707861-Margaret_Livingston.jpg',
                                        size: 5536
                                        },
                                        {
                                        fieldname: 'imagesMovie',
                                        originalname: 'Mary_Steenburgen.jpg',
                                        encoding: '7bit',
                                        mimetype: 'image/jpeg',
                                        destination: 'C:\\Users\\laura\\OneDrive\\Desktop\\Archivos Retrofilms\\RETROFILMS\\public\\img\\imagesMovies',
                                        filename: 'movieImage-1718405707861-Mary_Steenburgen.jpg',
                                        path: 'C:\\Users\\laura\\OneDrive\\Desktop\\Archivos Retrofilms\\RETROFILMS\\public\\img\\imagesMovies\\movieImage-1718405707861-Mary_Steenburgen.jpg',
                                        size: 5510
                                        }
                                ]
                        }
                         */
                        

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
                        //console.log(movieDetail.genres);
                        res.redirect("/")
                } catch (error) {
                        console.log(error, 'No se eliminó la pelicula');
                }
        }

}

module.exports = productController;