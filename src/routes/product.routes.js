const express = require('express');
const router = express.Router();
const upload = require ('../middlewares/multerProductMid')
const productController = require('../controllers/productController')

// ---- GET ONE PRODUCT -----//
router.get('/productDetail/:id', productController.detail);


// // --- GET SHOPPING CART ---//
// router.get('/shoppingCart', productController.shoppingCart); 


 // ---- CREATE PRODUCT ----//
router.get('/create', productController.create);
router.post('/', upload.fields([{name:'poster', maxCount:1},{name:'imagesMovie'}]), productController.add)

// // ----- EDIT PRODUCT ----//
router.get('/productDetail/:id/edit', productController.edit);
router.put('/:id' , upload.fields([{name:'poster', maxCount:1},{name:'imagesMovie'}]), productController.update)

//-- DELETE PRODUCT ---// 
router.delete('/productDetail/:id/delete', productController.delete);


module.exports = router;