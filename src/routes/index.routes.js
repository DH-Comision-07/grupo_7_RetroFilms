const express = require('express');
const routes = express.Router(); 
const productRouter = require( './producto.routes');
const userRouter = require("./users.routes.js")
const mainController = require("../controllers/mainController.js")

routes.get('/', mainController.index);
routes.use("/users", userRouter)
routes.use("/producto", productRouter)



module.exports = routes;