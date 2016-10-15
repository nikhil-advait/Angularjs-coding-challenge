angular.module('testClusterMD')
  .directive('horiBarChart',[function(){
    return {
        restrict: 'A',
        scope: {
          data: '=',
        },
        link: function(scope,el, attrs){

          scope.$watch('data', function(newVal){
            if(newVal !== undefined){
              drawPieChart(newVal);
            }
          });

          function drawPieChart(data){
            c3.generate({
                bindto: '#' + attrs.id,
                size: {
                  height: 250
                },
                data: {
                  x: 'x-axis',
                  columns: data.columns,/*[
                    ['x-axis', 'Present', 'Not Recorded', 'Leave with Approval',
                    'Leave without Approval', 'Weekly Off'],
                    ['data1', 170, 30, 50, 95, 20]
                  ],*/
                  type: 'bar',
                  colors: {
                    data1: '#67B333'
                  }
                },
                legend: {
                  show: false
                },
                bar: {
                  width: {
                    ratio: 0.5
                  }
                },
                axis: {
                  rotated: true,
                  x: {
                    type: 'category',

                  }
                }
              });
          }

        }
    };
  }]);
