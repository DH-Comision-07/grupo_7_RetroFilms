module.exports = function(sequelize, dataTypes){

    let alias = 'Cart';

    let cols= {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        Users_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        }
    };

    let config = {
        tableName : 'cart',
        timestamps : false
    };

    let Cart = sequelize.define(alias, cols, config);

    Cart.associate = function(models) {
        Cart.belongsTo(models.User, {
            as: 'user',
            foreignKey: 'Users_id'
        });
        Cart.hasMany(models.MovieCart, {
            as: 'movieCarts',
            foreignKey: 'Cart_id'
        });
    };

    return Cart;
}
