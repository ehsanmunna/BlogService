const { idModel,  } = require("../modelCommon");

const tableName = 'BlogUser';
module.exports = function (sequelize, DataTypes) {
    return sequelize.define(tableName, {
        ...idModel(sequelize, DataTypes),
        firstName: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        lastName: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true
        },
        userName: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        password: {
            type: DataTypes.STRING(200),
            allowNull: false
        },
    }, {
        timestamps: false,
        tableName: tableName
    });
};
