
const Sequelize = require('sequelize');
const uuid = require('uuid').v4;
const sequelize = require('../db/dbConnection');
const blogService = require('../service/Blog');
const Comment = require('../db/models/Comment')(sequelize, Sequelize);

const save = async (value) => {
    try {
        value.id = uuid();
        if (!value.blogId) {
            throw "blog id required !"
        }
        return await Comment.create(value);
    } catch (error) {
        throw error;
    }
}

const findAll = async () => {
    const data = await Comment.findAll();
    return data;
}

const findById = async (id) => {
    return await Comment.findByPk(id);
}

const update = async (data) => {
    return await Comment.update(data, {
        where: { id: data.id }
    });
}
const _delete = async (value) => {
    return CRUD(Comment).delete(value);
}
module.exports = {
    getList: findAll,
    getById: findById,
    save: save,
    update: update,
    delete: _delete,
}