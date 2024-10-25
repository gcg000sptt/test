const express = require('express')
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');

module.exports = (app) => {
    app.use(morgan('dev'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use('/public',express.static(path.join(__dirname,'../../public')));
    app.use(cors());
};