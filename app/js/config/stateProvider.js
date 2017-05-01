angular.module('app')
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/contatos');

    $stateProvider
      .state('contatos', {
        url: '/contatos',
        views: {
          '': {
            templateUrl: '../../partials/lista-contatos.html',
            controller: 'listaDeContatosController',
            controllerAs: 'viewModel'
          },
          'alert-modal@contatos': {
            templateUrl: '../../partials/modal-alert.html',
            controller: 'listaDeContatosController'
          }
        }
      })
      .state('contatos.form', {
        url: '/form/:indice',
        views: {
          '': {
            templateUrl: '../../partials/form-contatos.html',
            controller: 'formContatosController',
            controllerAs: 'viewModel'
          }
        }
      });
  });
