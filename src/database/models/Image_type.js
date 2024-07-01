module.exports = function(sequelize, dataTypes){

    let alias = 'ImageType';

    let cols= {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name_type: {
            type: dataTypes.STRING(100),
            allowNull: false
        }
    };

    let config = {
        tableName : 'image_type',
        timestamps : false
    };

    let ImageType = sequelize.define(alias, cols, config);

    ImageType.associate = function(models) {
        ImageType.hasMany(models.Image, {
            as: 'images',
            foreignKey: 'categoria_tipo' // Aquí se ajusta el nombre de la clave foránea
        });
    };
    
    return ImageType;
}


/*module.exports = function(sequelize, dataTypes){

    let alias = 'ImageType';

    let cols= {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name_type: {
            type: dataTypes.STRING(100),
            allowNull: false
        }
    };

    let config = {
        tableName : 'image_type',
        timestamps : false
    };

    let ImageType = sequelize.define(alias, cols, config);

    ImageType.associate = function(models) {
        ImageType.hasMany(models.Image, {
            as: 'images',
            foreignKey: 'image_type_id'
        });
    };
    
    return ImageType;
}
*/