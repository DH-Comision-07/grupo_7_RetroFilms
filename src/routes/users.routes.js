const express = require('express');
const router = express.Router();

const usersController = require('../controllers/usersController');
const routes = require('./index.routes');

const validations = require ('../middlewares/userImgValidationMid')
const uploadFile = require ('../middlewares/multerUserMid')
const guestMid= require ('../middlewares/guestMid')
const authMid = require ('../middlewares/authMid')


/* ---------------------REGISTER -----------------*/
//--- Creation USERS --///
router.get("/register",guestMid, usersController.register)
router.post("/register", uploadFile.single("profile_pic"), validations,  usersController.processRegister)

/*------ EDITION USERS -----*/
//router.get('/edit/:id', usersController.userEdit)


//--- DELETE USER --//
//router.delete('/delete',usersController.delete)


/* --------------- LOGIN -------------*/

router.get("/login",guestMid, usersController.login)
router.post("/login", usersController.processLogIn)

/* -- PROFILE-- */

router.get('/profile',authMid,usersController.profile)

/* -- REGISTER--*/

router.get('/registerView',authMid,usersController.registerView)

/* --- LOG OUT ----*/

router.get('/logout',usersController.logout)


module.exports = router;