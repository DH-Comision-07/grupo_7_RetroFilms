const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController')

router.get('/detalleProducto', productoController.detalleProducto);
router.get('/carritoCompras', productoController.carritoCompras);

/* app.get("/detalleProducto", function(req, res){
    res.sendFile(path.resolve(__dirname, "./views/detalleProducto.html"))
}) */


module.exports = router;