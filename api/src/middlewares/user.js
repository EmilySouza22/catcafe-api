const Middleware = {};

// TODO, aqui é um exemplo de middleware, mover para uma pasta src/middleware e importar aqui
Middleware.adminRequest = (req, res, next) => {
	if (req.auth.role === 'ADMIN') {
		next();
	} else {
		return next(false);
	}
};

module.exports = Middleware;