
const Sequelize = require('sequelize');
const uuid = require('uuid').v4;
const sequelize = require('../db/dbConnection');
const BlogUser = require('../db/models/BlogUser')(sequelize, Sequelize);

const save = async (value) => {
    const id = uuid();
    const app = { ...{id: id}, ...value }
    return await BlogUser.save(app);
}

const findAll = async () => {
    const data = await BlogUser.findAll();
    return data;
}

const findById = async (id) => {
    return await BlogUser.findById(id);
}

const update = async (data) => {
    return await BlogUser.update(data, {
        where: { id: data.id }
    });
}
const _delete = async (value) => {
    return BlogUser.destroy({
        where: { id: value.id }
    });
}
module.exports = {
    getList: findAll,
    getById: findById,
    save: save,
    update: update,
    delete: _delete,
}