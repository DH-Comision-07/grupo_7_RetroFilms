const { body } = require("express-validator");
const path = require ('path')

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
        let acceptedExtensions = [".jpg",".jpeg", ".png",".webp"]; 
        
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

module.exports=validations