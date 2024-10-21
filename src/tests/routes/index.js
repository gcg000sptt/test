const express = require('express');
const path = require('path');
const router = express.Router();
const db = require('../../config/database.config');

router.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'../pages/test.html'));
});

// router.get('/db', async(req,res) => {
//     const result = await db.query('select * from products');
//     res.status(200).json({ messages:'success', rowsCount: result.rowCount ,rows:result.rows });
// });


module.exports = router;