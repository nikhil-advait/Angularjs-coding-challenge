// Auto complete list
angular.module('commonMD')
  .directive('zsLoadIndicator', ['$timeout', '$compile',function ($timeout, $compile) {
    return {
      restrict: 'A',
      scope: {
        zsPromise: '=',
        zsFlag: '=',
        zsMessage: '=',
      },
      link: function (scope, element, attrs) {
        //element.css('visibility', 'hidden');

        toggleShow(false);

        if(scope.zsFlag !== undefined){
          scope.$watch('zsFlag', function(newVal){
            if(newVal !== undefined){
              toggleShow(newVal);
            }
          });
        }

        if(scope.zsPromise && typeof scope.zsPromise.then === 'function'){
          toggleShow(true);
          scope.zsPromise.finally(function(){
            toggleShow(false);
          });
        }

        function toggleShow(flagBool){
          if(flagBool === true){
            element.css('visibility', 'hidden');
          }else{
            element.css('visibility', 'visible');
          }
          scope.showFlag = flagBool;
        };

        var tpl = [
          '<div ng-show="showFlag">',
          '<div ng-show="zsMessage">{{zsMessage}}</div>',
          '</div>'
        ];



        $timeout(function () {
          $( $compile( tpl.join('') )(scope)).insertBefore(element);
        }, 0);
      }
    }

  }]);
