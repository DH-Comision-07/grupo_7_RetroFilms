const express = require('express');
const routes = express.Router(); 
const productRouter = require( './producto.routes');
const userRouter = require("./users.routes.js")
const mainController = require("../controllers/mainController.js")

routes.get('/', mainController.index);
routes.use("/users", userRouter)
routes.use("/producto", productRouter)
routes.get('/crear', (req, res) => res.render('creacion'));
routes.get('/editar', (req, res) => res.render('edicion'));


module.exports = routes;