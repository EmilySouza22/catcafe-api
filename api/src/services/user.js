// services/user.js
const UserRepository = require('../repositories/user');

const UserService = {};

UserService.getProfile = async (id) => {
    const user = await UserRepository.findById(id);
    if (!user) return { found: false, message: 'Usuário não encontrado' };
    return { found: true, data: user };
};

UserService.updateProfile = async (id, userData) => {
    const updated = await UserRepository.update(id, userData);
    if (!updated) return { updated: false, message: 'Usuário não encontrado' };
    return { updated: true, message: 'Perfil atualizado com sucesso' };
};

UserService.deleteAccount = async (id) => {
    const deleted = await UserRepository.delete(id);
    if (!deleted) return { deleted: false, message: 'Usuário não encontrado' };
    return { deleted: true, message: 'Conta deletada com sucesso' };
};

module.exports = UserService;