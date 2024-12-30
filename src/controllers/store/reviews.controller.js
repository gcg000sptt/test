const pool = require('../../config/database.config');

exports.create = async(req, res) => {
    try {
        
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.getAll = async(req, res) => {
    try {
        const result = await pool.query('select * from reviews');
        res.status(200).json(result.rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.select = async(req, res) => {
    try {
        
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