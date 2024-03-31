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

        this.getMovieGrid().push(movie);
        fs.writeFileSync(path.resolve(__dirname, "../models/movies.json"), JSON.stringify(this.getMovieGrid), (err)=>{
            if(!err){
            return res.send('pelicula añadida al JSON')
            }else{
            console.log('ERROR')
            }
        })

    }
}

module.exports = productService
