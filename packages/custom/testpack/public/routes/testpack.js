'use strict';

angular.module('mean.testpack').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider
	    .state('testpack example page', {
	      url: '/testpack/example',
	      templateUrl: 'testpack/views/index.html'
	    })
	    .state('testpack test page', {
		    url: '/testpack/test',
		    templateUrl: 'testpack/views/test.html'
	    });
  }
]);
