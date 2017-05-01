module.exports = function(app) {
  var contatoController = app.controllers.contato;

  app.get('/contatos', contatoController.buscarTodosContatos);
  app.post('/contatos/salvar', contatoController.salvarContatos);
  app.post('/contatos/remover', contatoController.removerContatos);
  app.post('/contatos/editar', contatoController.editarContatos);
};
