const Middleware = {};

// TODO: implementar middleware de autenticação JWT
Middleware.authenticateToken = (req, res, next) => {
	const token = req.headers['authorization'];

	if (!token) {
		return res.status(401).json({
			success: false,
			message: 'Token não fornecido',
		});
	}

	// Validar token 
	next();
};

// TODO: implementar middleware de autorização admin
Middleware.authorizeAdmin = (req, res, next) => {
	// verificar se o usuário tem role ADMIN
	if (req.auth && req.auth.role === 'ADMIN') {
		next();
	} else {
		return res.status(403).json({
			success: false,
			message: 'Acesso não autorizado',
		});
	}
};

module.exports = Middleware;
