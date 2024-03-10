const express = require('express');
const routes = express.Router(); 
const productRouter = require( './producto.routes');
const userRouter = require("./users.routes.js")

routes.get('/', (req, res) => res.render('index'));
routes.use("/users", userRouter)
routes.use("/producto", productRouter)

module.exports = routes;