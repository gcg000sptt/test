require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const { port } = require('./src/config/server.config')
const routes = require('./src/routes');
const tests = require('./src/tests/routes')

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/public',express.static(path.join(__dirname,'./public')));
app.use(cors());

app.use( routes );
app.use('/testing', tests );

app.listen(port, () => {
    console.log(`------ listening on port ${port} ------`);
});