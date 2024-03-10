const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController')

router.get('/detalleProducto', productoController.detalleProducto);
router.get('/carritoCompras', productoController.carritoCompras);

module.exports = router;