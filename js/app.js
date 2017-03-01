angular.module('app', ['ngMessages']);

angular.module('app')
  .controller('listaContatos', listaContatos);


function listaContatos($scope) {
  $scope.title = 'Lista Telefonica';

  $scope.contatos = [
    {nome: 'Jon', telefone: '9999-8888', operadora: 'WesterosPhone', data: new Date()},
    {nome: 'Dany', telefone: '8888-7777', operadora: 'WesterosPhone', data: new Date()}
  ];

  $scope.operadoras = [
    {nome: 'Oi', codigo: '11', categoria: 'Celular'},
    {nome: 'Vivo', codigo: '25', categoria: 'Celular'},
    {nome: 'Tim', codigo: '41', categoria: 'Celular'},
    {nome: 'GVT', codigo: '33', categoria: 'Fixo'},
    {nome: 'Embratel', codigo: '21', categoria: 'Fixo'}
  ];

  $scope.adicionarContato = function(contato) {
    contato.data = new Date();
    $scope.contatos.push(angular.copy(contato));
    delete contato;
  };

  $scope.removerContato = function(indice) {
    $scope.contatos.splice(indice, 1);
  };

  $scope.removerSelecionados = function(contato, todos) {
    console.debug('TODOS => ', todos);
    if(todos) $scope.contatos = [];
    else $scope.contatos = contato.filter(function(obj, index, arr) {
      return !obj.selecionado;
    });
  };

  $scope.isSelecionados = function(contato) {
    var isSelecionados =  contato.some(function(obj) {
      return obj.selecionado;
    });
    return isSelecionados;
  };

  $scope.ordenarPor = function(nomeDoCampo) {
    $scope.campo = nomeDoCampo;
    $scope.reverso = !$scope.reverso;
  };

};
