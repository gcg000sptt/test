const router = require('express').Router();
const productSKUsController = require('../../controllers/store/productSKUs.controller')

module.exports = (app) => {
    app.use('/productSKUs', router);

    router.get('/')
};