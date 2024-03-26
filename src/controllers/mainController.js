const productoService = require('../models/productoService.js')

const mainController = { 
    index: (req, res) => res.render("index", {productos : productoService.getAll()}),
}

module.exports = mainController;