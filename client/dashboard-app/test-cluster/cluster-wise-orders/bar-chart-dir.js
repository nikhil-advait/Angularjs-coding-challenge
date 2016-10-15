angular.module('testClusterMD')
  .directive('barChart',[function(){
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
                    ['x-axis', 'Seller 1', 'Seller 2', 'Seller 3',
                    'Seller 4', 'Seller 5', 'Seller 6', 'Seller 7','Seller 7'],
                    ['data1', 20, 30, 50, 95, 130, 25, 190, 15]
                  ],*/
                  type: 'bar',
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
                  x: {
                    type: 'category'
                  }

                }
              });
          }

        }
    };
  }]);
