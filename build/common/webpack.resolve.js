var path = require('path');
var rootDir = path.join(__dirname, '..', '..');

module.exports = {
  extensions: ['', '.ts', '.tsx', '.js', '.jsx', '.styl', '.css'],
  modulesDirectories: ['node_modules'],
  root: rootDir
};
