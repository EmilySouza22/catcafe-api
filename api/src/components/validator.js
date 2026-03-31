const Validator = {};

Validator.validateRegister = (user) => {
	try {
		Validator.validateName(user.name);
		Validator.validateEmail(user.email);
		Validator.validatePassword(user.password);
		Validator.validatePhone(user.phone);
		return { valid: true, message: null };
	} catch (error) {
		return { valid: false, message: error.message };
	}
};

Validator.validateName = (name) => {
	//Se a string é vazia
	if (!name) {
		throw new Error('The name cannot remain empty');
	}

	//Se o nome possui formato de string
	if (typeof name !== 'string') {
		throw new Error('The name must be a string');
	}

	//Se o nome possui números
	for (let char of name) {
		if (char >= '0' && char <= '9') {
			throw new Error('The name cannot contain numbers.');
		}
	}

	//Validação se o nome possui caracteres especiais
	const specialCharacters = '!@#$%^&*()_+-=[]{}|;:,.<>?/\\~`';
	for (let char of name) {
		if (specialCharacters.includes(char)) {
			throw new Error('The name cannot contain special characters');
		}
	}
};

Validator.validateEmail = (email) => {
	//Se a string é vazia
	if (!email) {
		throw new Error('The email cannot remain empty');
	}

	if (email) {
		let containsAt = 0;

		for (let char of email) {
			if (char === '@') {
				containsAt++;
			}
		}

		if (containsAt === 0 || containsAt > 1) {
			throw new Error('The email cannot remain empty');
		}
	}
	return email;
};

Validator.validatePassword = (password) => {
	//Se a string é vazia
	if (!password) {
		throw new Error('The email cannot remain empty');
	}
};

Validator.validatePhone = (phone) => {
	//Se a string é vazia
	if (!phone) {
		throw new Error('The phone cannot remain empty');
	}
};

module.exports = Validator;
