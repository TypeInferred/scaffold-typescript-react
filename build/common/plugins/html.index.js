var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = new HtmlWebpackPlugin({
  title: 'Scaffold',
  chunks: ['main', 'vendor']
});
