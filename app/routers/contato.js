module.exports = function(app) {
  contatoController = app.controllers.contato;

  app.get('/contatos', contatoController.buscarTodosContatos);
  app.post('/contatos/salvar', contatoController.salvarContatos);
  app.post('/contatos/remover', contatoController.removerContato);
};
