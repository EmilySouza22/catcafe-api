const verificarOwnership = (req, res, next) => {
    const { id } = req.params;

    if (req.user.role === 'admin') return next();

    if (req.user.id !== parseInt(id)) {
        return res.status(403).json({ success: false, message: 'Acesso negado' });
    }

    next();
};

module.exports = { verificarOwnership };