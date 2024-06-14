const db = require("../database/models")

// ------------- METODOS CON DB ------------- //

let imageService = {


    newImages: async function (images) {
          
        try {
            let newImage = await db.Image.bulkCreate(images)
           
            return newImage
        } catch (error) {
            console.log(error)
            return "Error. La pelicula no se ha creado"
        }
    },

   

}




module.exports = imageService;