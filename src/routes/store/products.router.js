const router = require('express').Router();
const productsController = require('../../controllers/store/products.controller');

module.exports = (app) => {
    app.use('/products', router);

    router.get('/', productsController.getAll);
    router.get('/search', productsController.search);
    router.get('/product/:id', productsController.id);
    router.get('/category', productsController.category);
    router.post('/create', productsController.create);
    router.put('/product/update/:id', productsController.update);
    router.delete('/product/delete/:id', productsController.delete);
};