var webpack = require('webpack');

module.exports = new webpack.optimize.CommonsChunkPlugin({
  name: 'vendor',
  filename: 'vendor.js',
  minChunks: function(module) {
    return module.resource && module.resource.indexOf('node_modules') !== -1;
  }
});
