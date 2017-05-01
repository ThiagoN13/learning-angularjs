angular.module('app', ['ngMessages', 'ui.router', 'ngResource']);

angular.module('app')
  .run(function($rootScope, $resource) {
    //array com a lista de contatos
    $rootScope.contatos = [];

    $rootScope.buscarTodosContatos = function(){
      var ContatosResource = $resource('/contatos');
      ContatosResource.query(function(contatos) {
        $rootScope.contatos = contatos;
      });
    };

    // Carga inicial
    $rootScope.buscarTodosContatos();


    var rootEvent = $rootScope.$on('contato.reload', $rootScope.buscarTodosContatos);

  });
