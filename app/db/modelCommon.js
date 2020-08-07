const idModel = (sequelize, DataTypes) => {
    return {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true
        }
    }
}

module.exports = {
    BlogPost: 'BlogPost',
    BlogUser: 'BlogUser',
    Comment: 'Comment',
    idModel: idModel
}