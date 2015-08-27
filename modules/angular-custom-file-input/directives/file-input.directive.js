(function (angular) {
  'use strict';
  
  angular.module('angular-custom-file-input.directives').directive('fileInput', fileInput);
  
  fileInput.$inject = ['$parse'];
  
  function fileInput($parse) {
    var directive = {
      restrict: 'A',
      link: link
    };
    return directive;
    
    function link($scope, element, attrs) {
      var model = $parse(attrs.fileInput);
      var modelSetter = model.assign;
      modelSetter($scope, element[0]);
    }
  }
  
})(angular);
