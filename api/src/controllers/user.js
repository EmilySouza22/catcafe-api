const Controller = {};

Controller.handleGetProfile = async (req, res) => {
	// TODO: obtenção de perfil
	res.status(501).json({
		success: false,
		message: 'Endpoint não implementado',
	});
};

Controller.handleUpdateProfile = async (req, res) => {
	// TODO: atualização de perfil
	res.status(501).json({
		success: false,
		message: 'Endpoint não implementado',
	});
};

Controller.handleDeleteAccount = async (req, res) => {
	// TODO: exclusão de conta
	res.status(501).json({
		success: false,
		message: 'Endpoint não implementado',
	});
};

module.exports = Controller;
