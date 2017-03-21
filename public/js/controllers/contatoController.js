angular.module('app')
  .controller('listaDeContatos', _listaDeContatos)
  .controller('formContatos', _formContatos);

function _formContatos($scope, $state, $location, $resource) {
  $scope.title = 'Salvar Contato';
  //Função para iniciar a rota com modal aberto
  (function () {
    $('#formModal').modal('show');
  }());

  //Voltar para rota anterior
  $scope.goBackRoute = function() {
    $location.path('#!/contatos');
  };

  if(!$state.params.indice) {
    $scope.salvarModal = function(contato) {
      var ContatosResource = $resource('/contatos/salvar');
      var contatosResource = new ContatosResource();
      contato.data = new Date();
      contatosResource.contato = angular.copy(contato);
      contatosResource.$save();
      $scope.$emit('contato.reload');
      $scope.goBackRoute();
    };
  }else{
    $scope.contatos = [];
    var contatoIndice = $state.params.indice;
    var ContatoResource = $resource('/contatos');
    ContatoResource.query(function(contatos) {
      $scope.contatos = contatos;
      $scope.contato = contatos[contatoIndice];
    });

    $scope.salvarModal = function(contato) {
      var ContatoResource = $resource('/contatos/editar');
      var contatosResource = new ContatoResource();
      $scope.contato.data = new Date();
      $scope.contatos.splice(contatoIndice, 1, $scope.contato);
      contatosResource.contatos = $scope.contatos;
      contatosResource.$save();
      $scope.$emit('contato.reload');
      $scope.goBackRoute();
    };
  }
};

// contoller para lista contatos
function _listaDeContatos($scope, $state, $location, $resource) {
  $scope.title = 'Lista de Telefonica';
    //armazena o 'ID' do contato que será excluido
    var contatoId = 0;

  //array com a lista de contatos
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

  $scope.selecionarTodos = function(contatos) {
    contatos.forEach(function(contato) {
      contato.selecionado = !contato.selecionado;
    });
  };

  $scope.removerSelecionados = function(contatos) {
    var isSelecionado = contatos.some(function(contato) {
      return contato.selecionado;
    });

    if(isSelecionado) {
      $scope.contatos = contatos.filter(function(obj, index, arr) {
        return !obj.selecionado;
      });
      var ContatosResource = $resource('/contatos/remover'),
          contatosResource = new ContatosResource();

      contatosResource.contatos = $scope.contatos;
      contatosResource.$save();
    }

  };

  $scope.isSelecionados = function(contato) {
    var isSelecionados =  contato.some(function(obj) {
      return obj.selecionado;
    });
    return isSelecionados;
  };

  $scope.removerContato = function(contato, indice) {
    contato.selecionado = true;
    console.log(contato);

    $scope.removerSelecionados([contato]);
    // $scope.$emit('contato.reload');
  };

  $scope.ordenarPor = function(nomeDoCampo) {
    $scope.campo = nomeDoCampo;
    $scope.reverso = !$scope.reverso;
  };

  $scope.selecionarFavorito = function(contato) {
    var ContatosResource = $resource('/contatos/editar');
    var contatosResource = new ContatosResource();

    contato.isFavorito = !contato.isFavorito;
    console.log($scope.contatos);
    contatosResource.contatos = angular.copy($scope.contatos);
    contatosResource.$save();
    $scope.$emit('contato.reload');
  };

  // console.log($state);
};
