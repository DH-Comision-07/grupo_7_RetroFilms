const multer = require("multer");
const path = require("path");

// ************ disk storage ************
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const fileDir = path.resolve(__dirname, "../../public/img/actors")
        return cb(null, fileDir)
    },
    filename: function (req, file, cb) {
        const uniqueSuffix =  Date.now() + path.extname(file.originalname)
        const imageName = file.fieldname + '-' + uniqueSuffix ;
        if(!req.imagePaths){
            req.imagePaths = [];
        }

        req.imagePaths.push(imageName);
        return cb(null, imageName)
    }
})

const uploadFile = multer({ storage: storage })

module.exports = uploadFile;