const router = require('express').Router();

module.exports = (app) => {
    app.use('/', router);

    router.get('/');
}