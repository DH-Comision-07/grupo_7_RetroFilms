const express = require('express');
const routes = express.Router(); 
const productRouter = require( './producto.routes');
const userRouter = require("./users.routes.js")
const mainController = require("../controllers/mainController.js")

routes.get('/', mainController.index);
routes.use("/usuarios", userRouter)
routes.use("/productos", productRouter)



module.exports = routes;