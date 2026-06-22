const AdocaoRepository = require('../repositories/adocao');

const AdocaoService = {};

AdocaoService.listarGatos = async () => {
  return AdocaoRepository.findAllAvailable();
};

AdocaoService.buscarGato = async (id) => {
  const gato = await AdocaoRepository.findCatById(id);
  if (!gato) throw { status: 404, message: 'Gatinho não encontrado.' };
  return gato;
};

AdocaoService.solicitarAdocao = async (user_id, cat_id) => {
  const gato = await AdocaoRepository.findCatById(cat_id);
  if (!gato) throw { status: 404, message: 'Gatinho não encontrado.' };

  if (gato.adoption_status !== 'available') {
    throw { status: 409, message: 'Este gatinho não está disponível para adoção.' };
  }

  const jaExiste = await AdocaoRepository.findAdocaoByUserAndCat(user_id, cat_id);
  if (jaExiste) {
    throw { status: 409, message: 'Você já possui uma solicitação para este gatinho.' };
  }

  const id = await AdocaoRepository.createAdocao(user_id, cat_id);
  return { id, message: 'Solicitação de adoção enviada com sucesso.' };
};

AdocaoService.minhasAdocoes = async (user_id) => {
  return AdocaoRepository.findAdocoesByUser(user_id);
};

module.exports = AdocaoService;