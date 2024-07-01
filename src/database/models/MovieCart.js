module.exports = function(sequelize, dataTypes){

    let alias = 'MovieCart';

    let cols= {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        Movies_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        Cart_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        }
    };

    let config = {
        tableName : 'movies_cart',
        timestamps : false
    };

    let MovieCart = sequelize.define(alias, cols, config);

    MovieCart.associate = function(models) {
        MovieCart.belongsTo(models.Movie, {
            as: 'movie',
            foreignKey: 'Movies_id'
        });
        MovieCart.belongsTo(models.Cart, {
            as: 'cart',
            foreignKey: 'Cart_id'
        });
    };
    
    return MovieCart;
}
