const multer = require('multer');
const path = require("path")

// ************ disk storage ************
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const fileDir = path.resolve(__dirname, "../../public/img/productDetail")
        return cb(null, fileDir)
    },
    filename: function (req, file, cb) {        
        const uniqueSuffix = "image-" + Date.now();
        const imageName = file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname);
        if(!req.imagePaths){
            req.imagePaths = [];
        } 

        req.imagePaths.push(imageName);
        return cb(null, imageName)
    }
})
const upload = multer({ storage: storage })

module.exports = upload;