export async function enviarMensagem(req, res) {
  const { nome, email, assunto, mensagem } = req.body;

  if (!nome || !email || !assunto || !mensagem) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
  }

  console.log('Nova mensagem de contato:', { nome, email, assunto, mensagem });

  return res.status(200).json({ message: 'Mensagem recebida com sucesso.' });
}