const users = require ('../database/json/users.json');
const fs = require ('fs');
const path = require ('path');
const bcrypt = require ('bcryptjs')
const db = require("../database/models")

let usersService = {
    
    users:users,

    findAllUsers: function (){
        return this.users
    },

    findAllUsersDb: async function(){
        try {
            let users = await db.User.findAll()
            return users
        } catch (error) {
            console.log(error)
            return ("ocurrio un error al buscar a los usuarios")
        }
    },


    findByField: function (field, text){
        let allUsers = this.findAllUsers();
        let userFound = allUsers.find(user => user[field] === text);
        return userFound;
    },


    findByFieldDb: async function (field, text) {
        try {
            let user = await db.User.findOne({
                where: {
                    [field]: text
                }
            })
            return user
        } catch (error) {
            console.log(error)
        }
    },
    

    createUserDb: async function(user, file){          
        try {
            db.User.create({
                name:user.name,
                username:user.username,
                email:user.email,
                profile_pic:file.filename,
                password:bcrypt.hashSync(user.password,10),
                Categories_id: user.Categories_id   
            })
    
            return true;
        } catch (error) {
            console.log(error)
            return ("ocurrio un error al generar el registro nuevo")
        }

    },


    deleteUserDb: async function(id) {
        db.User.destroy({
            where: {id: id}
        })
    },


    userUpdate: async function(id, body, file, session) {
        
        try {
            console.log("---- Este es el body ----")
            console.log(body)
            console.log("---- Fin Body ----")

            await db.User.update({
                name: body.name,
                username: body.username,
                email: body.email,
                profile_pic: file.filename,
                password: bcrypt.hashSync(body.password,10),
                Categories_id: body.Categories_id
            },
                { 
                where: {id: id}
                }
            )

            let modifiedUserData = {
                name: body.name,
                username: body.username,
                email: body.email,
                profile_pic: file.filename,
                password: bcrypt.hashSync(body.password,10),
                Categories_id: body.Categories_id
            }

            console.log("estos son los datos del usuario actualizados:",modifiedUserData)
            return modifiedUserData

        } catch (error) {
            console.log(error)
            return "El perfil no se pudo modificar"
        }

    }
}


module.exports= usersService;