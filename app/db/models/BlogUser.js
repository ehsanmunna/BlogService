const { idModel,  } = require("../modelCommon");

const tableName = 'BlogUser';
module.exports = function (sequelize, DataTypes) {
    return sequelize.define(tableName, {
        ...idModel(sequelize, DataTypes),
        firstName: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }, {
        timestamps: false,
        tableName: tableName
    });
};
