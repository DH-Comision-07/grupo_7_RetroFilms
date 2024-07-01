const multer = require("multer");
const path = require("path");

// ************ disk storage ************
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        //const fileDir = path.resolve(__dirname, "../../public/img/actors")
        cb(null, path.resolve(__dirname, "../../public/img/actors") )
    },
    filename: function (req, file, cb) {
        //const uniqueSuffix =  Date.now() + path.extname(file.originalname)
        //const imageName = file.fieldname + '-' + uniqueSuffix ;
        // if(!req.imagePaths){
        //     req.imagePaths = [];
        // }

        // req.imagePaths.push(imageName);
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

const uploadFile = multer({ storage: storage })

module.exports = uploadFile;