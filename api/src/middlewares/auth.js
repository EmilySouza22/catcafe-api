//autenticando o usuario
const { verificarTokenAcesso } = require('../utils/jwt');

const Auth = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Bearer <token>

    if (!token) {
        return res.status(401).json({ success: false, message: 'Token não fornecido' });
    }

    try {
        const payload = verificarTokenAcesso(token);
        req.user = payload;
        next();
    } catch (error) {
        return res.status(403).json({ success: false, message: 'Token inválido ou expirado' });
    }
};

module.exports = Auth;