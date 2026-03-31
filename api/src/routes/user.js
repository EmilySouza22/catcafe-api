//Importando router do express
const express = require('express');
const router = express.Router();

//controller
const { handleCreateAccount } = require('../controllers/user.js');

// TODO, adicionar os endpoints aqui
router.post('/create', async (req, res) => {
	await handleCreateAccount(req, res);
});

module.exports = router;
