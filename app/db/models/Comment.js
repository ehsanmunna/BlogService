const { idModel,
    BlogUser,
    BlogPost,
    Comment
} = require("../modelCommon");

module.exports = function (sequelize, DataTypes) {
    return sequelize.define(Comment, {
        ...idModel(sequelize, DataTypes),
        userId: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: BlogUser,
                key: 'id'
            }
        },
        blogId: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: BlogPost,
                key: 'id'
            }
        },
        comment: {
            type: DataTypes.STRING,
            allowNull: false
        },
        isSpam: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        activeComment: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        createdOn: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: sequelize.fn('GETDATE')
        }
    }, {
        timestamps: false,
        tableName: Comment
    });
};