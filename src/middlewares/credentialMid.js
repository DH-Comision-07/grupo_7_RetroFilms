function adminMid(req, res, next) {
    if (req.session.userlogged == undefined || req.session.userlogged.category != "Platinum") {
        res.render("edition").status(401);
    }
        next();
}

module.exports = { adminMid };
