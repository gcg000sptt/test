const router = require('../controllers/admins');

const adminController = require('../controllers/admins');

module.exports = (app) => {
    app.use('/admin', router);

    router.get('/');
    router.get('/profile/:id')
    router.post('/create');
    router.put('/update/:id');
    router.delete('/delete/:id');
}