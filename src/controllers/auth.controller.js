const pool = require('../config/database.config')
const bcrypt = require('bcrypt')

const register = async(req,res) => {
    const { username, password } = req.body
    try {
        const hashPassword = await bcrypt.hash(password,10)
        //await pool.query('*****', [username, hashPassword])
        //res.status(200).json({ messages: `user registered` })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = { register }