const { body } = require("express-validator");
const path = require ('path')

const validations = [
    body("name").notEmpty().withMessage("Tiene que escribir su nombre"),
    
    body("username").notEmpty().withMessage("Tiene que escribir su nombre de usuario"),
    
    body("email")
        .notEmpty().withMessage("Tiene que escribir su mail").bail()
        .isEmail().withMessage("Escriba un correo válido"),
    
    body("password").notEmpty().withMessage("Tiene que escribir su contraseña"),
    
    body("reEnterPassword").notEmpty().withMessage("Tiene que repetir su contraseña"),
    
    body('terminos').isIn(['on']).withMessage('Debes aceptar los términos y condiciones'),
    
    body("profile_pic").custom((value, { req }) => {
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