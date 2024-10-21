const express = require('express');
const app = express();
const expressLoader = require('../middleware/express.middleware');
const routeLoader = require('../routes');
const errorHandler = require('../middleware/error.handler');

const loadApp = async() =>{
    expressLoader(app);
    routeLoader(app);
    errorHandler(app);
};
loadApp();

module.exports = app;