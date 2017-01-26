'use strict';

require('./singup.scss');

module.exports = ['$log', SignupController];

function SignupController($log) {
  $log.debug('SignupController');

  this.title = 'App - Sign up';
}
