
function guestMid (req,res,next){
    if(req.session.userLogged){
        return res.redirect('profile')
    }
    next();
}

module.exports = guestMid;