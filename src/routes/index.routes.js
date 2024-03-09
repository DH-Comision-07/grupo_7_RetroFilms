const express = require('express');
const routes = express.Router(); 

/*const detalleProductoRouter = require('./detalleProducto.routes');
const carritoComprasRouter = require('./carritoCompras.routes'); */
/* const loginRouter = require("./login.routes") */
const userRouter = require("./users.routes.js")

routes.get('/', (req, res) => res.send("ESTAS EN HOME"));
routes.use("/users", userRouter)
/*routes.use("/detalleProducto",detalleProductoRouter)
routes.use("/carritoCompras", carritoComprasRouter) */

/*routes.use("/login", loginRouter) */


module.exports = routes;