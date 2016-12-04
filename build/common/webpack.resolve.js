var path = require('path');
var modulesDir = path.join(__dirname, '..', '..', 'node_modules');

module.exports = {
  extensions: ['', '.ts', '.tsx', '.js', '.jsx', '.styl', '.css'],
  modulesDirectories: [],
  root: modulesDir
};
