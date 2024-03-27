const fs = require ('fs');
const path = require ('path');
const products = require ('./peliculas.json');

let productoService = {
    products: products, 

    // getAll: function () {
    //     return this.products;
    // },  
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

        // https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
        // let movies = [];
        // movies = movies.concat(this.products.carrousell);
        // movies = movies.concat(this.products.movieGrid);
        // movies = movies.concat(this.products.topMovies);
        // return movies.find(product => product.id == id);

    },
    getCarrousell: function(){
        return this.products.carrousell;
    },
    getMovieGrid: function(){
        return this.products.movieGrid;
    },
    getTopMovies: function(){
        return this.products.topMovies;
    },
    save: function(product){
        this.products.push(product);
        fs.writeFileSync(path.resolve(__dirname, "../data/productsDataBase.json"), JSON.stringify(this.products))
        return "OK"
    },

}

module.exports = productoService;