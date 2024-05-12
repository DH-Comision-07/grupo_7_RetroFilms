const multer = require('multer');
const path = require("path")

// ************ disk storage ************
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        if (file.fieldname == "poster"){
            const fileDir = path.resolve(__dirname, "../../public/img/productDetail/posters/")
            return cb(null, fileDir)
        }
        else if (file.fieldname == "imagesMovie"){
            const fileDirectory = path.resolve(__dirname, "../../public/img/productDetail/")
            return cb(null, fileDirectory)
        }
    },
    filename: function (req, file, cb) {   
        if (file.fieldname == "poster"){
            const uniqueSuffix = "poster-" + Date.now();
            const imageName = file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname);
            if(!req.imagePath){
                req.imagePath = [];
            } 
    
            req.imagePath.push(imageName);
            return cb(null, imageName)
        }
        else if (file.fieldname == "imagesMovie"){
        const uniqueSuffix = "image-" + Date.now();
        const imageName = file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname);
        if(!req.imagePaths){
            req.imagePaths = [];
        } 

        req.imagePaths.push(imageName);
        return cb(null, imageName)
    }
}})

const upload = multer({ storage: storage });

module.exports = upload;