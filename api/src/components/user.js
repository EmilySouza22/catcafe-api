const { saveUser } = require('../models/user.js');
const { validateRegister } = require('../components/validator.js');

const UserComponent = {};

UserComponent.createAccount = async (userData) => {
	// Validações regras de negócio

	//Email(unique) já existe no banco?

	//Phone(unique) já existe no banco?

	//usar o Hash para a password aqui (bcrypt)

	// outras regras de negocio do catcafe

	// legal utilizar o componente validator que tem cobertura de testes
	const { valid, message } = validateRegister(userData);

	if (valid) {
		const userResult = await saveUser(userData);

		if (userResult) {
			return { created: true, message: 'Usuário criado no banco' };
		} else {
			return { created: false, message: 'Usuário não foi criado' };
		}
	} else {
		return { created: false, message };
	}
};

module.exports = UserComponent;
