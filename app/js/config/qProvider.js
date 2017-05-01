// fix issue for Unhandled Rejections
angular.module('app')
  .config(function($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
  });
