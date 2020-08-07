
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const config = require('./app')
const baseRoute = `/${config.apiRoot}/${config.apiVersion}`
module.exports = {
    routes: (app) => {
        
        const controllerRoute = '../controller/';
        app.use(`${baseRoute}/blog`, require(`${controllerRoute}Blog`));
        app.use(`${baseRoute}/comment`, require(`${controllerRoute}Comment`));
        app.use(`${baseRoute}/user`, require(`${controllerRoute}User`));
                
    }
}