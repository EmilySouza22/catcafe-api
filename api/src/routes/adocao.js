const express = require('express');
const router = express.Router();
const AdocaoController = require('../controllers/adocaoController');
const authMiddleware = require('../middlewares/authMiddleware'); // ajuste o caminho se necessário

// Públicas
router.get('/gatos', AdocaoController.listarGatos);
router.get('/gatos/:id', AdocaoController.buscarGato);

// Autenticadas
router.post('/gatos/:id/solicitar', authMiddleware, AdocaoController.solicitarAdocao);
router.get('/minhas', authMiddleware, AdocaoController.minhasAdocoes);

module.exports = router;