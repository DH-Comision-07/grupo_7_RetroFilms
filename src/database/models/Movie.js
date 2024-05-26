module.exports = function(sequelize, dataTypes){

    let alias = 'Movie';

    let cols= {
        
    id: {
        type: dataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: dataTypes.STRING(45),
        allowNull: false
    },
    length: {
        type: dataTypes.TINYINT,
        allowNull: false
    },
    release_date: {
        type: dataTypes.DATE,
        allowNull: false
    },
    price: {
        type: dataTypes.INTEGER,
        allowNull: false
    },
    description: {
        type: dataTypes.STRING(800),
        allowNull: true
    },
    top_movie: {
        type: dataTypes.TINYINT,
        allowNull: true
    },
    is_carrousell:{
        type: dataTypes.TINYINT,
        allowNull: true
    }
    };

    let config = {
        tableName : 'Movies',
        timestamps : false
    };

    let Movie = sequelize.define(alias, cols, config)

    Movie.associate = function(models) {
        Movie.belongsToMany(models.Genre, {
            through:'MovieGenre',
            as: 'genres',
            foreignKey: 'Movie_id',
            otherKey:'Genre_id'
        });
        Movie.hasMany(models.Image, {
            as: 'images',
            foreignKey: 'Movies_id'
        });
        Movie.belongsToMany(models.Actor, {
            through:'ActorMovie',
            as: 'actors',
            foreignKey: 'Movies_id',
            otherKey:'Actors_id'
        });
        Movie.hasMany(models.MovieCart, {
            as: 'movieCarts',
            foreignKey: 'Movies_id'
        });
    };


    return Movie;
}


