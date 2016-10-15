angular.module('testClusterMD')
  .controller('OrdersCountCT', ['$scope', 'testClusterSV', function($scope, testClusterSV){
    //ideally we should be using controller as syntax and use 'this' instead of $scope
    //but I am keeping things simple here

    $scope.apiPromise = testClusterSV.getOrders().then(function(orders){
      $scope.ordersByCategory = orders
    });

    /*[{
      status: 'Total Orders',
      count: 111
    },
    {
      status: 'Unassigned',
      count: 454
    },
    {
      status: 'Allotted',
      count: 214
    },
    {
      status: 'Collected',
      count: 747
    },
    {
      status: 'Delivered',
      count: 343
    },
    {
      status: 'Cancelled',
      count: 434
    }];
    */
  }])
