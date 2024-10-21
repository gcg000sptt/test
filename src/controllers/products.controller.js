const pool = require('../config/database.config')

// exports.create = async(req, res) => {
//     const { name, description, cover_url, catagories_id, discount_id } = req.body;
//     const query = `
//         insert into products (name, description, cover_url, categories_id, discount_id)
//         values () returning *
//         `;
//     const values = [ name, description, cover_url, catagories_id, discount_id ];
//     try {
//         pool.connect
//     } catch (error) {
//         res.status(500).json({ message:'error', error });
//     }
// };

exports.create = async(req, res) => {
    res.send('create api')
};

exports.getAll = async(req, res) => {
    try {
        const result = await pool.query('select * from products');
        res.status(200).json(result.rows);
    } catch (error) {
        res.status(500).json({ message: 'error ', error });
    }
};

exports.search = async(req, res) => {
    res.send('search api');
};

exports.id = async(req, res) => {
    res.send('id api')
};

exports.category = async(req, res) => {
    res.send('category api')
};

exports.edit = async(req, res) => {
    res.send('edit api')
};

exports.delete = async(req, res) => {
    res.send('delete api')
};