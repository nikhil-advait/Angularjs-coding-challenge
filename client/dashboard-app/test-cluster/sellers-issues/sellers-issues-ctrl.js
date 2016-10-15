angular.module('testClusterMD')
  .controller('SellersIssuesCT', ['$scope', 'testClusterSV', function($scope, testClusterSV){
    var alertsPromise = testClusterSV.getAlerts().then(function(data){
      $scope.issues = data;
    });
  }])
