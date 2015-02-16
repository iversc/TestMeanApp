'use strict';

angular.module('mean.testpack').controller('TestpackTestPageController', ['$scope', 'Global', 'Testpack',
  function($scope, Global, Testpack) {
    $scope.global = Global;
    $scope.package = {
      name: 'testpack'
    };
    
    this.testVar = 'test';
  }
]);

