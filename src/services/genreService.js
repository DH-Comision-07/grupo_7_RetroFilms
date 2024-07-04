
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
    }, 

    newMovieGenreRegister: async function (movieId, body) {

        try {    
                        
            let MovieGenreRegisters = body.genre.map(genreId => ({
                Genre_id: genreId,
                Movie_id: movieId
            }));

            
            console.log('MovieGenreRegisters en el service', MovieGenreRegisters);
            let MovieGenreRegister = await db.MovieGenre.bulkCreate(MovieGenreRegisters);
        
            
            return MovieGenreRegister;
            
        } catch (error) {
            console.log(error)
            return "Error. la relacion no se ha creado"
        }
    }, 

    deleteRegister: async function (movieId){
        try {
            await db.MovieGenre.destroy({
                where: {
                    Movie_id:movieId
                }
            })
        } catch (error) {
            
        }
    }

}

module.exports = genreService;