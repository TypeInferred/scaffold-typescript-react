var path = require('path');
var modulesDir = path.join(__dirname, '..', '..', 'node_modules');

module.exports = [{
  test: /[^\.].\.tsx?$/,
  loaders: ['awesome-typescript'],
  exclude: [modulesDir]
}, {
  test: /\.d\.ts$/,
  loaders: ['ignore'],
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
}, {
  test: /\.css$/,
  loaders: ['style', 'css']
}, {
  test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
  loader: 'file?name=fonts/[name].[ext]'
}, {
  test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
  loader: 'file?name=fonts/[name].[ext]'
}, {
  test: /\.png|ico$/,
  loader: 'file?name=images/[name].[ext]'
}, {
  test: /\.json$/,
  loader: 'file?name=config/[name].[ext]'
}];
