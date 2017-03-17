angular.module('app')
  .controller('listaDeContatos', listaDeContatos);

// contoller para contatos
function listaDeContatos($scope, $state, $location, $resource) {
  $scope.title = 'Lista Telefonica';

  //Evento para iniciar a rota com modal aberto
  (function () {
    $('#formModal').modal('show');
  }());

  // $('#myModal').on('hide.bs.modal', function() {
  //   goBackRoute();
  // });

  $scope.goBackRoute = function() {
    $location.path('#!/contatos');
  };

  $scope.contatos = [];

  function buscarTodosContatos() {
    var ContatosResource = $resource('/contatos');
    ContatosResource.query(function(contatos) {
      $scope.contatos = contatos;
    });
  };
  //carga inicial
  buscarTodosContatos();

  $scope.$on('contato.reload', buscarTodosContatos);

  $scope.operadoras = [
    {nome: 'Oi', codigo: '11', categoria: 'Celular'},
    {nome: 'Vivo', codigo: '25', categoria: 'Celular'},
    {nome: 'Tim', codigo: '41', categoria: 'Celular'},
    {nome: 'GVT', codigo: '33', categoria: 'Fixo'},
    {nome: 'Embratel', codigo: '21', categoria: 'Fixo'}
  ];

  $scope.adicionarContato = function(contato) {
    var ContatosResource = $resource('/contatos/salvar');
    var contatosResource = new ContatosResource();
    contato.data = new Date();
    contatosResource.contato = angular.copy(contato);
    contatosResource.$save();
    delete contato;
    $scope.$emit('contato.reload');
    $scope.goBackRoute();
  };

  $scope.removerContato = function(indice) {
    var ContatosResource = $resource('/contatos/remover'),
        contatosResource = new ContatosResource();

    contatosResource.indiceContato = indice;
    contatosResource.$save();
    $scope.$emit('contato.reload');
  };

  $scope.removerSelecionados = function(contato, todos) {
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

  // console.log($state);
};
