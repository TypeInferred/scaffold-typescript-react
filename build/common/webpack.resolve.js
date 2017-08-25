var path = require('path');
var nodeModulesDir = path.join(__dirname, '..', '..', 'node_modules');

module.exports = {
  extensions: ['.ts', '.tsx', '.js', '.jsx', '.styl', '.css'],
  modules: [
    nodeModulesDir
  ]
};
