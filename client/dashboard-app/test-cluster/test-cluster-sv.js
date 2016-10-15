angular.module('testClusterMD')
  .service('testClusterSV', ['apiSV', function(apiSV){

      var getOrders = function(){
        return apiSV.getOrders();
      };

      var getCluserWiseOrders = function(){
        return apiSV.getCluserWiseOrders().then(function(data){
          /*
            data format is
            {
              'Cluser 1' : 26,
              'Cluser 2' : 28,
              'Cluser 3' : 91,
              'Cluser 4' : 76,
            }
          */
          var retObj = {
            columns: [
              ['x-axis', 'data']
            ],
            name: {}
          };

          for(key in data){
            var dataKeyName = 'data' + key.split(' ')[1];
            var tempArr = [dataKeyName, data[key]];
            retObj.columns.push(tempArr);
            retObj.name[dataKeyName] = key;
          }

          return retObj;
          /*
            retObj will be like
            {
              columns: [
                 ['x-axis', 'data'],
                 ["data1",26],
                 ["data2",28],
                 ["data3",91],
                 ["data4",76]
               ],
              names: {
                data1: 'Cluster 1',
                data2: 'Cluster 2',
                data3: 'Cluster 3',
                data4: 'Cluster 4'
              }
            }
          */
        })
      };

      var getSingleCluserOrders = function(){
        return apiSV.getSingleCluserOrders().then(function(data){
          /*
            data format is
            {
              'Seller 1' : 12,
              'Seller 2' : 28,
            }
          */
          var retObj = {
            columns: [
              ['x-axis'],
              ['data1']
            ]
           };

          for(key in data){
            retObj.columns[0].push(key);
            retObj.columns[1].push(data[key]);
          }

          return retObj;
          /*
            retObj will be like
            {
              columns: [
                ['x-axis', 'Seller 1', 'Seller 2', 'Seller 3',
                'Seller 4', 'Seller 5', 'Seller 6', 'Seller 7','Seller 7'],
                ['data1', 20, 30, 50, 95, 130, 25, 190, 15]
              ],
            }
          */
        })
      };

      var getRiderAttendance = function(){
        return apiSV.getRiderAttendance().then(function(data){
          /*
            data format is
            {
              'Present' : 170,
              'Not Recorded' : 30,
            }
          */
          var retObj = {
            columns: [
              ['x-axis'],
              ['data1']
            ]
           };

          for(key in data){
            retObj.columns[0].push(key);
            retObj.columns[1].push(data[key]);
          }

          return retObj;
          /*
            retObj will be like
            {
              columns: [
                ['x-axis', 'Present', 'Not Recorded', 'Leave with Approval',
                'Leave without Approval', 'Weekly Off'],
                ['data1', 170, 30, 50, 95, 20]
              ],
            }
          */
        })
      };

      var getAlerts = function(){
        return apiSV.getAlerts();
      }

    return {
      getOrders : getOrders,
      getCluserWiseOrders: getCluserWiseOrders,
      getSingleCluserOrders: getSingleCluserOrders,
      getRiderAttendance : getRiderAttendance,
      getAlerts: getAlerts
    };
  }]);
