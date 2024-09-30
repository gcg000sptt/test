const express = require('express');
const path = require('path');
const cors = require('cors');

const api = require('./src/routes/api');
const auth = require('./src/routes/auth');

const app = express();
const port = process.env.PORT || 7070;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use(api);
app.use(auth);

app.listen(port, ()=>{
    console.log(`------ listening on port ${port} ------`);
});