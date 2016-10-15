angular.module('testClusterMD')
  .directive('pieChart',[function(){
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
                height: 280
              },
              data: {
                x: 'x-axis',
                columns: data.columns,/*[
                   ['x-axis', 'data'],
                   ["data1",26],
                   ["data2",28],
                   ["data3",91],
                   ["data4",76]
                 ],*/
                names: data.names,/*{
                  data1: 'Cluster 1',
                  data2: 'Cluster 2',
                  data3: 'Cluster 3',
                  data4: 'Cluster 4'
                },*/
                type: 'pie',
                labels: true,
                colors: {
                  data1: '#EA9423',
                  data2: '#E8E822',
                  data3: '#0990EA',
                  data4: '#1DD633'
                }
              },
              pie: {
                label: {
                  format: function (value) {
                    return value;
                  }
                }
              },
              legend: {
                show: true,
                position: 'inset'
              }
            });
          }

        }
    };
  }]);
