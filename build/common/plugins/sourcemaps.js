var webpack = require('webpack');

module.exports = new webpack.SourceMapDevToolPlugin({
  test: /\.js?$/,
  exclude: /vendor\.js$/,
  columns: false
});
