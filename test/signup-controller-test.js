'use strict';

require('./lib/test-setup.js');

const angular = require('angular');

describe('Signup Controller', function() {
  beforeEach(() => {
    angular.mock.module('routesApp');
    angular.mock.inject($controller => {
      this.signupCtrl = new $controller('SignupController');
    });
  });
  describe('title property', () => {
    it('title property should equal App - Sign up', () => {
      expect(this.signupCtrl.title).toBe('App - Sign up');
    });
  });
});
