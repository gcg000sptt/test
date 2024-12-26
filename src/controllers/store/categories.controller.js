const { query } = require('express');
const pool = require('../../config/database.config');

exports.create = async(req, res) => {
    try {
        
    } catch (error) {
        res.status(500).json({ message:'failed to create', error });
    }
}

exports.getAll = async(req, res) => {
    try {
        const result = await pool.query('select * from categories');
        res.status(200).json(result.rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.select = async(req, res) => {
    try {
        const id = req.params.id;
        const query = `select * from category where id = $1`;
        const result = await pool.query(query,[id]);
        if( result.rowCount === 0){
            return res.status(404).json({ error:'category not found' });
        }
        res.status(200).json(result.rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.update = async(req, res) => {
    try {
        const {name, id} = req.body;
        const query = `UPDATE category SET name = $1 WHERE id = $2`;
        const result = await pool.query(query,[name,id]);
        if(result.rowCount === 0) {
            return res.status(404).json({ error: 'category not found' })
        }
        res.status(200).json({massage: 'category updated'});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.delete = async(req, res) => {
    try {
        const id = req.params.id;
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}