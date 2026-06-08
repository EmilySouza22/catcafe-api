// controllers/auth.js
const bcrypt = require('bcrypt');
const AuthService = require('../services/auth');
const UserRepository = require('../repositories/user');
const { signTokenAcesso, signTokenRefresh } = require('../utils/jwt');

const AuthController = {};

AuthController.handleRegister = async (req, res) => {
    try {
        const result = await AuthService.createAccount(req.body);

        if (result.created) {
            return res.status(201).json({ success: true, message: result.message, data: result.data });
        }

        return res.status(400).json({ success: false, message: result.message });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, error: error.message });
    }
};

AuthController.handleLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await UserRepository.findByEmail(email);
        if (!user) {
            return res.status(401).json({ success: false, message: 'Credenciais inválidas' });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ success: false, message: 'Credenciais inválidas' });
        }

        const payload = { id: user.id, email: user.email, role: user.role };
        const accessToken = signTokenAcesso(payload);
        const refreshToken = signTokenRefresh(payload);

        return res.status(200).json({ success: true, message: 'Autenticado com sucesso', accessToken, refreshToken });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, error: error.message });
    }
};

AuthController.handleLogout = async (req, res) => {
    return res.status(200).json({ success: true, message: 'Logout realizado com sucesso' });
};

module.exports = AuthController;