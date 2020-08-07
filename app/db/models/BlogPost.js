const { idModel,
    BlogUser,
    BlogPost
} = require("../modelCommon");

module.exports = function (sequelize, DataTypes) {
    return sequelize.define(BlogPost, {
        ...idModel(sequelize, DataTypes),
        userId: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: BlogUser,
                key: 'id'
            }
        },
        blogPost: {
            type: DataTypes.STRING,
            allowNull: false
        },
        createdOn: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: sequelize.fn('GETDATE')
        }
    }, {
        timestamps: false,
        tableName: BlogPost
    });
};