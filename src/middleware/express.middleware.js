const express = require('express')
const path = require('path');
const cors = require('cors')

module.exports = (app) => {
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use('/public',express.static(path.join(__dirname,'../../public')));
    app.use(cors());
};