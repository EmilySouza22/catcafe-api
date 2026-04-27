const { saveUser, findByEmail, findByPhone } = require('../models/user.js');
const { validateRegister } = require('../components/validator.js');
const { createHash } = require('../utils/createHash.js');

const UserComponent = {};

UserComponent.createAccount = async (userData) => {

	// validacao formato
	const { valid, message } = validateRegister(userData);

	if (!valid) {
		return { created: false, message };
	}

	// regras de negocio

	// se email ja existe
	const existingEmail = await findByEmail(userData.email);
	if (existingEmail) {
		return { created: false, message: 'Email já cadastrado no sistema' };
	}

	// phone já existe no banco?
	const existingPhone = await findByPhone(userData.phone);
	if (existingPhone) {
		return { created: false, message: 'Telefone já cadastrado no sistema' };
	}

	// hash da senha 
	const hashedPassword = await createHash(userData.password);
	const userWithHashedPassword = {
		...userData,
		password: hashedPassword
	};

	// criar usuario
	const userResult = await saveUser(userWithHashedPassword);

	if (userResult) {
		return { created: true, message: 'Usuário criado com sucesso' };
	} else {
		return { created: false, message: 'Erro ao criar usuário' };
	}
};

module.exports = UserComponent;
