let usersService = require('../services/usersService.js');
const path = require('path');
const bcryptjs = require ('bcryptjs');
const { validationResult } = require("express-validator");

const usersController = { 
    register: (req, res) => {
        res.cookie('testing','Hola, mundo!',{maxAge:1000*120})
        res.render("users/registerForm")
    },

    login: (req, res) => {
        return res.render("users/login")
    },
    userEdit: (req, res) =>res.render('users/userEditForm'),

    processRegister: function(req, res){
        const resultValidation = validationResult(req);
        
        if (resultValidation.errors.length > 0) {
            return res.render("users/registerForm", {
                errors: resultValidation.mapped(), //array a obj literal
                oldData: req.body
            });
        }

        let userInDB = usersService.findByField('email', req.body.email);
        if (userInDB){
            return res.render("users/registerForm", {
                errors: {
                    email: {
                        msg: "Este email ya está registrado"
                    }
                },
                oldData: req.body
        })
    }

        let newUser = usersService.createUser(req.body, req.imagePaths);
        return res.render("users/registerView")
    },

    processLogIn: function(req, res){
        let userToLogIn = usersService.findByField('email',req.body.email)
        if (userToLogIn){
            let passwordVerif = bcryptjs.compareSync(req.body.password, userToLogIn.password)
            if(passwordVerif){
                delete userToLogIn.password;
                req.session.userLogged = userToLogIn;
                if(req.body.remember){
                    res.cookie('userEmail',req.body.email,{maxAge:(1000 * 60)})
                }
                return res.redirect('profile')
            }
        }

        res.render('users/login', {
            errors:{
                email:{
                    msg: "Las credenciales son inválidas"
                }
            }
        })
    },

    profile: (req,res) => {
        //console.log(req.cookies.userEmail);
        return res.render('users/profile',{user: req.session.userLogged})
        },

    logout: (req,res) => {
        res.clearCookie('userEmail');
        req.session.destroy();
        res.redirect("login")
    },


    delete: function (req, res){
        let newUserDB = usersService.deleteUser(req.params.id);
        return res.send("Usuario eliminado")
    }

    
}

module.exports = usersController;