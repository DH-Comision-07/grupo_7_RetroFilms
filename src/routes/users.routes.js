const express = require('express');
const router = express.Router();

const usersController = require('../controllers/usersController');
const routes = require('./index.routes');

const multer = require("multer");
const path = require("path");

/*const { body } = require("express-validator");

const validations = [
    body("realName").notEmpty().withMessage("Tiene que escribir su nombre"),
    
    body("userName").notEmpty().withMessage("Tiene que escribir su nombre de usuario"),
    
    body("email")
        .notEmpty().withMessage("Tiene que escribir su mail").bail()
        .isEmail().withMessage("Escriba un correo válido"),
    
    body("password").notEmpty().withMessage("Tiene que escribir su contraseña"),
    
    body("reEnterPassword").notEmpty().withMessage("Tiene que repetir su contraseña"),
    
    body("checkbox").notEmpty().withMessage("Tiene que aceptar los términos y condiciones"),
    
    body("profilePic").custom((value, { req }) => {
        let file = req.file;
        let acceptedExtensions = [".jpg"];
        
        if (!file) {
            throw new Error("Tiene que subir una imagen");
        } else {
            let fileExtension = path.extname(file.originalname);
            if (!acceptedExtensions.includes(fileExtension)) {
                throw new Error("Tiene que subir una imagen en formato " + acceptedExtensions)
            }    
        }

        return true;
    })
];

// ************ disk storage ************
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const fileDir = path.resolve(__dirname, "../../public/img/avatars")
        return cb(null, fileDir)
    },
    filename: function (req, file, cb) {
        const fileName = "profilePic_" + Date.now() + path.extname(file.originalname)
        return cb(null, fileName)
    }
})

const uploadFile = multer({ storage: storage })*/

router.get("/login", usersController.login)

router.get("/register", usersController.register)
/*router.post("/register", uploadFile.single("profilePic"), validations,  usersController.processRegister)*/

/*------ EDICION DE USUARIOS -----*/
router.get('/edit/:id', usersController.userEdit)

module.exports = router;