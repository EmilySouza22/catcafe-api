const AdocaoService = require('../services/adocaoService');

const AdocaoController = {};

AdocaoController.listarGatos = async (req, res) => {
  try {
    const gatos = await AdocaoService.listarGatos();
    return res.status(200).json(gatos);
  } catch (err) {
    return res.status(err.status || 500).json({ error: err.message || 'Erro interno.' });
  }
};

AdocaoController.buscarGato = async (req, res) => {
  try {
    const gato = await AdocaoService.buscarGato(Number(req.params.id));
    return res.status(200).json(gato);
  } catch (err) {
    return res.status(err.status || 500).json({ error: err.message || 'Erro interno.' });
  }
};

AdocaoController.solicitarAdocao = async (req, res) => {
  try {
    const user_id = req.user.id; // vem do middleware de auth
    const cat_id = Number(req.params.id);
    const resultado = await AdocaoService.solicitarAdocao(user_id, cat_id);
    return res.status(201).json(resultado);
  } catch (err) {
    return res.status(err.status || 500).json({ error: err.message || 'Erro interno.' });
  }
};

AdocaoController.minhasAdocoes = async (req, res) => {
  try {
    const user_id = req.user.id;
    const adocoes = await AdocaoService.minhasAdocoes(user_id);
    return res.status(200).json(adocoes);
  } catch (err) {
    return res.status(err.status || 500).json({ error: err.message || 'Erro interno.' });
  }
};

module.exports = AdocaoController;