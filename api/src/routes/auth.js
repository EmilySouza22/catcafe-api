const express = require('express');
const router = express.Router();

//controller
const {
	handleRegister,
	handleLogin,
	handleLogout,
} = require('../controllers/auth.js');

router.post('/register', async (req, res) => {
	await handleRegister(req, res);
});

router.post('/login', async (req, res) => {
	await handleLogin(req, res);
});

router.post('/logout', async (req, res) => {
	await handleLogout(req, res);
});

module.exports = router;
