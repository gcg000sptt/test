const userRouter = require('./user/users.router');
const addressRouter = require('./user/address.router');

const categoriesRouter = require('./store/categories.router');
const productsRouter = require('./store/products.router');
const productSKUsRouter = require('./store/productSKUs.router');
const reviewsRouter = require('./store/reviews.router');

const ordersRouter = require('./order/orders.router');
const orderItemRouter = require('./order/order_items.router');

module.exports = (app) => {
    app.get('/', (req,res) => {
        res.send('welcome to goomie gadget 5555');
    });

    //userRouter(app);
    //addressRouter(app);

    categoriesRouter(app);
    productsRouter(app);
    productSKUsRouter(app);
    reviewsRouter(app);

    //ordersRouter(app);
    //orderItemRouter(app);
};