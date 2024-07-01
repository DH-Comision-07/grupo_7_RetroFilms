module.exports = function(sequelize, dataTypes){

    let alias = 'Category';

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
        tableName : 'categories',
        timestamps : false
    };

    let Category = sequelize.define(alias, cols, config);


    Category.associate = function(models) {
        Category.hasMany(models.User,{
            as: 'categories',
            foreignKey: 'Categories_id'
        });

}
return Category;
}
