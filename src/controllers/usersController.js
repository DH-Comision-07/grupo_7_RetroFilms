let usersService = require('../models/usersService.js');
const path = require('path');
const bcryptjs = require ('bcryptjs');
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
        return res.send("Tu perfil ha sido creado con éxito")
    },

    processLogIn: function(req, res){
        let userToLogIn = usersService.findByField('email',req.body.email)
        if (userToLogIn){
            let passwordVerif = bcryptjs.compareSync(req.body.password, userToLogIn.password)
            if(passwordVerif){
                delete userToLogIn.password;
                req.session.userLogged = userToLogIn;
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

    profile: (req,res) => res.render('users/profile',{
        user: req.session.userLogged
    }),

    logout: (req,res) => {
        req.session.destroy();
        res.redirect("login")
    },


    delete: function (req, res){
        let newUserDB = usersService.deleteUser(req.params.id);
        return res.send("Usuario eliminado")
    }

    
}

module.exports = usersController;