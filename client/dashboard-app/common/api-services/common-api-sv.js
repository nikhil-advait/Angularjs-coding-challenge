angular.module('commonMD')
  .service('apiSV', ['$http', function($http){
    return {
      getOrders: function(){
        return $http({
          url: '/api/order-counts'
        }).then(function(res){
          return res.data;
        });
      },

      getCluserWiseOrders: function(){
        return $http({
          url: '/api/cluster-wise-orders'
        }).then(function(res){
          return res.data;
        });
      },

      getSingleCluserOrders: function(){
        return $http({
          url: '/api/single-cluster-orders'
        }).then(function(res){
          return res.data;
        });
      },

      getRiderAttendance : function(){
        return $http({
          url: '/api/rider-attendance'
        }).then(function(res){
          return res.data;
        });
      },

      getAlerts : function(){
        return $http({
          url: '/api/alerts'
        }).then(function(res){
          return res.data;
        });
      }
    };

  }]);
