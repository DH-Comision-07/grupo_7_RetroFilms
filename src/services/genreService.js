
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
            
            //console.log('este id llega por el service', id);
            console.log('este body llega por el service', body);
            console.log(' Movie_id llegando por el service', movieId);
            
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
    }

}

module.exports = genreService;