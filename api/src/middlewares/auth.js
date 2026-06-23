const { verificarTokenAcesso } = require('../utils/jwt');

const Auth = (req, res, next) => {
	const authHeader = req.headers['authorization'];
	const token = authHeader && authHeader.split(' ')[1];
	if (!token)
		return res
			.status(401)
			.json({ success: false, message: 'Token não fornecido' });
	try {
		req.user = verificarTokenAcesso(token);
		next();
	} catch {
		return res
			.status(403)
			.json({ success: false, message: 'Token inválido ou expirado' });
	}
};

module.exports = Auth;
