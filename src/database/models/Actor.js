module.exports = function(sequelize, dataTypes){

    let alias = 'Actor';

    let cols= {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        full_name: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        bio: {
            type: dataTypes.STRING(45),
            allowNull: true
        },
        profile_pic: {
            type: dataTypes.STRING(45),
            allowNull: true
        }
    };

    let config = {
        tableName : 'actors',
        timestamps : false
    };

    let Actor = sequelize.define(alias, cols, config);

    Actor.associate = function(models) {
        Actor.belongsToMany(models.Movie, {
            through: 'ActorMovie',
            as: 'movies',
            foreignKey: 'Actors_id',
            otherKey:'Movies_id'
        });
    };

    return Actor;
}
