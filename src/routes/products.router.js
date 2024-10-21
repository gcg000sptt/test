const router = require('express').Router();
const productsController = require('../controllers/products.controller');

module.exports = (app) => {
    app.use('/products', router);

    router.get('/', productsController.getAll);
    router.get('/search', productsController.search);
    router.get('/product/:id', productsController.id);
    router.get('/:category', productsController.category);
    router.post('/create', productsController.create);
    router.put('/product/edit/:id', productsController.edit);
    router.delete('/product/delete/:id', productsController.delete);
};