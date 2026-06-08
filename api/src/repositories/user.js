const pool = require('../config/db');

const UserRepository = {};

UserRepository.findByEmail = async (email) => {
    const [rows] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
    return rows[0] || null;
};

UserRepository.findByPhone = async (phone) => {
    const [rows] = await pool.query('SELECT * FROM users WHERE phone = ?', [phone]);
    return rows[0] || null;
};

UserRepository.findById = async (id) => {
    const [rows] = await pool.query(
        'SELECT id, name, email, phone, role FROM users WHERE id = ?',
        [id]
    );
    return rows[0] || null;
};

UserRepository.save = async (userData) => {
    const { name, email, password, phone } = userData;
    const [result] = await pool.query(
        'INSERT INTO users (name, email, password, phone) VALUES (?, ?, ?, ?)',
        [name, email, password, phone]
    );
    return result.insertId;
};

UserRepository.update = async (id, userData) => {
    const { name, email, phone } = userData;
    const [result] = await pool.query(
        'UPDATE users SET name = ?, email = ?, phone = ? WHERE id = ?',
        [name, email, phone, id]
    );
    return result.affectedRows > 0;
};

UserRepository.delete = async (id) => {
    const [result] = await pool.query('DELETE FROM users WHERE id = ?', [id]);
    return result.affectedRows > 0;
};

module.exports = UserRepository;