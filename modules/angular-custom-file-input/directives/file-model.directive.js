(function (angular) {
  'use strict';
  
  angular.module('angular-custom-file-input.directives').directive('fileModel', fileModel);
  
  fileModel.$inject = ['$parse'];
  
  function fileModel($parse) {
    var directive = {
      restrict: 'A',
      link: link
    };
    return directive;
    
    function link($scope, element, attrs) {
      var model = $parse(attrs.fileModel);
      var modelSetter = model.assign;
      element.bind('change', function(){
        $scope.$apply(function(){
          modelSetter($scope, element[0].files);
        });
      });
    }
  }
  
})(angular);
