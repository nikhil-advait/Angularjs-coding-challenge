angular.module('testClusterMD')
  .controller('ClusterWiseOrdersCT', ['$scope', 'testClusterSV', function($scope, testClusterSV){
    //ideally we should be using controller as syntax and use 'this' instead of $scope
    //but I am keeping things simple here

    var piePromise = testClusterSV.getCluserWiseOrders().then(function(data){
      $scope.pieData = data;
    });

    var barPromise = testClusterSV.getSingleCluserOrders().then(function(data){
      $scope.barData = data;
    });

  }])
