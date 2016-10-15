angular.module('testClusterMD')
  .controller('RiderAttendanceCT', ['$scope', 'testClusterSV', function($scope,testClusterSV ){
    //ideally we should be using controller as syntax and use 'this' instead of $scope
    //but I am keeping things simple here

    $scope.horiPromise = testClusterSV.getRiderAttendance().then(function(data){
      $scope.horiBarData = data;
    });

  }])
