const multer = require("multer");
const path = require("path");

// ** disk storage **

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.resolve(__dirname, '../../public/img/actors'));
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
})

const uploadFile = multer({ storage })

module.exports = uploadFile;