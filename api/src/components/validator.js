const Validator = {};

Validator.validateRegister = (user) => {
	try {
		Validator.validateName(user.name);
		Validator.validateEmail(user.email);
		Validator.validatePassword(user.password);
		Validator.validatePhone(user.phone);
		return true;
	} catch {
		return false;
	}
};

Validator.validateName = (name) => {
	if (!name || typeof name !== 'string')
		throw new Error('Name must be a non-empty string');
	if (/[0-9]/.test(name)) throw new Error('Name cannot contain numbers');
	if (/[!@#$%^&*()_+\-=\[\]{}|;:,.<>?/\\~`]/.test(name))
		throw new Error('Name cannot contain special characters');
};

Validator.validateEmail = (email) => {
	if (!email || typeof email !== 'string')
		throw new Error('Email must be a non-empty string');
	if (/\s/.test(email)) throw new Error('Email cannot contain spaces');
	const atCount = (email.match(/@/g) || []).length;
	if (atCount !== 1) throw new Error('Email must contain exactly one @');
	if (/[^a-zA-Z0-9@._+-]/.test(email))
		throw new Error('Email contains invalid characters');
	const [local, domain] = email.split('@');
	if (!local || !domain || !domain.includes('.'))
		throw new Error('Invalid email format');
};

Validator.validatePassword = (password) => {
	if (!password || typeof password !== 'string')
		throw new Error('Password must be a non-empty string');
	if (password.length < 8)
		throw new Error('Password must be at least 8 characters');
	if (password.length > 255)
		throw new Error('Password must be at most 255 characters');
	if (!/[A-Z]/.test(password))
		throw new Error('Password must contain at least one uppercase letter');
	if (!/[a-z]/.test(password))
		throw new Error('Password must contain at least one lowercase letter');
	if (!/[0-9]/.test(password))
		throw new Error('Password must contain at least one number');
};

Validator.validatePhone = (phone) => {
	if (!phone || typeof phone !== 'string')
		throw new Error('Phone must be a non-empty string');
	if (/\s/.test(phone)) throw new Error('Phone cannot contain spaces');
	if (/[^0-9]/.test(phone)) throw new Error('Phone must contain only digits');
	if (phone.length > 20) throw new Error('Phone must be at most 20 characters');
};

module.exports = Validator;
