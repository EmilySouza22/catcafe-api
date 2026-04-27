const express = require('express');
const router = express.Router();

//controller
const {
	handleGetProfile,
	handleUpdateProfile,
	handleDeleteAccount,
} = require('../controllers/user.js');

// TODO: middleware de autenticação 

router.get('/profile', async (req, res) => {
	await handleGetProfile(req, res);
});

router.put('/profile', async (req, res) => {
	await handleUpdateProfile(req, res);
});

router.delete('/profile', async (req, res) => {
	await handleDeleteAccount(req, res);
});

module.exports = router;
