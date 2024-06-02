module.exports = function(sequelize, dataTypes){

    let alias = 'MovieGenre';

    let cols= {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        Movie_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        Genre_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        }
    };

    let config = {
        tableName : 'movies_genres',
        timestamps : false
    };

    let MovieGenre = sequelize.define(alias, cols, config);

    return MovieGenre;
}
