const jwt = require('jsonwebtoken');

const ACCESS_SECRET = process.env.JWT_ACCESS_SECRET || 'access_secret_dev';
const REFRESH_SECRET = process.env.JWT_REFRESH_SECRET || 'refresh_secret_dev';

const signTokenAcesso = (payload) =>
	jwt.sign(payload, ACCESS_SECRET, { expiresIn: '15m' });

const signTokenRefresh = (payload) =>
	jwt.sign(payload, REFRESH_SECRET, { expiresIn: '7d' });

const verificarTokenAcesso = (token) => jwt.verify(token, ACCESS_SECRET);

const verificarTokenRefresh = (token) => jwt.verify(token, REFRESH_SECRET);

module.exports = {
	signTokenAcesso,
	signTokenRefresh,
	verificarTokenAcesso,
	verificarTokenRefresh,
};
