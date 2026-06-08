const UserRepository = require('../repositories/user');
const Validator = require('../utils/validator');
const { createHash } = require('../utils/createHash');

const AuthService = {};

AuthService.createAccount = async (userData) => {
    const { valid, message } = Validator.validateRegister(userData);
    if (!valid) return { created: false, message };

    const existingEmail = await UserRepository.findByEmail(userData.email);
    if (existingEmail) return { created: false, message: 'Email já cadastrado no sistema' };

    const existingPhone = await UserRepository.findByPhone(userData.phone);
    if (existingPhone) return { created: false, message: 'Telefone já cadastrado no sistema' };

    const hashedPassword = await createHash(userData.password);
    const id = await UserRepository.save({ ...userData, password: hashedPassword });

    return id
        ? { created: true, message: 'Usuário criado com sucesso', data: { email: userData.email } }
        : { created: false, message: 'Erro ao criar usuário' };
};

module.exports = AuthService;