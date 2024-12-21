const router = require('express').Router();

module.exports = (app) => {
    app.use('/', router);

    router.get('/');
    router.get('/select');
    router.get('/update');
    router.get('/delete');
}