const pool = require('../config/db');

const Model = {};

Model.saveUser = async (userData) => {
	const { name, email, password, phone } = userData;
	const [result] = await pool.query(
		'INSERT INTO users (name, email, password, phone) VALUES (?, ?, ?, ?)',
		[name, email, password, phone],
	);

	if (result.affectedRows) {
		return true;
	} else {
		return false;
	}
};

Model.findByEmail = async (email) => {
	const [result] = await pool.query('SELECT * FROM users WHERE email = ?', [
		email,
	]);
	return result.length > 0 ? result[0] : null;
};

Model.findByPhone = async (phone) => {
	const [result] = await pool.query('SELECT * FROM users WHERE phone = ?', [
		phone,
	]);
	return result.length > 0 ? result[0] : null;
};

module.exports = Model;
