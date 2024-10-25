const pool = require('../config/database.config')

//เพิ่มสินค้าใหม่
exports.create = async(req, res) => {
    const { name, description, cover_url, catagories_id, discount_id } = req.body;
    const query = `
        insert into products (name, description, cover_url, categories_id, discount_id)
        values ($1, $2, $3, $4, $5) returning *
        `;
    const values = [ name, description, cover_url, catagories_id, discount_id ];
    try {
        //const result = await pool.query(query, values);
        //res.status(201).json({ message: `${name} created successfully`, product: result.rows[0] });
        res.json(name);
        console.log(name);
    } catch (error) {
        res.status(500).json({ message:'failed to create product', error });
    }
};

//แสดงสินค้าทั้งหมด
exports.getAll = async(req, res) => {
    try {
        const result = await pool.query('select * from products');
        res.status(200).json(result.rows);
    } catch (error) {
        res.status(500).json({ message: 'error ', error });
    }
};

//แสดงหมวดหมู่สินค้า
exports.category = async(req, res) => {
    res.send('category api');
};

//ค้นหาสินค้า
exports.search = async(req, res) => {
    const id = req.params.id;
    res.send(`search  api`);
};

//แสดงสินค้าตาม id
exports.id = async(req, res) => {
    const id = req.params.id;
    res.send(`id ${id} api`)
};

//อัพเดตสินค้า
exports.update = async(req, res) => {
    const id = req.params.id;
    res.status(201).json(`update ${id} api`)
    console.log(`update ${id} api`)
};

//ลบสินค้า
exports.delete = async(req, res) => {
    const id = req.params.id;
    res.send(`delete ${id} api`)
};