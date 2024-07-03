const express = require('express');
const router = express.Router();

const usersController = require('../controllers/usersController');
const routes = require('./index.routes');

const validations = require ('../middlewares/userImgValidationMid')
const uploadUserFile = require ('../middlewares/multerUserMid')
const guestMid= require ('../middlewares/guestMid')
const authMid = require ('../middlewares/authMid')


/* ---------------------REGISTER -----------------*/
//--- Creation USERS --///
router.get("/register",guestMid, usersController.register)
router.post("/register", uploadUserFile.single("profile_pic"), validations,  usersController.processRegister)


/*------ EDITION USERS -----*/
router.get('/edit/:id', usersController.userEdit)
router.put('/:id', uploadUserFile.single("profile_pic"), usersController.processEdit)


//--- DELETE USER --//
router.get('/delete',usersController.delete)
router.delete("/delete", usersController.processDelete)


/* --------------- LOGIN -------------*/

router.get("/login",guestMid, usersController.login)
router.post("/login", usersController.processLogIn)

/* -- PROFILE-- */

router.get('/profile',authMid,usersController.profile)

router.get("/profiles", usersController.profiles)

/* --- LOG OUT ----*/

router.get('/logout',usersController.logout)

module.exports = router;