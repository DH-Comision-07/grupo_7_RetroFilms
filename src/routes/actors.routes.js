const express = require('express');
const router = express.Router();
const uploadFile = require ('../middlewares/actorsMulterMid');
const actorsController = require('../controllers/actorsController');
//const routes = require('./index.routes');

const path = require("path");


router.get('/', actorsController.view);

router.get('/actorsCreation',actorsController.create);
router.post("/",uploadFile.single('profile_pic'), actorsController.processCreate);

router.get("/:id", actorsController.detail)

router.get("/edit/:id", actorsController.edit)
router.put("/:id",uploadFile.single('profile_pic'), actorsController.update )



// router.get('/actorsEdit/:id',actorsController.edit)

module.exports= router;