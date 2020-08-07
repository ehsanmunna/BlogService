
const Sequelize = require('sequelize');
const uuid = require('uuid').v4;
const sequelize = require('../db/dbConnection');
const Blog = require('../db/models/BlogPost')(sequelize, Sequelize);

const save = async (value) => {
    const id = uuid();
    const app = { ...{id: id}, ...value }
    return await Blog.save(app);
}

const findAll = async () => {
    const data = await Blog.findAll();
    return data;
}

const findById = async (id) => {
    return await Blog.findById(id);
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