const express = require('express');
const router = express.Router();

const usersController = require('../controllers/usersController');
const routes = require('./index.routes');

const validations = require ('../middlewares/userImgValidationMid')
const uploadFile = require ('../middlewares/multerUserMid')



router.get("/login", usersController.login)

router.get("/register", usersController.register)
router.post("/register", uploadFile.single("profilePic"), validations,  usersController.processRegister)

/*------ EDICION DE USUARIOS -----*/
router.get('/edit/:id', usersController.userEdit)

module.exports = router;