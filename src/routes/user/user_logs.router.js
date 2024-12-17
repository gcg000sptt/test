const router = require('express').Router();
const usersLogsController = require('../../controllers/user/user_logs.controller');

module.exports = (app) => {
    app.use('/users_logs', router);

    router.get('/');
    router.get('/:id');
}