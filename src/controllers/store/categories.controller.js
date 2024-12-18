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
        if( result.rows.length === 0){
            return res.status(404).json({ message:'category is not found' });
        }
        res.status(200).json(result.rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.update = async(req, res) => {
    try {
        
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.delete = async(req, res) => {
    try {
        
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}