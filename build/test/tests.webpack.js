// ES5 shims for Function.prototype.bind, Object.prototype.keys, etc.
require('core-js/es5');
var context = require.context('../../src', true, /\.spec\.tsx?$/);
context.keys().forEach(context);
var chai = require('chai');
chai.config.truncateThreshold = 0;
