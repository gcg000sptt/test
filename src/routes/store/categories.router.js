const router = require('express').Router();
const categoryController = require('../../controllers/store/categories.controller') 

module.exports = (app) => {
    app.use('/category', router);

    router.get('/', categoryController.getAll);
};