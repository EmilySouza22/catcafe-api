const bcrypt = require('bcrypt');

const Utils = {};

Utils.createHash = async (senha) => {
    const saltRounds = 10
    const hash = await bcrypt.hash(senha, saltRounds)
    return hash
}

module.exports = Utils;