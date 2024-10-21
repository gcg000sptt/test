module.exports = (app) => {
    app.use((err, req, res, next) =>{
        const status = err.status || 500;
        const response = {
            status: statusCode,
            message: err.message || 'server error'
        }
        res.status(statusCode).json(response);
    });
};