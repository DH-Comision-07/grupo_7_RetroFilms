module.exports = function(sequelize, dataTypes){

    let alias = 'Genre';

    let cols= {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: dataTypes.STRING(45),
            allowNull: false
        }
    };

    let config = {
        tableName : 'genres',
        timestamps : false
    };

    let Genre = sequelize.define(alias, cols, config);

    Genre.associate = function(models) {
        Genre.belongsToMany(models.Movie, {
            through:'MovieGenre',
            as: 'movies',
            foreignKey: 'Genre_id',
            otherKey:'Movie_id'
        });
    };
    return Genre;
}
