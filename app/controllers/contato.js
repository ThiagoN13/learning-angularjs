module.exports = function(app) {

  var listaDeContatos = [
    {nome: 'Jon', telefone: '9999-8888', operadora: 'WesterosPhone', data: new Date(), selecionado: false, isFavorito: true},
    {nome: 'Dany', telefone: '8888-7777', operadora: 'WesterosPhone', data: new Date(), selecionado: false, isFavorito: true}
  ];

  function _buscarTodosContatos(req, res, next) {
    res.json(listaDeContatos);
  };

  function _salvarContatos(req, res, next) {
    var doc = req.body.contato;
    listaDeContatos.push(doc);
  };

  function _editarContatos(req, res, next) {
    var contatos = req.body.contatos;

    listaDeContatos = contatos;
  };

  function _removerContatos(req, res, next) {
    var newContatos = req.body.contatos;
    listaDeContatos = newContatos;
  };

  return {
    buscarTodosContatos: _buscarTodosContatos,
    salvarContatos: _salvarContatos,
    editarContatos: _editarContatos,
    removerContatos: _removerContatos
  };
};
