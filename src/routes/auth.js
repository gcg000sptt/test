const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/login', (req,res)=>{
    res.send('login')
})

router.get('/logout', (req,res)=>{
    res.send('logout')
})

module.exports = router;