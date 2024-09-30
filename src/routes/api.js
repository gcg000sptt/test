const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/test', (req,res)=>{
    res.sendFile(path.join(__dirname,'../views/test.html'))
});

module.exports = router;