(function (angular) {
  'use strict';

  angular.module('angular-custom-file-input.directives').directive('uploadFile', uploadFile);

  function uploadFile() {
    var directive = {
      restrict: 'E',
      replace: false,
      transclude: true,
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
      template.push('<ng-transclude></ng-transclude>');
      template.push('<input type="button" value="{{ufc.value}}"');
      template.push('ng-click="ufc.openDialog()" ng-hide="ufc.hideDefault" />');
      return template.join(' ');
    }
    
  }

  UploadFileController.$inject = ['$scope'];
  function UploadFileController($scope) {
    var vm = this;
    vm.inputFileElement = null;
    vm.hideDefault = false;
    vm.getMimeTypes = getMimeTypes;
    vm.openDialog = openDialog;
    vm.hideDefaultButton = hideDefaultButton;
    
    function hideDefaultButton() {
      vm.hideDefault = true;
    }
   
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
