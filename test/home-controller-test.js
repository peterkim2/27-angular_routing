'use strict';

require('./lib/test-setup.js');

const angular = require('angular');

describe('Home Controller', function() {
  beforeEach(() => {
    angular.mock.module('routesApp');
    angular.mock.inject($controller => {
      this.homeCtrl = new $controller('HomeController');
    });
  });
  describe('title property', () => {
    it('title property should equal Welcome to the App!', () => {
      expect(this.homeCtrl.title).toBe('Welcome to the App!');
    });
  });
});
