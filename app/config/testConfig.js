const routeConfig = require('./route');
const config = require('./app')

module.exports = {
    baseRoute: `http://localhost:${config.port}/${config.apiRoot}/${config.apiVersion}`
}