const fs = require ('fs');
const path = require ('path');
const products = require ('./peliculas.json');

let productoService = {
    products: products,

    getAll: function () {
        return this.products;
},  
getOneBy: function (id) {
        return this.products.find(product => product.id == id); 
    },

    save: function(product){
        this.products.push(product);
        fs.writeFileSync(path.resolve(__dirname, "../data/productsDataBase.json"), JSON.stringify(this.products))
        return "OK"
    },

}

module.exports = productoService;