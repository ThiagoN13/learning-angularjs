module.exports = function() {

  var listaDeContatos = [
    {nome: 'Jon', telefone: '9999-8888', operadora: 'WesterosPhone', data: new Date(), selecionado: false, isFavorito: true},
    {nome: 'Dany', telefone: '8888-7777', operadora: 'WesterosPhone', data: new Date(), selecionado: false, isFavorito: true}
  ];

  function _buscarTodosContatos(req, res) {
    res.json(listaDeContatos);
  }

  function _salvarContatos(req) {
    var doc = req.body.contato;
    listaDeContatos.push(doc);
  }

  function _editarContatos(req) {
    var contatos = req.body.contatos;

    listaDeContatos = contatos;
  }

  function _removerContatos(req) {
    var newContatos = req.body.contatos;
    listaDeContatos = newContatos;
  }

  return {
    buscarTodosContatos: _buscarTodosContatos,
    salvarContatos: _salvarContatos,
    editarContatos: _editarContatos,
    removerContatos: _removerContatos
  };
};
