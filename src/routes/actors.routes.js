const express = require('express');
const router = express.Router();
const uploadFile = require ('../middlewares/actorsMulterMid');
const actorsController = require('../controllers/actorsController');
//const routes = require('./index.routes');

const path = require("path");

// ---- GET ALL ACTORS -----//
router.get('/', actorsController.view);

// ---- CREATE ACTOR -----//
router.get('/actorsCreation',actorsController.create);
router.post("/",uploadFile.single('profile_pic'), actorsController.processCreate);

// ---- GET ONE ACTOR -----//
router.get("/:id", actorsController.detail)


// ---- EDIT ACTOR -----//
router.get("/edit/:id", actorsController.edit)
router.put("/:id",uploadFile.single('profile_pic'), actorsController.update )

//--- DELETE ACTOR --//
router.delete("/:id/delete", actorsController.delete)




// router.get('/actorsEdit/:id',actorsController.edit)

module.exports= router;