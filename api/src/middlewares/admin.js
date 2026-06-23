const AuthAdmin = (req, res, next) => {
	if (!req.user || req.user.role !== 'admin') {
		return res.status(403).json({ success: false, message: 'Acesso negado' });
	}
	next();
};

module.exports = AuthAdmin;
