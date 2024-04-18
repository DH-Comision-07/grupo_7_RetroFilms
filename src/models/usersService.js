const users = require ('../models/users.json');
const fs = require ('fs');
const path = require ('path');


let usersService = {
    
    users:users,
    
    createUser: function(user, imagePaths){          
        let maxId = 0;
        for (let i=0; i < this.users.length; i++){
            if(this.users[i].id > maxId){
                maxId = this.users[i].id;
            };
        }
        

        let newUser = {
            id:(maxId +1),
            name:user.realName,
            userName:user.userName,
            email:user.email,
            userPic: imagePaths,
            password:user.password,
            category:user.category           
        }

        this.users.push(newUser);
        let usersJSON= JSON.stringify(this.users);
        fs.writeFileSync(path.resolve(__dirname, "../models/users.json"),usersJSON);
    }
}

module.exports=usersService;