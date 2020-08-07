
const Sequelize = require('sequelize');
const uuid = require('uuid').v4;
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config/app');
const sequelize = require('../db/dbConnection');
const BlogUser = require('../db/models/BlogUser')(sequelize, Sequelize);

const save = async (userParam) => {
    const id = uuid();
    // const app = { ...{id: id}, ...value }
    // return await BlogUser.save(app);
    if (await BlogUser.findOne({ 
        where: { userName: userParam.userName}
     })) {
        throw 'Username "' + userParam.userName + '" is already taken';
    }
    try {
        userParam.id = uuid();
        // hash password
        if (userParam.password) {
            userParam.password = bcrypt.hashSync(userParam.password, 10);
        }


        // save user
        return await BlogUser.create(userParam);
    } catch (error) {
        throw error;
    }
}

async function authenticate(username, password) {
    try {
        const user = await BlogUser.findOne({ where: { userName: username } });
        if (user) {
            const bcryptUser = bcrypt.compareSync(password, user.password);
            if (bcryptUser) {
                // const { hash, ...userWithoutHash } = user.toObject();
                const token = jwt.sign({ sub: user.id }, config.secrect);
                return token;
            }
        }
    } catch (error) {
        throw error;
    }
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
    authenticate: authenticate
}