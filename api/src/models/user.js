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

module.exports = Model;
