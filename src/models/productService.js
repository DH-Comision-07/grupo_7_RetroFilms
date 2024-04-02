const fs = require ('fs');
const path = require ('path');
const products = require ('./movies.json');

let productService = {
    products: products, 

    getCarrousell: function(){
        return this.products.carrousell;
    },

    getMovieGrid: function(){
        return this.products.movieGrid;
    },
    getTopMovies: function(){
        return this.products.topMovies;
    },
    
    getOneBy: function (id) {
        let carrousellmovie = this.products.carrousell.find(product => product.id == id);
        if(!carrousellmovie){
            //no existe en carrousel
            let movieGrid = this.products.movieGrid.find(product => product.id == id);
            if(!movieGrid){
                return this.products.topMovies.find(product => product.id == id);
            }else{
                return movieGrid;
            }
        }else{
            //existe en carrousel y la retornamos
            return carrousellmovie;
        }
    },
    
   addMovie: function(movie){
    console.log(req.files);
       /* let maxId = 0;
        for (let i=0; i<this.products.movieGrid.length; i++){
            if(maxId > this.product.moviegrid[i]){
                maxId= this.products.movieGrid [i].id;
            };
        }

        let newMovie = {
            id:(maxId +1),
            name:req.nody.name,
            poster:req.file.filename,
            price:req.body.price,
            description: req.body.description,
            genre:req.body.genre,
            year:req.body.year,
            imagesMovie:req.file.filename,
            cast:{
                castName:req.body.name,
                castPic:req.file.filename
            }
        }
        this.products.moviegrid.push(newMovie);
        let moviesJSON= JSON.stringify(this.products.movieGrid);
        fs.writeFileSync(path.resolve(__dirname, "../models/movies.json"),moviesJSON);
            console.log(newMovie)
            resizeBy.redirect('/');*/
        }
    }




module.exports = productService;
