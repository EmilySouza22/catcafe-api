const express = require('express');
const router = express.Router();
const {
	handleGetProfile,
	handleUpdateProfile,
	handleDeleteAccount,
} = require('../controllers/user');
const Auth = require('../middlewares/auth');
const AuthAdmin = require('../middlewares/admin');
const { verificarOwnership } = require('../middlewares/user');

router.get('/profile/:id', Auth, verificarOwnership, handleGetProfile);
router.put('/profile/:id', Auth, verificarOwnership, handleUpdateProfile);
router.delete('/account/:id', Auth, verificarOwnership, handleDeleteAccount);

router.get('/admin/profile/:id', Auth, AuthAdmin, handleGetProfile);
router.put('/admin/profile/:id', Auth, AuthAdmin, handleUpdateProfile);
router.delete('/admin/account/:id', Auth, AuthAdmin, handleDeleteAccount);

module.exports = router;
