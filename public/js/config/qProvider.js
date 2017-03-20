// fix issue for Unhandled Rejections
angular.module('app')
  .config(['$qProvider', function($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
  }]);
