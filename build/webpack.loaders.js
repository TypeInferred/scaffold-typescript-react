var path = require('path');
var modulesDir = path.join(__dirname, '..', 'node_modules');

module.exports = [{
  test: /\.tsx?$/,
  loaders: ['ts'],
  exclude: [modulesDir]
}, {
  test: /\.html$/,
  loaders: ['file'],
  exclude: [modulesDir]
}, {
  test: /\.styl$/,
  loaders: [
    'style?sourceMap', 
    'css?sourceMap&modules&localIdentName=[name]__[local]___[hash:base64:5]',
    'stylus?sourceMap'
  ],
  exclude: [modulesDir]
}];
