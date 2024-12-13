const router = require('express').Router();

module.exports = (app) => {
    app.use('/reviews', router);

    router.get('/user/:id');
    router.get('/product/:id');
    router.post('/create')
};