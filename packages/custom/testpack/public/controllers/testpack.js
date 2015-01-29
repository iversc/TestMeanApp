'use strict';

angular.module('mean.testpack').controller('TestpackController', ['$scope', 'Global', 'Testpack',
  function($scope, Global, Testpack) {
    $scope.global = Global;
    $scope.package = {
      name: 'testpack'
    };
  }
]);
