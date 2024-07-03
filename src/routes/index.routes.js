const express = require('express');
const router = express.Router(); 

const productRouter = require( './product.routes');
const userRouter = require("./users.routes.js")
const actorsRouter = require('./actors.routes.js')
const mainController = require("../controllers/mainController.js")
const adminMid = require("../middlewares/credentialMid.js")

router.get('/', mainController.index);
router.use("/users", userRouter);
router.use("/products" ,productRouter);
router.use("/actors", actorsRouter);




module.exports = router;