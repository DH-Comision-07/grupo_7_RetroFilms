const productService = require('../models/productService.js')

const mainController = { 
    index: (req, res) => res.render("index", {products : productService.getAll()}),
}

console.log((productService.getAll())[0])

module.exports = mainController;