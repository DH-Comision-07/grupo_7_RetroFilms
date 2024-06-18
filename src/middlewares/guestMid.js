

let guestMid = {
guestMid: function(req,res,next){
    if(req.session.userLogged != undefined){
        return res.redirect('login')
    }
    next();
}
}

module.exports = guestMid;