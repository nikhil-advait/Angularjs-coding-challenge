angular.module('testClusterMD')
  .directive('orderCategory',[function(){
      var cssClassMap = {
        'Total Orders' : 'total-orders',
        'Unassigned' : 'unassigned',
        'Allotted' : 'allotted',
        'Collected': 'collected',
        'Delivered': 'delivered',
        'Cancelled': 'cancelled'
      };

    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'dashboard-app/test-cluster/orders-count/order-category-dir.html',
        scope: {
          order: '='
        },
        link: function(scope, el, attrs){
          scope.cssClassMap = cssClassMap;
        }
    };
  }]);
