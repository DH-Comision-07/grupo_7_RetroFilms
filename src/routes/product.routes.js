const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController')
const multer = require('multer');
const path = require("path")

// ************ disk storage ************
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const fileDir = path.resolve(__dirname, "../../public/img/productDetail")
        return cb(null, fileDir)
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = "image-" + Date.now()
        return cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname))
    }
})
const upload = multer({ storage: storage })



// ---- GET ONE PRODUCT -----//
router.get('/productDetail/:id', productController.id);


// --- GET SHOPPING CART ---//
router.get('/shoppingCart', productController.shoppingCart); //metodo (verbo)


// ---- CREATE PRODUCT ----//
router.get('/create', productController.create);
router.post('/',upload.array('imagesMovie'), productController.add)

// ----- EDIT PRODUCT ----//
router.get('/edit/:id', productController.edit);
router.put('/:id' ,/*upload.single('image'),*/ productController.save)

module.exports = router;