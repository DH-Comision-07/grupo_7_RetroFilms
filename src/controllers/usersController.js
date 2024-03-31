let products = require('../models/productService.js');
const path = require('path');
const { validationResult } = require("express-validator");

const usersController = { 
    login: (req, res) => res.render("users/login"),

    register: (req, res) => res.render("users/registerForm"),
    
    processRegister: (req, res) => {
        const resultValidation = validationResult(req);
        
        if (resultValidation.errors.length > 0) {
            return res.render("users/registerForm", {
                errors: resultValidation.mapped(), //array a obj literal
                oldData: req.body
            });
        }
    }
}

module.exports = usersController;