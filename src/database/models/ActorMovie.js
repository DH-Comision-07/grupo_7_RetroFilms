module.exports = function(sequelize, dataTypes){

    let alias = 'ActorMovie';

    let cols= {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        Actors_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        Movies_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        }
    };

    let config = {
        tableName : 'Actors_Movies',
        timestamps : false
    };

    let ActorMovie = sequelize.define(alias, cols, config);

    return ActorMovie;
}
