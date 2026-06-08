const express = require('express');
const router = express.Router();
const { handleGetProfile, handleUpdateProfile, handleDeleteAccount } = require('../controllers/user');
const autenticar = require('../middlewares/autenticar');
const autorizarAdmin = require('../middlewares/autorizarAdmin');
const Auth = require('../middlewares/auth');

//usuario acessar o proprio perfil
router.get('/profile/:id', Auth, handleGetProfile);
router.put('/profile/:id', Auth, handleUpdateProfile);
router.delete('/account/:id', Auth, handleDeleteAccount);

// admin passe livre pra acesso
router.get('/admin/profile/:id', Auth, autorizarAdmin, handleGetProfile);
router.put('/admin/profile/:id', Auth, autorizarAdmin, handleUpdateProfile);
router.delete('/admin/account/:id', Auth, autorizarAdmin, handleDeleteAccount);

module.exports = router;