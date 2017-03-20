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
        url: '/form/:indice',
        views: {
          '': {
            templateUrl: '../../partials/form-contatos.html',
            controller: 'formContatos'
          },

          'alert-messages@contatos.form': {
            templateUrl: '../../partials/error-messages.html',
            controller: 'formContatos'
          }
        }
      });
  }]);
