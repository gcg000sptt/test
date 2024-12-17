const router = require('express').Router();

const usersController = require('../../controllers/user/users.controller');

module.exports = (app) => {
    app.use('/user', router);

    router.get('/');
    router.get('/profile/:id');
    router.post('/create');
    router.put('/update/:id');
    router.delete('/delete/:id');
}