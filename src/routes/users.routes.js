const express = require('express');
const router = express.Router();

const usersController = require('../controllers/usersController');
const routes = require('./index.routes');

const validations = require ('../middlewares/userImgValidationMid')
const uploadFile = require ('../middlewares/multerUserMid')
const guestMid = require ('../middlewares/guestMid')
const authMid = require ('../middlewares/authMid')
const userMid = require ("../middlewares/loggedUserMid")


/* ---------------------REGISTER -----------------*/
//--- Creation USERS --///
router.get("/register", guestMid, usersController.register)
router.post("/register", uploadFile.single("userPic"), validations,  usersController.processRegister)

/*------ EDITION USERS -----*/
//router.get('/edit/:id', usersController.userEdit)


//--- DELETE USER --//
router.get('/delete',usersController.delete)
router.delete("/delete", usersController.processDelete)


/* --------------- LOGIN -------------*/

router.get("/login", userMid.guestMid, usersController.login)
router.post("/login", usersController.processLogIn)

/* -- PROFILE-- */

router.get('/profile',authMid,usersController.profile)

/* --- LOG OUT ----*/

router.get('/logout',usersController.logout)

/* --- Pruebas ----*/
router.get("/prueba", usersController.prueba)

module.exports = router;