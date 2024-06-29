const users = require ('../database/json/users.json');
const fs = require ('fs');
const path = require ('path');
const bcrypt = require ('bcryptjs')
const db = require("../database/models")

let usersService = {
    
    users:users,

    // fileName: path.resolve(__dirname, "../database/users.json"),

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

    // findUserPK: function(id){
    //     let user = this.users.find(user => user.id === id);
    //     return user;
    // },

    findByField: function (field, text){
        let allUsers = this.findAllUsers();
        let userFound = allUsers.find(user => user[field] === text);
        return userFound;
    },

    // findByEmailDb: async function (text) {
    //     try {
    //         let field = await db.User.findOne({
    //             where: {
    //                 email: text
    //             }
    //         })
    //         return field
    //     } catch (error) {
    //         console.log(error)
    //     }
    // },

    // findByUserNameDb: async function (text) {
    //     try {
    //         let field = await db.User.findOne({
    //             where: {
    //                 userName: text
    //             }
    //         })
    //         return field
    //     } catch (error) {
    //         console.log(error)
    //     }
    // },

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
    
    // createUser: function(user, imagePaths){          
    //     let maxId = 0;
    //     for (let i=0; i < this.users.length; i++){
    //         if(this.users[i].id > maxId){
    //             maxId = this.users[i].id;
    //         };
    //     }
        

    //     let newUser = {
    //         id:(maxId +1),
    //         name:user.name,
    //         userName:user.userName,
    //         email:user.email,
    //         userPic: imagePaths,
    //         password:bcrypt.hashSync(user.password,10),
    //         category:user.category           
    //     }

    //     this.users.push(newUser);
    //     let usersJSON= JSON.stringify(this.users, null,' ');
    //     fs.writeFileSync(this.fileName,usersJSON);
    //     return true;
    // },

    createUserDb: async function(user, imagePaths){          
        try {
            db.User.create({
                name:user.name,
                username:user.userName,
                email:user.email,
                profile_pic: String(imagePaths),
                password:bcrypt.hashSync(user.password,10),
                Categories_id: user.category    
            })
    
            return true;
        } catch (error) {
            console.log(error)
            return ("ocurrio un error al generar el registro nuevo")
        }

    },

    // deleteUser: function(id){
    //     let allUsers = this.findAllUsers();
    //     let finalUsers = allUsers.filter(user => user.id !== id);
    //     let usersJSON= JSON.stringify(finalUsers, null,' ');
    //     fs.writeFileSync(this.fileName,usersJSON)
    //     return true;
    // },

    deleteUserDb: async function(id) {
        db.User.destroy({
            where: {id: id}
        })
    },

    userUpdate: async function(id, body, file) {
        try {

            // console.log(file)

            let modifiedUser = db.User.update({
                name: body.name,
                username: body.username,
                email: body.email,
                profile_pic: file.filename,
                password: bcrypt.hashSync(user.password,10),
                Categories_id: body.Categories_id
                },
                { 
                where: {id: id}
                }
            )
    
            return modifiedUser
        } catch (error) {
            console.log(error)
            return "El perfil no se pudo modificar"
        }

    }
}


module.exports= usersService;