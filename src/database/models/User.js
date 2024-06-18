module.exports = function(sequelize, dataTypes){

    let alias = 'User';

    let cols= {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        username: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        email: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        profile_pic: {
            type: dataTypes.STRING(200),
            allowNull: true
        },
        password: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        Categories_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        }
    };

    let config = {
        tableName : 'users',
        timestamps : false
    };

    let User = sequelize.define(alias, cols, config);

    User.associate = function(models) {
        User.belongsTo(models.Category,{
            as: 'user',
            foreignKey: 'Categories_id'
        })
    

        User.hasMany(models.Cart, {
            as: 'carts',
            foreignKey: 'Users_id'
        });

    }
    return User;
}

