function adminMid(req, res, next) {
    if (req.session.userlogged == undefined || req.session.userlogged.category != "Platinum") {
        res.send("No tienes permiso para acceder aquí").status(401);
    }
        next();
}

module.exports = { adminMid };
