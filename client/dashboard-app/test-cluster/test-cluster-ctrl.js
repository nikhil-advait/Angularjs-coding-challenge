angular.module('testClusterMD')
  .controller('TestClusterCT', ['$scope', function($scope){
    //ideally we should be using controller as syntax and use 'this' instead of $scope
    //but I am keeping things simple here

    console.log('in TestClusterCT');
  }])
