const productsRouter = require('./products.router');
const reviewsRouter = require('./reviews.router');

module.exports = (app) => {
    app.get('/', (req,res) => {
        res.send('welcome to goomie gadget 5555');
    });

    productsRouter(app);
    reviewsRouter(app);
};