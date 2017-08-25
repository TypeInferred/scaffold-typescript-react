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
  test: /\.styl$/,
  use: [
    'style-loader?sourceMap',
    'css-loader?sourceMap&modules&localIdentName=[name]__[local]___[hash:base64:5]',
    'stylus-loader?sourceMap'
  ],
  exclude: [modulesDir]
}, {
  test: /\.css$/,
  use: [
    'style-loader',
    'css-loader'
  ]
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
