module.exports = function(app) {

  var contatos = [
    {nome: 'Jon', telefone: '9999-8888', operadora: 'WesterosPhone', data: new Date()},
    {nome: 'Dany', telefone: '8888-7777', operadora: 'WesterosPhone', data: new Date()}
  ];

  function _buscarTodosContatos(req, res, next) {
    res.json(contatos);
  };

  function _salvarContatos(req, res, next) {
    var doc = req.body.contato;
    contatos.push(doc);
  };

  function _removerContatos(req, res, next) {
    var indice = req.body.indiceContato;
    contatos.splice(indice, 1);
  };

  return {
    buscarTodosContatos: _buscarTodosContatos,
    salvarContatos: _salvarContatos,
    removerContato: _removerContatos
  };
};
