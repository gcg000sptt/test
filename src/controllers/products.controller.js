const pool = require('../config/database.config')

//เพิ่มสินค้าใหม่
exports.create = async(req, res) => {
    try {
        const { name, description, cover_url, catagories_id, discount_id } = req.body;
        const query = `
            insert into products (name, description, cover_url, categories_id, discount_id)
            values ($1, $2, $3, $4, $5) returning *
            `;
        const values = [ name, description, cover_url, catagories_id, discount_id ];

        const result = await pool.query(query, values);

        res.status(201).json({ message: `${name} created successfully`, product: result.rows[0] });
        // res.json(name);
        // console.log(name);
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
        res.status(500).json({ error: error.message });
    }
};

//แสดงหมวดหมู่สินค้า
exports.category = async(req, res) => {
    res.send('category api');
};

//ค้นหาสินค้า
exports.search = async(req, res) => {
    try {
        const id = req.params.id;
        const result = await pool.query(`select ${id} from products`);
        res.status(200).json(result.rows);
        //res.send(`search  api`);
    } catch (error) {
        res.status(500).json('error', error)
    }
};

//แสดงสินค้าตาม id
exports.id = async(req, res) => {
    try {
        const id = req.params.id;
        const query = `select * from products where id = $1`;

        const result = await pool.query(query,[id]);

        if( result.rows.length === 0){
            return res.status(404).json({ message:'product not found' });
        }
        res.status(200).json(result.rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//อัพเดตสินค้า
exports.update = async(req, res) => {
    try {
        const id = req.params.id;
        const { name, description, cover_url } = req.body;
        const query = `
            update products
            set name = $1,
                description = $2,
                cover_url = $3
            where id = $4
        `;
        const values = [ name, description, cover_url, id ];
        const result = await pool.query(query, values);

        if(result.rowCount> 0){
            return res.status(200).json({ message:'product update successfully'});
        }else{
            return res.status(404).json({ message:'product not found'})
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//ลบสินค้า
exports.delete = async(req, res) => {
    const id = req.params.id;
    res.status(201).json(`delete ${id} api`)
};