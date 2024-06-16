
const db = require("../database/models")

let genreService = {

    getGenre: async function (id){
        try {
            let selectedGenre = await db.Genre.findAll({
                where : {
                    Movie_id : id
                }
            }
            )
            return selectedGenre;
            
        } catch (error) {
            console.log(error);
        }
    }

}

module.exports = genreService;