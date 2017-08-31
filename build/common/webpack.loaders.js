var path = require('path');
var modulesDir = path.join(__dirname, '..', '..', 'node_modules');

module.exports = [{
  test: /\.tsx?/,
  enforce: 'pre',
  use: 'tslint-loader',
  exclude: [modulesDir]
}, {
  test: /\.tsx?/,
  use: 'awesome-typescript-loader',
  exclude: [modulesDir],
}, {
  test: /\.html$/,
  use: 'file-loader',
  exclude: [modulesDir]
}, {
  test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
  use: 'file-loader?name=fonts/[name].[ext]'
}, {
  test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
  use: 'file-loader?name=fonts/[name].[ext]'
}, {
  test: /\.png|ico$/,
  use: 'file-loader?name=images/[name].[ext]'
}];
