const express = require('express');
const router = express.Router();
const detalleProductoController = require('../controllers/detalleProductoController')

router.get('/', detalleProductoController.getAll);
router.get('/:id', detalleProductoController.getOne);

/* app.get("/detalleProducto", function(req, res){
    res.sendFile(path.resolve(__dirname, "./views/detalleProducto.html"))
}) */


module.exports = router;