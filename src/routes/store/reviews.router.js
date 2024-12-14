const router = require('express').Router();
const reviewsController = require('../../controllers/store/reviews.controller')

module.exports = (app) => {
    app.use('/reviews', router);

    router.get('/user/:id');
    router.get('/item/:id');
    router.post('/create')
};