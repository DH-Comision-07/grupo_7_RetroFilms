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

   findImage: async function (Movies_id) {
    try {
        let images = await db.Image.findAll({
            where:{
                Movies_id:Movies_id
        }})
        return images;
    } catch (error) {
        console.log('error al encontrar imagen', error);
    }
}, 

deleteImage: async function (Movies_id){
    try {
            await db.Image.destroy({
                where:{
                    Movies_id: Movies_id
                }
            })
    } catch (error) {
        console.log('error al eliminar imagen', error);
    }
}

}


module.exports = imageService;