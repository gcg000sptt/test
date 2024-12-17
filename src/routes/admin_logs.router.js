const router = require('express').Router();
const adminLogsController = require('../controllers/admin_logs.controller');

module.exports = (app) => {
    app.use('/admin_logs', router);

    router.get('/');
    router.get('/:id');
}