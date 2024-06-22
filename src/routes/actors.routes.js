const express = require('express');
const router = express.Router();

const actorsController = require('../controllers/actorsController');
//const routes = require('./index.routes');

const multer = require("multer");
const path = require("path");

// ************ disk storage ************
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const fileDir = path.resolve(__dirname, "../../public/img/productDetail/actors")
        return cb(null, fileDir)
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = "actor-" + Date.now()
        return cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname))
    }
})
const upload = multer({ storage: storage })

router.get('/', actorsController.view);

router.get("/:id", actorsController.detail)

router.get('/actorsCreation',actorsController.create)
router.post("/actorsCreation", actorsController.createFinished)

router.get('/actorsEdit/:id',actorsController.edit)

module.exports= router;