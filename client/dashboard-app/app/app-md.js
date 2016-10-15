(function(){
  var app = angular.module('appMD', ['ui.router', 'testClusterMD', 'commonMD']);

  app.config(['$stateProvider', function($stateProvider){
    $stateProvider
    .state(
      {
        name: 'app',
        url: '/',
        abstract: true,
        templateUrl: 'dashboard-app/app/app.html',
        controller: 'AppCtrl' //controllers are javascript constructors
       //i.e classes as they are invoked everytime view is loaded hence
       //its good practice to name them starting with uppercase
      })
      .state({
        name: 'app.testCluster',
        abstract: true,
        templateUrl: 'dashboard-app/test-cluster/test-cluster.html',
        controller: 'TestClusterCT'
      })
      .state({
        name: 'app.testCluster.details',
        url: 'test-cluster',
        views:{
          'ordersCount@app.testCluster' :{
            templateUrl: 'dashboard-app/test-cluster/orders-count/orders-count.html',
            controller: 'OrdersCountCT',
          },
          'clusterWiseOrders@app.testCluster' :{
            templateUrl: 'dashboard-app/test-cluster/cluster-wise-orders/cluster-wise-orders.html',
            controller: 'ClusterWiseOrdersCT',
          },
          'riderAttendance@app.testCluster' :{
            templateUrl: 'dashboard-app/test-cluster/rider-attendance/rider-attendance.html',
            controller: 'RiderAttendanceCT',
          },
          'sellersIssues@app.testCluster' :{
            templateUrl: 'dashboard-app/test-cluster/sellers-issues/sellers-issues.html',
            controller: 'SellersIssuesCT',
          },

        }
      })
  }]);

  app.run(function($state){

    //default state
    $state.go('app.testCluster.details');

  });

})();
