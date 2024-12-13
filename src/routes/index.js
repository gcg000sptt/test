const productsRouter = require('./store/products.router');
const reviewsRouter = require('./store/reviews.router');

module.exports = (app) => {
    app.get('/', (req,res) => {
        res.send('welcome to goomie gadget 5555');
    });

    productsRouter(app);
    reviewsRouter(app);
};