const multer = require('multer');
const path = require("path")

// ************ disk storage ************
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        if (file.fieldname == "poster"){
            const fileDir = path.resolve(__dirname, "../../public/img/posters/")
            return cb(null, fileDir)
        }
        else if (file.fieldname == "imagesMovie"){
            const fileDirectory = path.resolve(__dirname, "../../public/img/imagesMovies/")
            return cb(null, fileDirectory)
        }
    },
    filename: function (req, file, cb) {   
        if (file.fieldname == "poster"){
            //const uniqueSuffix = "poster-" + Date.now();
            const imageName = "poster-" + Date.now() + "-" + file.originalname
            if(!req.imagePath){
                req.imagePath = [];
            } 
    
            req.imagePath.push(imageName);
            return cb(null, imageName)
        }
        else if (file.fieldname == "imagesMovie"){
        //const uniqueSuffix = "image-" + Date.now();
        const imageName = "movieImage-" + Date.now() + "-" + file.originalname
        if(!req.imagePaths){
            req.imagePaths = [];
        } 

        req.imagePaths.push(imageName);
        return cb(null, imageName)
    }
}})

const upload = multer({ storage: storage });

module.exports = upload;