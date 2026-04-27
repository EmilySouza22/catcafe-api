const { createAccount } = require('../components/auth');
const { validateEmail } = require('../components/validator');

const Controller = {};

Controller.handleRegister = async (req, res) => {
	const userData = req.body;

	try {
		const result = await createAccount(userData);

		if (result.created) {
			return res.status(201).json({
				success: true,
				message: result.message,
				data: result.data,
			});
		} else {
			return res.status(400).json({
				success: false,
				message: result.message,
			});
		}
	} catch (error) {
		res.status(500).json({
			success: false,
			message: 'Erro interno do servidor',
			error: error.message,
		});
	}
};

Controller.handleLogin = async (req, res) => {
	// TODO: implementar lógica de login
	res.status(501).json({
		success: false,
		message: 'Endpoint não implementado',
	});
};

Controller.handleLogout = async (req, res) => {
	// TODO: implementar lógica de logout
	res.status(501).json({
		success: false,
		message: 'Endpoint não implementado',
	});
};

module.exports = Controller;
