const user = require('../services/usersService')



function userMid (req,res,next){
        if(req.session.userLogged != undefined){
            return res.redirect('profile')
        }
        next();
    }


function loggedUserMid(req, res, next){
    res.locals.loggedIn = false;

    let emailInCookie = req.cookies.userEmail;
    let userFromCookie = user.findByField('email', emailInCookie);

    //console.log(userFromCookie);
    
    if(userFromCookie){
        req.session.userLogged = userFromCookie;
    }

    if(req.session && req.session.userLogged){
        res.locals.loggedIn = true;
        res.locals.userLogged = req.session.userLogged;
    }

    
    next();
}

module.exports = {
    userMid: userMid,
    loggedUserMid: loggedUserMid
};