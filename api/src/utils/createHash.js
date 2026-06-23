const bcrypt = require('bcrypt');

const SALT_ROUNDS = 12;

const createHash = async (plainText) => bcrypt.hash(plainText, SALT_ROUNDS);

module.exports = { createHash };
