module.exports = function(sequelize, dataTypes){

    let alias = 'Image';

    let cols= {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name_URL: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        Movies_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        image_type_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        }
    };

    let config = {
        tableName : 'Images',
        timestamps : false
    };

    let Image = sequelize.define(alias, cols, config);

    Image.associate = function(models) {
        Image.belongsTo(models.Movie, {
            as: 'movie',
            foreignKey: 'Movies_id'
        });
        Image.belongsTo(models.ImageType, {
            as: 'imageType',
            foreignKey: 'image_type_id'
        });
    };
    
    return Image;
}
