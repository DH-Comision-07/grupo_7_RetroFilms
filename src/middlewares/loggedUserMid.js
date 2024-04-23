function loggedUserMid(req, res, next){
    res.locals.loggedIn = false;

    if(req.session && req.session.userLogged){
        res.locals.loggedIn = true;
    }


    next();
}

module.exports = loggedUserMid;