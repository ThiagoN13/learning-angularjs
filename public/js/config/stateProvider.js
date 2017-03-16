angular.module('app')
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/contatos');

    $stateProvider
      .state('contatos', {
        url: '/contatos',
        templateUrl: '../../partials/lista-contatos.html',
        controller: 'listaDeContatos'
      })
      .state('contatos.form', {
        url: '/form',
        templateUrl: '../../partials/form-contatos.html',
        controller: 'listaDeContatos'
      });
  }]);
