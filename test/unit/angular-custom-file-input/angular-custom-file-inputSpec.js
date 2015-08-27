'use strict';

describe('', function() {

  var module;
  var dependencies;
  dependencies = [];

  var hasModule = function(module) {
  return dependencies.indexOf(module) >= 0;
  };

  beforeEach(function() {

  // Get module
  module = angular.module('angular-custom-file-input');
  dependencies = module.requires;
  });


  
  it('should load directives module', function() {
    expect(hasModule('angular-custom-file-input.directives')).to.be.ok;
  });
  

  
  it('should load services module', function() {
    expect(hasModule('angular-custom-file-input.services')).to.be.ok;
  });
  

  

});
