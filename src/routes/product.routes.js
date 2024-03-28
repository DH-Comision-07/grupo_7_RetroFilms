const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController')
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

router.get('/detalleProduct/:id', productController.detalleProduct);
router.get('/carritoCompras', productController.carritoCompras); //metodo (verbo)
router.get('/:id', productController.idProduct); // metodo get one

router.get('/crear', productController.crear);
router.post('/', upload.single('image'), productController.agregar)


router.get('/editar/:id', productController.editar);
router.put('/:id' ,upload.single('image'), productController.guardar)

module.exports = router;