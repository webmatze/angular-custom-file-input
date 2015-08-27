(function (angular) {
  'use strict';

  angular.module('angular-custom-file-input.directives').directive('uploadFile', uploadFile);

  function uploadFile() {
    var directive = {
      restrict: 'E',
      replace: false,
      scope: {
        types: '=',
        selectedFiles: '=',
        name: '@',
        value: '@'
      },
      template: generateTemplate,
      controller: UploadFileController,
      controllerAs: 'ufc',
      bindToController: true
    };
    
    return directive;

    
    function generateTemplate(element, attrs) {
      var template = [];
      template.push('<input file-input="ufc.inputFileElement" file-model="ufc.selectedFiles"');
      template.push('type="file" name="{{ufc.name}}"');
      if (attrs.hasOwnProperty('types')) {
        template.push('accept="{{ufc.getMimeTypes()}}"');
      }
      if (attrs.hasOwnProperty('multiple')) {
        template.push('multiple');
      }
      template.push('style="display:none"></input>');
      template.push('<input type="button" value="{{ufc.value}}" ng-click="ufc.openDialog()" />');
      return template.join(' ');
    }
    
  }

  UploadFileController.$inject = ['$scope'];
  function UploadFileController($scope) {
    var vm = this;
    vm.inputFileElement = null;
    vm.getMimeTypes = getMimeTypes;
    vm.openDialog = openDialog;
    
    function getMimeTypes() {
      var mimeTypes = '';
      if (vm.types instanceof Array) {
        mimeTypes = vm.types.join(',');
      } else if (vm.types instanceof String) {
        mimeTypes = vm.types;
      }
      return mimeTypes;
    }
    
    function openDialog() {
      vm.inputFileElement.click();
    }
  } 
  
})(angular);
