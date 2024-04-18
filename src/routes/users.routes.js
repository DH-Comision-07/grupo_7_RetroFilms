const express = require('express');
const router = express.Router();

const usersController = require('../controllers/usersController');
const routes = require('./index.routes');

const validations = require ('../middlewares/userImgValidationMid')

const multer = require("multer");
const path = require("path");

// ************ disk storage ************
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const fileDir = path.resolve(__dirname, "../../public/img/avatars")
        return cb(null, fileDir)
    },
    filename: function (req, file, cb) {
        const uniqueSuffix =  Date.now() + path.extname(file.originalname)
        const imageName = file.fieldname + '-' + uniqueSuffix ;
        if(!req.imagePaths){
            req.imagePaths = [];
        }

        req.imagePaths.push(imageName);
        return cb(null, imageName)
    }
})

const uploadFile = multer({ storage: storage })


router.get("/login", usersController.login)

router.get("/register", usersController.register)
router.post("/register", uploadFile.single("profilePic"), validations,  usersController.processRegister)

/*------ EDICION DE USUARIOS -----*/
router.get('/edit/:id', usersController.userEdit)

module.exports = router;