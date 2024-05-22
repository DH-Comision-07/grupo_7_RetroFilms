const users = require ('../database/json/users.json');
const fs = require ('fs');
const path = require ('path');
const bcrypt = require ('bcryptjs')


let usersService = {
    
    users:users,

    fileName: path.resolve(__dirname, "../database/users.json"),

    findAllUsers: function (){
        return this.users
    },

    findUserPK: function(id){
        let user = this.users.find(user => user.id === id);
        return user;
    },

    findByField: function (field, text){
        let allUsers = this.findAllUsers();
        let userFound = allUsers.find(user => user[field] === text);
        return userFound;
    },

    
    createUser: function(user, imagePaths){          
        let maxId = 0;
        for (let i=0; i < this.users.length; i++){
            if(this.users[i].id > maxId){
                maxId = this.users[i].id;
            };
        }
        

        let newUser = {
            id:(maxId +1),
            name:user.name,
            userName:user.userName,
            email:user.email,
            userPic: imagePaths,
            password:bcrypt.hashSync(user.password,10),
            category:user.category           
        }

        this.users.push(newUser);
        let usersJSON= JSON.stringify(this.users, null,' ');
        fs.writeFileSync(this.fileName,usersJSON);
        return true;
    },

    deleteUser: function(id){
        let allUsers = this.findAllUsers();
        let finalUsers = allUsers.filter(user => user.id !== id);
        let usersJSON= JSON.stringify(finalUsers, null,' ');
        fs.writeFileSync(this.fileName,usersJSON)
        return true;
    }
}

module.exports=usersService;