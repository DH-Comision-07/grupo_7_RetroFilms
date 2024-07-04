let usersService = require('../services/usersService.js');
const path = require('path');
const bcryptjs = require ('bcryptjs');
const { validationResult } = require("express-validator");
const db = require("../database/models")

const usersController = { 
    register: (req, res) => {

        try {
            res.cookie('testing','Hola, mundo!',{maxAge:1000*120})
            return res.render("users/registerForm")
        } catch (error) {
            console.log(error)
            res.send("Ha ocurrido un error al cargar el formulario")
        }

    },

    login: (req, res) => {
        return res.render("users/login")
    },

    userEdit: async function(req, res) {
        return res.render('users/userEditForm', {user: req.session.userLogged}) 
    },

    // getUser: async function (req, res){
    //     const userId = parseInt(req.params.id);
    //     if (isNaN(userId)) {
    //         return res.send('ID de usuario no válido');
    //     }
        
    // try {
    //     const user = await usersService.getUserById(userId);

    //     if (!user) {
    //     return res.send('Usuario no encontrado');
    //     }

    //     res.render('users/userEditForm', { user });
        
    // } catch (err) {
    //     res.status(500).send('Error al obtener el usuario');
    // }
    // },

    processEdit: async function(req,res) {
        try {
            // console.log(req.session.userLogged)
            let userData = await usersService.userUpdate(req.params.id, req.body, req.file, req.session.userLogged)

            let userEditSession = await usersService.findByFieldDb('email',req.body.email)
            console.log("esto es user edit session:",userEditSession);

            req.session.userLogged = userEditSession;
            
            res.redirect("/")
            return userData
        } catch (error) {
            console.log(error, 'Error al actualizar el usuario')            
        }
    },

    processRegister: async function(req, res){
        try {

            let resultValidation = validationResult(req);
            
            if (resultValidation.errors.length > 0) {
                return res.render("users/registerForm", {
                    errors: resultValidation.mapped(), //array a obj literal
                    oldData: req.body
                });
            }

            let emailInDB = await usersService.findByFieldDb("email", req.body.email);
            let userNameInDB = await usersService.findByFieldDb("username", req.body.username);
    
            if (emailInDB || userNameInDB) {
                return res.render("users/registerForm", {
                    errors: {
                        email: emailInDB ? { msg: "Este email ya está registrado" } : undefined,
                        username: userNameInDB ? { msg: "Este usuario ya está registrado" } : undefined
                    },
                    oldData: req.body
                });
            }
        
            let newUser = await usersService.createUserDb(req.body, req.file);
            
            if (newUser) {
                return res.render("users/registerView")
            }
  
        } catch (error) {
            console.log(error)
            return ("ocurrio un error al generar el registro nuevo")
        }

    },

    processLogIn: async function(req, res){
        try {
            let userToLogIn = await usersService.findByFieldDb('email',req.body.email)

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
            
        } catch (error) {
            console.log(error)
            return ("ocurrio un error al iniciar sesión")
        }
    },

    profile: (req,res) => {
        return res.render('users/profile',{user: req.session.userLogged})
    },

    profiles: async function(req, res) {
        try {
            let users = await usersService.findAllUsersDb()
            return res.render("users/profileList", {users:users})
        } catch (error) {
            console.log(error)
            res.send("Ha ocurrido un error al mostrar los perfiles de usuario")
        }
    },


    registerView: (req, res) => {
        return res.render('user/registerView',{user: req.session.userLogged})
    },

    logout: (req,res) => {
        res.clearCookie('userEmail');
        req.session.destroy();
        res.redirect("login")
    },

    deleteAdmin: async function(req,res) {
        
        let user = await usersService.findByFieldDb('id', req.params.id)
        console.log(user)

        return res.render("users/deleteAdmin", {user: user})
    },

    delete: function(req,res) {
        return res.render("users/delete")
    },

    processDelete: async function (req, res){
        try {
            let userId = req.session.userLogged.id;

            if (userId){
                await usersService.deleteUserDb(userId)
                res.clearCookie('userEmail');
                req.session.destroy();
                return res.redirect("/users/register")
            }
            
        } catch (error) {
            console.log(error);
            return ("ocurrió un error al eliminar el usuario")
        }

    }, 
    
    processDeleteAdmin: async function (req, res){
        try {
            await usersService.deleteUserDb(req.params.id)

            return res.redirect("/users/Profiles")
            
        } catch (error) {
            console.log(error);
            return ("ocurrió un error al eliminar el usuario")
        }

    }
}


module.exports = usersController;