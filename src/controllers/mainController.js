const productoService = require('../models/productoService.js')

const mainController = { 
    index: (req, res) => res.render("index", {productos : productoService.getAll()}),
}

console.log((productoService.getAll())[0])

module.exports = mainController;