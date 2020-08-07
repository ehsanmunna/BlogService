
const Sequelize = require('sequelize');
const uuid = require('uuid').v4;
const sequelize = require('../db/dbConnection');
const Blog = require('../db/models/BlogPost')(sequelize, Sequelize);

const save = async (value) => {
    try {
        value.id = uuid();
        return await Blog.create(value);
    } catch (error) {
        throw error;
    }
}

const findAll = async () => {
    const data = await Blog.findAll();
    return data;
}

const findById = async (id) => {
    return await Blog.findByPk(id);
}

const update = async (data) => {
    return await Blog.update(data, {
        where: { id: data.id }
    });
}
const _delete = async (value) => {
    return CRUD(Blog).delete(value);
}
module.exports = {
    getList: findAll,
    getById: findById,
    save: save,
    update: update,
    delete: _delete,
}