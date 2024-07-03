const multer = require("multer");
const path = require("path");

// ** disk storage **

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.resolve(__dirname, '../../public/img/avatars'));
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
})

const uploadUserFile = multer({ storage })

module.exports = uploadUserFile;