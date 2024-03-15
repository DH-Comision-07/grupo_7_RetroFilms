const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const routes = require('./index.routes');

router.get("/login", usersController.login)
router.get("/register", usersController.register)



module.exports = router