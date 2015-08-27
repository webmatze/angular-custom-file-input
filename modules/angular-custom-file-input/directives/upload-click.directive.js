(function (angular) {
  'use strict';

  angular.module('angular-custom-file-input.directives').directive('uploadClick', uploadClick);
  
  function uploadClick() {
    var directive = {
      restrict: 'A',
      require: '^uploadFile',
      link: link
    };
    return directive;
    
    function link($scope, element, attributes, uploadFileController) {
      uploadFileController.hideDefaultButton();
      element.on('click', function(event) {
        event.preventDefault();
        uploadFileController.openDialog();
      });
    }
  }
  
})(angular);
