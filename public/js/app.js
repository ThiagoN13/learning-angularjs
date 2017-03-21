angular.module('app', ['ngMessages', 'ui.router', 'ngResource']);

angular.module('app')
  .run(['$rootScope', '$resource', function($rootScope, $resource) {
    //array com a lista de contatos
    $rootScope.contatos = [];

    $rootScope.buscarTodosContatos = function(){
      var ContatosResource = $resource('/contatos');
      ContatosResource.query(function(contatos) {
        $rootScope.contatos = contatos;
      });
      console.log('RUN rootScope');
    };

    // Carga inicial
    $rootScope.buscarTodosContatos();


    $rootScope.$on('contato.reload', $rootScope.buscarTodosContatos);

  }]);
