const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController')
const multer = require('multer');
const path = require("path")

// ************ disk storage ************
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const fileDir = path.resolve(__dirname, "../../public/img/DetalleProducto")
        return cb(null, fileDir)
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = "pelicula-" + Date.now()
        return cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname))
    }
})
const upload = multer({ storage: storage })

// --- GET ONE PRODUCT -----//

//router.get('/detalleProducto', productoController.detalleProducto);
router.get('/detalleProducto/:id', productoController.id); // metodo get one


//---GET SHOPPING CART --//
router.get('/carritoCompras', productoController.carritoCompras); //metodo (verbo)

// -- CREATE PRODUCT --//
router.get('/crear', productoController.crear);
router.post('/', upload.single('image'), productoController.agregar)

//-- EDIT PRODUCT--//
router.get('/editar/:id', productoController.editar);
router.put('/:id' ,upload.single('image'), productoController.guardar)

module.exports = router;