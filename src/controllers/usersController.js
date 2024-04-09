let usersService = require('../models/usersService.js');
const path = require('path');
const { validationResult } = require("express-validator");

const usersController = { 
    login: (req, res) => res.render("users/login"),

    register: (req, res) => res.render("users/registerForm"),

    userEdit: (req, res) =>res.render('users/userEditForm'),

    processRegister: function(req, res){
        const resultValidation = validationResult(req);
        
        if (resultValidation.errors.length > 0) {
            return res.render("users/registerForm", {
                errors: resultValidation.mapped(), //array a obj literal
                oldData: req.body
            });
        }

        console.log(req.body.realName)
        console.log(usersService);

        let newUser = usersService.createUser(req.body, req.imagePaths);
        return res.send("ola muy buenas")
    }

    
}

module.exports = usersController;